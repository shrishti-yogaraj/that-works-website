import { useState } from "react";
import Nav from "@/components/Nav";

const stageOptions = [
  "Pre-revenue",
  "Early revenue (under £500k)",
  "Growing (£500k–£2M)",
  "Scaling (£2M+)",
  "I just need pipeline fast",
];

const blockerOptions = [
  "No system or foundation",
  "Poor lead quality or volume",
  "Team capacity or resource",
  "Tools that don't talk to each other",
  "I'm not sure — that's why I'm here",
];

const BookACall = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", stage: "", blocker: "" });
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneSent, setPhoneSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.company.trim()) return;
    setSubmitted(true);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setPhoneSent(true);
  };

  return (
    <>
      <Nav />

      <section className="bac-section">
        <div className="bac-inner">
          {/* LEFT */}
          <div className="bac-left">
            <h1>Let's figure out what's broken.</h1>
            <p className="bac-subline">And exactly what it takes to fix it.</p>
            <p className="bac-body">
              This is a 20-minute diagnostic call — not a pitch. We'll tell you where your marketing is stuck and what it would take to fix it. You leave with clarity whether we work together or not.
            </p>
            <div className="bac-points">
              <div className="bac-point">
                <span className="bac-point-icon">✦</span>
                <span>No pitch. Just honest diagnosis.</span>
              </div>
              <div className="bac-point">
                <span className="bac-point-icon">✦</span>
                <span>Prepared in advance — we do our homework.</span>
              </div>
              <div className="bac-point">
                <span className="bac-point-icon">✦</span>
                <span>You'll leave with something useful regardless.</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bac-right">
            {!submitted ? (
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
                  />
                </div>
                <div className="bac-field">
                  <label>Where are you right now?</label>
                  <select
                    value={form.stage}
                    onChange={(e) => setForm({ ...form, stage: e.target.value })}
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
                  >
                    <option value="">Select…</option>
                    {blockerOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Book My Call
                </button>
              </form>
            ) : (
              <div className="bac-post-submit">
                {/* Calendar placeholder */}
                <div className="bac-calendar-placeholder">
                  <span>📅</span>
                  <p>Calendar embed goes here</p>
                  <p style={{ fontSize: 12, color: 'var(--label)' }}>Calendly / Cal.com integration</p>
                </div>

                {/* Post-calendar prompt */}
                <div className="bac-quiz-prompt">
                  <p className="bac-quiz-text">
                    Want to make this call even more valuable? Take our 3-minute pre-call quiz and we'll personalise your audit before we even meet.
                  </p>
                  <a href="#" className="btn-ghost" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                    Take the Quiz →
                  </a>
                </div>
              </div>
            )}

            {/* OR DIVIDER + PHONE FALLBACK */}
            <div className="bac-divider">
              <span>or</span>
            </div>

            {!phoneSent ? (
              <form className="bac-phone-form" onSubmit={handlePhoneSubmit}>
                <p className="bac-phone-label">Prefer we reach out?</p>
                <div className="bac-phone-row">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7700 000000"
                    maxLength={20}
                    required
                  />
                  <button type="submit" className="btn-ghost">Call me instead →</button>
                </div>
              </form>
            ) : (
              <p className="bac-phone-confirm">Got it. We'll be in touch within one business day.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookACall;
