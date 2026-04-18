import { useState } from "react";
import { Link } from "react-router-dom";
import { isValidEmail, isValidPhone, isValidLinkedIn } from "@/lib/validation";
import { trackJobApplication } from "@/lib/analytics";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import "@/styles/pages/join.css";
import "@/styles/pages/join2.css";

const WEBHOOK = "https://shrishti-y.app.n8n.cloud/webhook/hiring-application";
const OPEN_CALL_WEBHOOK = "https://shrishti-y.app.n8n.cloud/webhook/open-call-hiring-form";

// ─── Role data ────────────────────────────────────────────────────────────────

const internRoles = [
  {
    slug: "marketing-intern",
    name: "Marketing Intern",
    tagline: "Curious, hands-dirty, opinionated. Real work from day one.",
    desc: "An open call. We're not looking for a specific skill set; we're looking for someone who is curious, opinionated, and wants to get their hands dirty across strategy, content, and GTM. You'll do real work from day one.",
    badges: ["Intern", "Converts to full-time"],
  },
  {
    slug: "finance-intern",
    name: "Finance Intern",
    tagline: "Real numbers, direct founder access. No busywork.",
    desc: "Forecasting, reporting, and financial ops for a fast-moving consultancy. You'll work directly with the founder. No busywork, no coffee runs. Actual numbers that actually matter.",
    badges: ["Intern", "Converts to full-time"],
  },
  {
    slug: "ops-admin-intern",
    name: "Ops & Admin Intern",
    tagline: "You make everything run. Systems, people, process.",
    desc: "The person who makes everything run. Systems, scheduling, client ops, internal processes. If you're the kind of person who builds a spreadsheet for fun, we want to meet you.",
    badges: ["Intern", "Converts to full-time"],
  },
];

const fullTimeRoles = [
  {
    slug: "gtm-systems-engineer",
    name: "GTM Systems Engineer",
    tagline: "Build revenue infrastructure. Think in workflows, hate repetition.",
    desc: "You build the revenue infrastructure: CRMs, automation, data pipelines, outbound systems, attribution models. You speak both sales and engineering. You think in workflows and hate doing the same thing twice.",
    badges: ["Full-time"],
  },
  {
    slug: "sales",
    name: "Sales",
    tagline: "Believe in what you sell. Talk to real founders.",
    desc: "Young, confident, and genuinely excited about selling. Not because you have to, but because you believe in what you're selling. You'll work on real deals, talk to real founders, and learn how B2B growth actually works.",
    badges: ["Full-time"],
  },
];

// ─── How we hire ──────────────────────────────────────────────────────────────

const howItems = [
  {
    num: "01",
    title: "AI-first, not AI-always.",
    body: "We love AI, so we know where it helps. Recruitment isn't one of those places. We don't use AI to screen, and we ask that you don't use it to apply.",
  },
  {
    num: "02",
    title: "You are more than your resume.",
    body: "We care about who you are, how you think, and where you want to go. Half-formed, messy brain dumps over polished, sanitised paragraphs. Give us a peek into your brain.",
  },
  {
    num: "03",
    title: "Every application gets feedback.",
    body: "Every application gets a real response from a real person. Actual feedback, honest reasons, and whatever value we can add.",
  },
];

// ─── Role card (compact box) ──────────────────────────────────────────────────

const RoleCard = ({ role }: { role: typeof internRoles[0] }) => (
  <Link to={`/join/${role.slug}`} className="join-role-card-box">
    <div className="join-role-card-left">
      <div className="join-role-name">{role.name}</div>
      <p className="join-role-tagline">{role.tagline}</p>
    </div>
    <div className="join-role-card-right">
      <span className="join-role-apply">Apply →</span>
    </div>
  </Link>
);

// ─── Open call popup ──────────────────────────────────────────────────────────

const EXPAND_OPTIONS = new Set(["not-sure", "not-listed"]);

