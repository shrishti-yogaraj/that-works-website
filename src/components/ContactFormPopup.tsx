import { useState, useEffect } from "react";
import { X } from "lucide-react";
import type { PopupMode } from "@/contexts/ContactPopupContext";
import { isValidEmail, isConsumerEmail, isValidPhone } from "@/lib/validation";
import { trackLead } from "@/lib/analytics";
import { sanityClient, sanityFileUrl } from "@/lib/sanity";

const WEBHOOK_URL = "https://shrishti-y.app.n8n.cloud/webhook/that-works-default-lead-form";
const GUIDE_WEBHOOK_URL = "https://shrishti-y.app.n8n.cloud/webhook/that-works-guide-download";
const CAL_BASE = "https://calendly.com/thatworks-shrishti/20-min-diagnostic?background_color=12100f&text_color=f0e6d3&primary_color=fbbf24";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
  mode?: PopupMode;
}

type Status = "idle" | "submitting" | "success-download" | "success-email" | "error";

const ContactFormPopup = ({ open, onOpenChange, source = "general", mode = "booking" }: Props) => {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [newsletter, setNewsletter] = useState(true);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [guideFileUrl, setGuideFileUrl] = useState<string | null>(null);
  const [guideFilename, setGuideFilename] = useState("that-works-gtm-guide.pdf");

  const isGuide = mode === "guide";
  const isIdle = status === "idle" || status === "submitting";

  // Fetch the guide PDF from the Downloads library when popup opens in guide mode.
  // The slug "gtm-guide" must match a Download document in Sanity.
  useEffect(() => {
    if (!open || !isGuide || guideFileUrl) return;
    sanityClient
      .fetch<{ ref: string; filename: string } | null>(
        `*[_type == "download" && slug.current == "gtm-guide"][0] {
          "ref": file.asset._ref,
          filename
        }`
      )
      .then((doc) => {
        if (doc?.ref) {
          setGuideFileUrl(sanityFileUrl(doc.ref));
          if (doc.filename) setGuideFilename(doc.filename);
        }
      })
      .catch(() => {}); // silently fail — webhook still fires
  }, [open, isGuide, guideFileUrl]);

  // Reset state when popup closes
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStatus("idle");
        setValues({ name: "", email: "", phone: "" });
        setNewsletter(true);
        setTouched({});
        setSubmitAttempted(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const show = (field: string) => touched[field] || submitAttempted;

  const errors = {
    name: !values.name.trim() ? "Please enter your name." : null,
    email: !isValidEmail(values.email) ? "Please enter a valid email address." : null,
    phone: !isGuide && !isValidPhone(values.phone) ? "Please enter a valid phone number (e.g. +61 400 000 000)." : null,
  };

  const consumerWarning = isValidEmail(values.email) && isConsumerEmail(values.email);
  const hasErrors = !!errors.name || !!errors.email || (!isGuide && !!errors.phone);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleBlur = (field: string) =>
    setTouched(prev => ({ ...prev, [field]: true }));

  // ── Guide: submit webhook then trigger download or show email success ──────
  const submitGuide = async (intent: "download" | "email") => {
    setStatus("submitting");
    try {
      const res = await fetch(GUIDE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          newsletter,
          intent,
          source,
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error();
      trackLead("guide", source);

      if (intent === "download" && guideFileUrl) {
        // Trigger the actual file download
        const a = document.createElement("a");
        a.href = guideFileUrl;
        a.download = guideFilename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setStatus("success-download");
      } else {
        setStatus("success-email");
      }
    } catch {
      setStatus("error");
    }
  };

  // ── Booking: submit lead form ─────────────────────────────────────────────
  const submitBooking = async () => {
    setStatus("submitting");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source, mode, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error();
      setStatus("success-email");
      trackLead("booking", source);
    } catch {
      setStatus("error");
    }
  };

  const handleGuideAction = (intent: "download" | "email") => {
    setSubmitAttempted(true);
    if (hasErrors) return;
    submitGuide(intent);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (hasErrors) return;
    submitBooking();
  };

  const handlePickSlot = () => {
    setSubmitAttempted(true);
    if (hasErrors) return;
    const url = new URL(CAL_BASE);
    if (values.name)  url.searchParams.set("name",  values.name);
    if (values.email) url.searchParams.set("email", values.email);
    if (values.phone) url.searchParams.set("a1",    values.phone);
    window.open(url.toString(), "_blank");
  };

  return (
    <div className="booking-overlay" onClick={() => onOpenChange(false)}>
      <div className="booking-card" onClick={e => e.stopPropagation()}>
        <button className="booking-close" onClick={() => onOpenChange(false)} aria-label="Close">
          <X size={18} />
        </button>

        {isIdle ? (
          <>
            <h2 className="booking-title">
              {isGuide ? "Download the GTM Guide" : "Book a diagnostic call"}
            </h2>
            <p className="booking-sub">
              {isGuide
                ? "Leave your details and grab it instantly, or we'll email it to you."
                : "20 minutes. No pitch. You'll leave with clarity."}
            </p>

            <form
              onSubmit={isGuide ? (e) => e.preventDefault() : handleSubmit}
              className="booking-form"
              noValidate
            >
              {/* Name — all modes */}
              <div className="booking-field">
                <label className="booking-label">Full name</label>
                <input
                  className={`booking-input${show("name") && errors.name ? " booking-input--error" : ""}`}
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  placeholder="Your name"
                  disabled={status === "submitting"}
                />
                {show("name") && errors.name && (
                  <span className="booking-field-error">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div className="booking-field">
                <label className="booking-label">Email</label>
                <input
                  className={`booking-input${show("email") && errors.email ? " booking-input--error" : ""}`}
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  placeholder="your@company.com"
                  disabled={status === "submitting"}
                />
                {show("email") && errors.email && (
                  <span className="booking-field-error">{errors.email}</span>
                )}
                {!errors.email && consumerWarning && (
                  <span className="booking-field-warning">
                    We prefer a business email where possible.
                  </span>
                )}
              </div>

              {/* Phone — booking only */}
              {!isGuide && (
                <div className="booking-field">
                  <label className="booking-label">Phone number</label>
                  <input
                    className={`booking-input${show("phone") && errors.phone ? " booking-input--error" : ""}`}
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone")}
                    placeholder="+61 400 000 000"
                    disabled={status === "submitting"}
                  />
                  {show("phone") && errors.phone && (
                    <span className="booking-field-error">{errors.phone}</span>
                  )}
                </div>
              )}

              {/* Newsletter checkbox — guide only */}
              {isGuide && (
                <label className="booking-newsletter">
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={e => setNewsletter(e.target.checked)}
                    disabled={status === "submitting"}
                  />
                  <span>Subscribe to the That Works newsletter</span>
                </label>
              )}

              <div className="booking-btns">
                {isGuide ? (
                  <>
                    <button
                      type="button"
                      className="booking-btn booking-btn--orange"
                      onClick={() => handleGuideAction("download")}
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "…" : "Download →"}
                    </button>
                    <button
                      type="button"
                      className="booking-btn booking-btn--lavender"
                      onClick={() => handleGuideAction("email")}
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "…" : "Email it to me"}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="booking-btn booking-btn--orange"
                      onClick={handlePickSlot}
                      disabled={status === "submitting"}
                    >
                      I'll pick a slot
                    </button>
                    <button
                      type="submit"
                      className="booking-btn booking-btn--lavender"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending…" : "Call me"}
                    </button>
                  </>
                )}
              </div>
            </form>
          </>
        ) : status === "success-download" ? (
          <div className="booking-state">
            <div className="booking-state-icon">↓</div>
            <h3 className="booking-state-title">Downloading now.</h3>
            <p className="booking-state-body">
              Check your downloads folder. We've also sent a copy to {values.email}.
            </p>
            <button className="btn-primary" onClick={() => onOpenChange(false)}>Done</button>
          </div>
        ) : status === "success-email" ? (
          <div className="booking-state">
            <div className="booking-state-icon">✓</div>
            <h3 className="booking-state-title">
              {isGuide ? "Check your inbox." : "We'll be in touch."}
            </h3>
            <p className="booking-state-body">
              {isGuide
                ? "The guide is on its way. Check your spam if it doesn't arrive within a few minutes."
                : "Expect a call within one business day."}
            </p>
            <button className="btn-primary" onClick={() => onOpenChange(false)}>Done</button>
          </div>
        ) : (
          <div className="booking-state">
            <div className="booking-state-icon booking-state-icon--error">!</div>
            <h3 className="booking-state-title">Something went wrong.</h3>
            <p className="booking-state-body">Please try again.</p>
            <button className="btn-primary" onClick={() => setStatus("idle")}>Try again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactFormPopup;
