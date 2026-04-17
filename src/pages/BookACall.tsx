import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const WEBHOOK_URL = "https://shrishti-y.app.n8n.cloud/webhook/that-works-default-lead-form";

// ── FILL THESE IN ──────────────────────────────────────────────────────────────
const CONTACT_EMAIL = "support@thatworksco.com";
const CLEO_PHONE    = "+91 96116 27878";
// ──────────────────────────────────────────────────────────────────────────────

const stageOptions = [
  "Pre-revenue",
  "Early revenue",
  "Growing",
  "Scaling",
  "I just need pipeline fast",
];

const blockerOptions = [
  "No system or foundation",
  "Poor lead quality or volume",
  "Team capacity or resource",
  "Tools that don't talk to each other",
  "I'm not sure - that's why I'm here",
];

type Status = "idle" | "submitting" | "success" | "error";

const BookACall = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", stage: "", blocker: "", notes: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;
    setStatus("submitting");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "contact-page", ...form }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SEOHead
        title="Contact — That Works"
        description="Get in touch with That Works. Send us a message or reach out directly — we'll figure out exactly where you are and what you need."
        canonical="/contact"
      />
      <Nav />

      <section className="bac-section">
        <div className="bac-inner">

          {/* LEFT — contact details */}
          <div className="bac-left">
            <p className="bac-eyebrow">Get in touch</p>
            <h1>We're easy to reach.</h1>
            <p className="bac-body">
              Drop us a message using the form, or reach out directly. We read everything and reply within one business day.
            </p>

            <div className="bac-contact-details">
              <div className="bac-contact-item">
                <span className="bac-contact-label">Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="bac-contact-value">{CONTACT_EMAIL}</a>
              </div>
              <div className="bac-contact-item">
                <span className="bac-contact-label">Phone — Cleo</span>
                <a href={`tel:${CLEO_PHONE.replace(/\s/g, "")}`} className="bac-contact-value">{CLEO_PHONE}</a>
              </div>
            </div>

            <div className="bac-points">
              <div className="bac-point">
                <span className="bac-point-icon">✦</span>
                <span>No pitch. Just honest conversation.</span>
              </div>
              <div className="bac-point">
                <span className="bac-point-icon">✦</span>
                <span>We reply within one business day.</span>
              </div>
              <div className="bac-point">
                <span className="bac-point-icon">✦</span>
                <span>Not sure what you need? That's fine — just say so.</span>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="bac-right">
            {status === "success" ? (
              <div className="bac-post-submit">
                <p className="bac-success-hed">Got it — we'll be in touch.</p>
                <p className="bac-success-body">We've received your message and will reply within one business day.</p>
              </div>
            ) : (
              <form className="bac-form" onSubmit={handleSubmit}>
                <div className="bac-field">
                  <label>Full name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Smith"
                    maxLength={100}
                    required
                    disabled={status === "submitting"}
                  />
                </div>
                <div className="bac-field">
                  <label>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    maxLength={255}
                    required
                    disabled={status === "submitting"}
                  />
                </div>
                <div className="bac-field">
                  <label>Phone number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 555 000 0000"
                    maxLength={30}
                    required
                    disabled={status === "submitting"}
                  />
                </div>
                <div className="bac-field">
                  <label>Company name</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Inc."
                    maxLength={100}
                    required
                    disabled={status === "submitting"}
                  />
                </div>
                <div className="bac-field">
                  <label>Where are you right now?</label>
                  <select
                    value={form.stage}
                    onChange={(e) => setForm({ ...form, stage: e.target.value })}
                    disabled={status === "submitting"}
                  >
                    <option value="">Select…</option>
                    {stageOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="bac-field">
                  <label>What's the biggest thing in the way?</label>
                  <select
                    value={form.blocker}
                    onChange={(e) => setForm({ ...form, blocker: e.target.value })}
                    disabled={status === "submitting"}
                  >
                    <option value="">Select…</option>
                    {blockerOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="bac-field">
                  <label>Anything else you want us to know? <span className="bac-optional">Optional</span></label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Context, questions, or anything that would help us prepare…"
                    rows={4}
                    maxLength={1000}
                    disabled={status === "submitting"}
                  />
                </div>
                {status === "error" && (
                  <p className="bac-error">Something went wrong — please try again or email us directly.</p>
                )}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default BookACall;
