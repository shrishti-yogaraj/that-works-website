import { useState, useEffect } from "react";
import { X } from "lucide-react";
import type { PopupMode } from "@/contexts/ContactPopupContext";
import { isValidEmail, isConsumerEmail, isValidPhone } from "@/lib/validation";
import { trackLead } from "@/lib/analytics";

const WEBHOOK_URL = "https://shrishti-y.app.n8n.cloud/webhook/that-works-default-lead-form";
const CAL_BASE = "https://calendly.com/thatworks-shrishti/20-min-diagnostic?background_color=12100f&text_color=f0e6d3&primary_color=fbbf24";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
  mode?: PopupMode;
}

type Status = "idle" | "submitting" | "success" | "error";

const ContactFormPopup = ({ open, onOpenChange, source = "general", mode = "booking" }: Props) => {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const isGuide = mode === "guide";

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStatus("idle");
        setValues({ name: "", email: "", phone: "" });
        setTouched({});
        setSubmitAttempted(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const show = (field: string) => touched[field] || submitAttempted;

  const errors = {
    email: !isValidEmail(values.email) ? "Please enter a valid email address." : null,
    phone: !isGuide && !isValidPhone(values.phone) ? "Please enter a valid phone number (e.g. +61 400 000 000)." : null,
    name: !values.name.trim() ? "Please enter your name." : null,
  };

  const consumerWarning = isValidEmail(values.email) && isConsumerEmail(values.email);
  const hasErrors = !!errors.email || (!isGuide && !!errors.phone) || (!isGuide && !!errors.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleBlur = (field: string) =>
    setTouched(prev => ({ ...prev, [field]: true }));

  const submit = async () => {
    setStatus("submitting");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source, mode, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      trackLead(isGuide ? "guide" : "booking", source);
    } catch {
      setStatus("error");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (hasErrors) return;
    submit();
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

        {status === "idle" || status === "submitting" ? (
          <>
            <h2 className="booking-title">
              {isGuide ? "Download the GTM Guide" : "Book a diagnostic call"}
            </h2>
            <p className="booking-sub">
              {isGuide
                ? "Drop your email and we'll send it straight over."
                : "20 minutes. No pitch. You'll leave with clarity."}
            </p>
            <form onSubmit={handleSubmit} className="booking-form" noValidate>

              {/* Name — booking only */}
              {!isGuide && (
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
              )}

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
                  placeholder="your@email.com"
                  disabled={status === "submitting"}
                />
                {show("email") && errors.email && (
                  <span className="booking-field-error">{errors.email}</span>
                )}
                {!errors.email && consumerWarning && (
                  <span className="booking-field-warning">
                    We prefer a business email where possible — it helps us do a bit of research before your call.
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

              <div className="booking-btns">
                {isGuide ? (
                  <button
                    type="submit"
                    className="booking-btn booking-btn--orange"
                    style={{ width: "100%" }}
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending…" : "Send me the guide →"}
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="booking-btn booking-btn--orange"
                      onClick={handlePickSlot}
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
        ) : status === "success" ? (
          <div className="booking-state">
            <div className="booking-state-icon">✓</div>
            <h3 className="booking-state-title">
              {isGuide ? "Check your inbox." : "We'll be in touch."}
            </h3>
            <p className="booking-state-body">
              {isGuide
                ? "The guide is on its way. Check your spam folder if it doesn't arrive within a few minutes."
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