const OpenCallPopup = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [workInterest, setWorkInterest] = useState("");
  const [workExpand, setWorkExpand] = useState("");
  const [proudOf, setProudOf] = useState("");
  const [wantToOwn, setWantToOwn] = useState("");
  const [anythingElse, setAnythingElse] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const showWorkExpand = EXPAND_OPTIONS.has(workInterest);
  const show = (f: string) => touched[f] || submitAttempted;
  const handleBlur = (f: string) => setTouched(prev => ({ ...prev, [f]: true }));

  const fieldErrors = {
    email:    !isValidEmail(email)    ? "Please enter a valid email address." : null,
    phone:    !isValidPhone(phone)    ? "Please enter a valid phone number (e.g. +61 400 000 000)." : null,
    linkedin: !isValidLinkedIn(linkedin) ? "Please enter a valid LinkedIn URL (e.g. linkedin.com/in/yourprofile)." : null,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (Object.values(fieldErrors).some(Boolean)) return;
    setStatus("loading");
    try {
      const body = new FormData();
      body.append("type", "open_call");
      body.append("name", name);
      body.append("email", email);
      body.append("phone", phone);
      body.append("linkedin", linkedin);
      body.append("workInterest", workInterest);
      if (showWorkExpand) body.append("workInterestDetail", workExpand);
      body.append("proudOf", proudOf);
      body.append("wantToOwn", wantToOwn);
      if (anythingElse) body.append("anythingElse", anythingElse);
      if (file) body.append("cv", file);

      await fetch(OPEN_CALL_WEBHOOK, { method: "POST", body });
      setStatus("success");
      trackJobApplication("Open Call");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="join-popup-overlay" onClick={onClose}>
      <div className="join-popup" onClick={e => e.stopPropagation()}>
        <button className="join-popup-close" onClick={onClose}>✕</button>
        {status === "success" ? (
          <div className="join-popup-success">
            <div className="join-popup-success-hed">We'll be in touch.</div>
            <p className="join-popup-success-body">Thanks for reaching out. An actual human will read this and get back to you.</p>
          </div>
        ) : (
          <>
            <div className="join-popup-eyebrow">Open call</div>
            <h2 className="join-popup-title">Tell us about yourself.</h2>
            <p className="join-popup-body">No CV required, no cover letter template. We'd just love to get to know you a little!</p>
            <form className="join-popup-form" onSubmit={handleSubmit} noValidate>

              <div className="join-popup-row">
                <div className="join-popup-field">
                  <label className="join-popup-label">Your name</label>
                  <input
                    className="join-popup-input"
                    type="text"
                    placeholder="First and last"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="join-popup-field">
                  <label className="join-popup-label">Your email</label>
                  <input
                    className={`join-popup-input${show("email") && fieldErrors.email ? " join-popup-input--error" : ""}`}
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={() => handleBlur("email")}
                    required
                  />
                  {show("email") && fieldErrors.email && (
                    <span className="join-popup-field-error">{fieldErrors.email}</span>
                  )}
                </div>
              </div>

              <div className="join-popup-row">
                <div className="join-popup-field">
                  <label className="join-popup-label">Phone number</label>
                  <input
                    className={`join-popup-input${show("phone") && fieldErrors.phone ? " join-popup-input--error" : ""}`}
                    type="tel"
                    placeholder="+61 400 000 000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    required
                  />
                  {show("phone") && fieldErrors.phone && (
                    <span className="join-popup-field-error">{fieldErrors.phone}</span>
                  )}
                </div>
                <div className="join-popup-field">
                  <label className="join-popup-label">LinkedIn URL</label>
                  <input
                    className={`join-popup-input${show("linkedin") && fieldErrors.linkedin ? " join-popup-input--error" : ""}`}
                    type="url"
                    placeholder="linkedin.com/in/yourprofile"
                    value={linkedin}
                    onChange={e => setLinkedin(e.target.value)}
                    onBlur={() => handleBlur("linkedin")}
                    required
                  />
                  {show("linkedin") && fieldErrors.linkedin && (
                    <span className="join-popup-field-error">{fieldErrors.linkedin}</span>
                  )}
                </div>
              </div>

              <div className="join-popup-field">
                <label className="join-popup-label">Where do you naturally fit?</label>
                <select
                  className={`join-popup-input join-popup-select${workInterest === "" ? " join-popup-select--placeholder" : ""}`}
                  value={workInterest}
                  onChange={e => { setWorkInterest(e.target.value); setWorkExpand(""); }}
                  required
                >
                  <option value="" disabled>Pick the one that fits best</option>
                  <option value="marketing-strategy">Marketing &amp; Strategy</option>
                  <option value="gtm-systems">GTM Systems &amp; Automation</option>
                  <option value="sales">Sales &amp; Business Development</option>
                  <option value="finance-ops">Finance &amp; Ops</option>
                  <option value="content-brand">Content &amp; Brand</option>
                  <option value="not-sure">I&apos;m not sure yet</option>
                  <option value="not-listed">I don&apos;t see it on this list</option>
                </select>
                {showWorkExpand && (
                  <textarea
                    className="join-popup-input join-popup-textarea join-popup-expand"
                    placeholder={workInterest === "not-sure"
                      ? "That's completely fine. Tell us what you're drawn to, what you're good at, or what you find yourself thinking about."
                      : "Tell us what you do. We're all ears."}
                    value={workExpand}
                    onChange={e => setWorkExpand(e.target.value)}
                    required
                    rows={3}
                  />
                )}
              </div>

              <div className="join-popup-field">
                <label className="join-popup-label">Tell us something you made, solved, or figured out that you're genuinely proud of.</label>
                <textarea
                  className="join-popup-input join-popup-textarea"
                  placeholder="Could be a project, a decision, a system you built, a problem you cracked."
                  value={proudOf}
                  onChange={e => setProudOf(e.target.value)}
                  required
                  rows={3}
                />
              </div>

              <div className="join-popup-field">
                <label className="join-popup-label">What would you want to own here, and why us specifically?</label>
                <textarea
                  className="join-popup-input join-popup-textarea"
                  placeholder="Not 'I'm passionate about growth.' What would you actually build or run? And what is it about That Works that makes you think this is the right place?"
                  value={wantToOwn}
                  onChange={e => setWantToOwn(e.target.value)}
                  required
                  rows={3}
                />
              </div>

              <div className="join-popup-field">
                <label className="join-popup-label">
                  Anything else you want to tell us or show us?{" "}
                  <span className="join-popup-optional">(totally optional)</span>
                </label>
                <textarea
                  className="join-popup-input join-popup-textarea"
                  placeholder="A link, a thought, something that didn't fit anywhere else; chuck it here."
                  value={anythingElse}
                  onChange={e => setAnythingElse(e.target.value)}
                  rows={2}
                />
              </div>

              <div className="join-popup-field join-popup-field--file">
                <div className="join-popup-file-header">
                  <span className="join-popup-label">CV or portfolio</span>
                  <span className="join-popup-optional-tag">completely optional</span>
                </div>
                <label className="join-popup-file-label">
                  <input
                    type="file"
                    className="join-popup-file-input"
                    accept=".pdf,.doc,.docx,.pages"
                    onChange={e => setFile(e.target.files?.[0] ?? null)}
                  />
                  <span className="join-popup-file-btn">
                    {file ? `✓ ${file.name}` : "Choose file →"}
                  </span>
                  <span className="join-popup-file-hint">PDF, Word, or Pages</span>
                </label>
              </div>

              {status === "error" && (
                <p className="join-popup-error">Something went wrong. Try again.</p>
              )}
              <button className="join-popup-submit" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Send it →"}
              </button>

            </form>
          </>
        )}
      </div>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const Join2 = () => {
  const [openCallOpen, setOpenCallOpen] = useState(false);


  return (
  <>
    <SEOHead
      title="Join — That Works"
      description="We hire potential, not candidates. Open roles at That Works Co."
      canonical="/join"
    />

    {/* ── Parallax illustration layer (fixed, behind page content) ── */}
    <div className="join-illus-layer join2-illus-layer" aria-hidden="true">
      <img src="/illustrations/woman-monitor.png" className="join-illus join-illus--woman" alt="" />
      <img src="/illustrations/desk-setup.png"    className="join-illus join-illus--desk"  alt="" />
      <img src="/illustrations/man-laptop.png"    className="join-illus join-illus--man"   alt="" />

      {/* ── Decorative embellishments ── */}

      {/* ─ RIGHT column: above desk (0–500px) ─ */}
      <span className="j2-star" style={{ right: "12vw", top:  80, fontSize: 60, color: "#c4b5fd"  }}>✦</span>
      <span className="j2-star" style={{ right: "24vw", top: 200, fontSize: 92                    }}>✦</span>
      <span className="j2-star" style={{ right: "8vw",  top: 350, fontSize: 48, color: "#fbbf24"  }}>✦</span>
      <span className="j2-star" style={{ right: "20vw", top: 455, fontSize: 70, color: "#60a5fa"  }}>✦</span>

      {/* ─ RIGHT column: below desk dot patch (1280px+) ─ */}
      <span className="j2-star" style={{ right: "14vw", top: 1300, fontSize: 80, color: "#ff5c00"  }}>✦</span>
      <span className="j2-star" style={{ right: "23vw", top: 1430, fontSize: 52                    }}>✦</span>
      <span className="j2-star" style={{ right: "7vw",  top: 1520, fontSize: 68, color: "#c4b5fd"  }}>✦</span>
      <span className="j2-star" style={{ right: "19vw", top: 1640, fontSize: 44, color: "#34d399"  }}>✦</span>
      <span className="j2-star" style={{ right: "11vw", top: 1750, fontSize: 88, color: "#fbbf24"  }}>✦</span>

      {/* ─ LEFT column: gap between dot patches (810–1100px) ─ */}
      <span className="j2-star" style={{ left: "7vw",  top:  835, fontSize: 72, color: "#ff5c00" }}>✦</span>
      <span className="j2-star" style={{ left: "20vw", top:  880, fontSize: 44                   }}>✦</span>
      <span className="j2-star" style={{ left: "10vw", top: 1005, fontSize: 96, color: "#34d399" }}>✦</span>
      <span className="j2-star" style={{ left: "23vw", top: 1060, fontSize: 54, color: "#a78bfa" }}>✦</span>
    </div>

    <div className="join-page join2-page">
      <Nav variant="light" />

      {/* ── Hero (centered) ── */}
      <section className="join-hero">
        <div className="join-hero-inner">
          <div className="join-eyebrow">We're hiring</div>
          <h1 className="join-headline">
            Show us your mind,<br />not your <em>resume.</em>
          </h1>
          <p className="join-sub">
            No theatre. No polished nonsense. No AI-generated cover letters that say
            &ldquo;I am passionate about leveraging synergies.&rdquo; Just{" "}
            <strong style={{ color: "#c4b5fd" }}>real people doing real work.</strong>{" "}
            And having a pretty good time doing it.
          </p>
        </div>
      </section>

      {/* ── Who we are ── */}
      <section className="join-who">
        <div className="join-who-inner">
          <div className="join-section-label">Who we are</div>
          <p className="join-who-body">
            On paper, we're a GTM consultancy. In practice, we're a small, sharp team
            obsessed with one thing: building revenue systems that{" "}
            <strong>actually work.</strong>
          </p>
          <p className="join-who-body">
            We work with B2B founders who are done guessing. We come in, diagnose
            what's broken, build the infrastructure to fix it, and hand it over. No
            retainers. No endless strategy decks.{" "}
            <strong>Real systems, implemented properly.</strong>
          </p>
          <p className="join-who-body">
            We're small on purpose. We use AI everywhere it makes us sharper, and
            nowhere it makes us lazy. We take the work seriously and have a genuinely
            good time doing it. If that sounds like your kind of place,{" "}
            <strong>keep reading.</strong>
          </p>
        </div>
      </section>

      {/* ── How we hire ── */}
      <section className="join-how">
        <div className="join-section-label">How we hire</div>
        <div className="join-how-list">
          {howItems.map((item) => (
            <div key={item.num} className="join-how-item">
              <div className="join-how-num">{item.num}</div>
              <div className="join-how-content">
                <div className="join-how-title">{item.title}</div>
                <p
                  className="join-how-body"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Open roles ── */}
      <section className="join-roles" style={{ position: "relative" }}>
        <div className="join-roles-group">
          <div className="join-roles-group-label">Internships, with a path to full-time</div>
          <div className="join-roles-grid join-roles-grid--3">
            {internRoles.map((r) => <RoleCard key={r.slug} role={r} />)}
          </div>
        </div>
        <div className="join-roles-group">
          <div className="join-roles-group-label join-roles-group-label--yellow">Full-time roles</div>
          <div className="join-roles-grid join-roles-grid--2">
            {fullTimeRoles.map((r) => <RoleCard key={r.slug} role={r} />)}
          </div>
        </div>
      </section>

      {/* ── Open call ── */}
      <section className="join-open">
        <div className="join-open-inner">
          <div className="join-open-left">
            <div className="join-open-title">Don't see your role here?</div>
            <p className="join-open-body">
              If you're sharp, opinionated, and genuinely interested in how B2B businesses
              grow; we're always interested. Tell us who you are and what you'd want to do.
              Worst we can say is not right now.
            </p>
          </div>
          <button className="join-open-cta" onClick={() => setOpenCallOpen(true)}>
            Leave your details →
          </button>
        </div>
      </section>

    </div>
    <Footer />

    {openCallOpen && <OpenCallPopup onClose={() => setOpenCallOpen(false)} />}
  </>
  );
};

export default Join2;
