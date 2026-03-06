import { useState, useEffect } from "react";
import { X } from "lucide-react";

const WEBHOOK_URL = "https://shrishti-y.app.n8n.cloud/webhook/that-works-default-lead-form";
const CAL_BASE = "https://calendly.com/thatworks-shrishti/20-min-diagnostic?background_color=12100f&text_color=f0e6d3&primary_color=fbbf24";

export interface FormField {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

const DEFAULT_FIELDS: FormField[] = [
  { name: "name",  label: "Full name",    type: "text",  required: true },
  { name: "email", label: "Email",         type: "email", required: true },
  { name: "phone", label: "Phone number",  type: "tel",   required: true },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
  fields?: FormField[];
}

type Status = "idle" | "submitting" | "success" | "error";

const ContactFormPopup = ({ open, onOpenChange, source = "general", fields = DEFAULT_FIELDS }: Props) => {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => { setStatus("idle"); setValues({}); }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async () => {
    setStatus("submitting");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          source,
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleCallMe = (e: React.FormEvent) => { e.preventDefault(); submit(); };
  const handlePickSlot = () => {
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
            <h2 className="booking-title">Book a diagnostic call</h2>
            <p className="booking-sub">20 minutes. No pitch. You'll leave with clarity.</p>
            <form onSubmit={handleCallMe} className="booking-form">
              {fields.map(field => (
                <div key={field.name} className="booking-field">
                  <label className="booking-label">{field.label}</label>
                  <input
                    className="booking-input"
                    type={field.type || "text"}
                    name={field.name}
                    value={values[field.name] || ""}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder || ""}
                    disabled={status === "submitting"}
                  />
                </div>
              ))}
              <div className="booking-btns">
                <button type="button" className="booking-btn booking-btn--orange" onClick={handlePickSlot}>
                  I'll pick a slot
                </button>
                <button type="submit" className="booking-btn booking-btn--lavender" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Call me"}
                </button>
              </div>
            </form>
          </>
        ) : status === "success" ? (
          <div className="booking-state">
            <div className="booking-state-icon">✓</div>
            <h3 className="booking-state-title">We'll be in touch.</h3>
            <p className="booking-state-body">Expect a call within one business day.</p>
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
