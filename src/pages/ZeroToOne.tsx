import Nav from "@/components/Nav";

const stages = [
  { label: "0→1", path: "/services/marketing-os/zero-to-one", active: true },
  { label: "Friction", path: "/services/marketing-os/friction", active: false },
  { label: "Scale", path: "/services/marketing-os/scale", active: false },
  { label: "Leader", path: "/services/marketing-os/leader", active: false },
];

const tiers = [
  {
    name: "Foundation Sprint",
    duration: "4 weeks",
    price: "£8–12k",
    tagline: "You've built something worth talking about. Now let's make sure the right people hear it.",
    whoFor: "First-time or early-stage founder with a product ready to sell but zero marketing infrastructure.",
    deliverables: [
      "ICP definition and validation",
      "Positioning statement and messaging framework",
      "90-day marketing roadmap",
      "CRM setup",
      "One channel playbook",
    ],
    leaveWith: "Crystal clear on who you're talking to, what to say, and exactly where to start.",
    tier: "entry",
  },
  {
    name: "Engine Build",
    duration: "8 weeks",
    price: "£18–25k",
    tagline: "From blank page to built engine. Before you make your first marketing hire.",
    whoFor: "Founder who needs the full machine built before they hire anyone.",
    deliverables: [
      "Complete brand foundation",
      "Full tool stack implementation",
      "12-month roadmap",
      "Two channel playbooks",
      "SOP library and skill map",
    ],
    leaveWith: "A complete marketing system a junior hire can walk into and execute from day one.",
    tier: "popular",
    badge: "Most popular",
  },
  {
    name: "Full OS",
    duration: "12 weeks",
    price: "£35–50k",
    tagline: "Build it once. Build it right. Never rebuild.",
    whoFor: "Funded founder who wants to build the entire marketing function properly from the start.",
    deliverables: [
      "End-to-end brand identity",
      "Full inbound strategy across 3+ channels",
      "Outbound prospecting playbook",
      "Complete sales enablement suite",
      "Full org design",
    ],
    leaveWith: "A complete professional marketing function that looks like it's been running for years.",
    tier: "premium",
  },
];

const deliverableTiles = [
  "Positioning document", "Messaging framework", "Tone of voice guide",
  "90-day roadmap", "Tool stack configured", "CRM set up",
  "Channel playbook", "SOP library", "Skill map",
  "Handover session", "30-day check-in",
];

const ZeroToOne = () => {
  return (
    <>
      <Nav />

      {/* STAGE INDICATOR */}
      <div className="zto-stage-strip">
        <div className="zto-stage-strip-inner">
          <span className="zto-stage-label">Where are you right now?</span>
          <div className="zto-stage-pills">
            {stages.map((s) => (
              <a
                key={s.label}
                href={s.path}
                className={`zto-stage-pill${s.active ? " active" : ""}`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="zto-hero">
        <div className="zto-hero-inner">
          <h1>You've built something worth talking about.</h1>
          <p className="zto-hero-sub">Now let's make sure the right people hear it.</p>
          <p className="zto-hero-body">
            Before channels, before content, before campaigns — you need a foundation.
            Most early-stage founders skip this and pay for it later. That Works builds it first.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="zto-problem">
        <div className="zto-problem-inner">
          <h2>Tactics without infrastructure are just expensive noise.</h2>
          <p>
            You don't have a marketing problem. You have a foundation problem. The channels are wrong,
            the tools don't connect, and there's no system underneath any of it. The result: marketing
            that looks busy and produces nothing.
          </p>
        </div>
      </section>

      {/* TIER CARDS */}
      <section className="zto-tiers">
        <div className="zto-tiers-inner">
          {tiers.map((t) => (
            <div key={t.name} className={`zto-tier-card zto-tier-${t.tier}`}>
              {t.badge && <span className="zto-tier-badge">{t.badge}</span>}
              <h3>{t.name}</h3>
              <div className="zto-tier-meta">
                <span>{t.duration}</span>
                <span className="zto-tier-price">{t.price}</span>
              </div>
              <p className="zto-tier-tagline">{t.tagline}</p>
              <div className="zto-tier-section">
                <span className="zto-tier-section-label">Who it's for</span>
                <p>{t.whoFor}</p>
              </div>
              <div className="zto-tier-section">
                <span className="zto-tier-section-label">Deliverables</span>
                <ul>
                  {t.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="zto-tier-leave">
                <span className="zto-tier-section-label">You leave with</span>
                <p>{t.leaveWith}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RETAINER STRIP */}
      <section className="zto-retainer">
        <div className="zto-retainer-inner">
          <p>
            All engagements include an optional ongoing retainer — <strong>£2,500–£4,000/month</strong>.
            Strategic oversight, not execution. A thinking partner as you grow.
          </p>
        </div>
      </section>

      {/* WHAT YOU LEAVE WITH */}
      <section className="zto-deliverables">
        <div className="zto-deliverables-inner">
          <div className="section-label">Tangible. Documented. Yours.</div>
          <h2>What you leave with</h2>
          <div className="zto-del-grid">
            {deliverableTiles.map((d) => (
              <div key={d} className="zto-del-tile">{d}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="zto-cta">
        <div className="zto-cta-inner">
          <h2>Not sure which tier is right?</h2>
          <p className="zto-cta-sub">That's exactly what the diagnostic call is for.</p>
          <a href="/book-a-call" className="btn-primary">Book a Diagnostic Call</a>
          <p className="cta-note">20 minutes. No pitch. You'll leave with clarity regardless.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">That Works<span>.</span></div>
            <p className="footer-tagline">High performance GTM systems. Designed, implemented and handed over.</p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/approach">How It Works</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/services">Marketing OS TW</a></li>
              <li><a href="/services/lead-gen">Lead Gen TW</a></li>
              <li><a href="/services/branding">Branding TW</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 That Works. All rights reserved.</p>
          <p style={{ color: 'var(--label)' }}>thatworksco.com</p>
        </div>
      </footer>
    </>
  );
};

export default ZeroToOne;
