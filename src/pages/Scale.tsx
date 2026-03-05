import Nav from "@/components/Nav";

const stages = [
  { label: "0→1", path: "/services/marketing-os/zero-to-one", active: false },
  { label: "Friction", path: "/services/marketing-os/friction", active: false },
  { label: "Scale", path: "/services/marketing-os/scale", active: true },
  { label: "Leader", path: "/services/marketing-os/leader", active: false },
];

const tiers = [
  {
    name: "Foundation Sprint",
    duration: "4 weeks",
    price: "£8–12k",
    tagline: "Your team doesn't need more hours. They need a better system.",
    whoFor: "Growing business where the marketing team is stretched thin, drowning in operational work, with no clear priority.",
    deliverables: [
      "Operations audit identifying highest-impact bottlenecks",
      "Prioritisation framework — what to keep, cut, automate, delegate",
      "Workflow redesign for top three time-consuming processes",
      "90-day scaling roadmap",
      "Skill map and gap analysis",
    ],
    leaveWith: "Clear priorities, streamlined workflows, and a 90-day plan that turns a busy team into a productive one.",
    tier: "entry",
  },
  {
    name: "Engine Build",
    duration: "8 weeks",
    price: "£18–25k",
    tagline: "Scale the system, not the headcount.",
    whoFor: "Business at £2M–£10M with a marketing team executing daily but no infrastructure underneath — data siloed, processes tribal, scaling means more people not better systems.",
    deliverables: [
      "Full process audit and SOP library",
      "Centralised reporting dashboard",
      "Workflow automation design",
      "Team skill map and hiring briefs",
      "12-month scaling roadmap with KPIs",
    ],
    leaveWith: "A documented automated marketing system that runs on process not personalities — ready to scale without proportional headcount.",
    tier: "popular",
    badge: "Most popular",
  },
  {
    name: "Full OS",
    duration: "12 weeks",
    price: "£35–50k",
    tagline: "You've outgrown the scrappy phase. Time to operate like it.",
    whoFor: "Business approaching or past £5M that needs to professionalise its entire marketing operation — they have budget and people but not the infrastructure to operate like a scaled function.",
    deliverables: [
      "Complete marketing operations overhaul",
      "Full SOP library across all four pillars",
      "Marketing OKR framework",
      "Team org design and onboarding documentation",
      "Advanced automation including lead scoring and lifecycle sequences",
    ],
    leaveWith: "A professional marketing operation with clear ownership, clean data, automated workflows, and executive-level reporting.",
    tier: "premium",
  },
];

const deliverableTiles = [
  "Full SOP library", "Centralised reporting dashboard", "Workflow automation map",
  "Hiring briefs", "OKR framework", "Team org design",
  "Positioning document", "Messaging framework", "Tone of voice guide",
  "90-day roadmap", "Tool stack configured", "CRM set up",
  "Channel playbook", "Skill map", "Handover session", "30-day check-in",
];

const Scale = () => {
  return (
    <>
      <Nav />

      {/* STAGE INDICATOR */}
      <div className="zto-stage-strip">
        <div className="zto-stage-strip-inner">
          <span className="zto-stage-label">Where are you right now?</span>
          <div className="zto-stage-pills">
            {stages.map((s) => (
              <a key={s.label} href={s.path} className={`zto-stage-pill${s.active ? " active" : ""}`}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="zto-hero">
        <div className="zto-hero-inner">
          <h1>Your team doesn't need more hours.</h1>
          <p className="zto-hero-sub">They need a better system.</p>
          <p className="zto-hero-body">
            You're growing. The team is working flat out. And somehow, the output isn't keeping up
            with the input. That's not a people problem. That's an infrastructure problem — and
            adding headcount won't fix it.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="fri-problem">
        <div className="fri-problem-inner">
          <h2>Scaling the team is not the same as scaling the system.</h2>
          <p>
            Every new hire inherits the same broken processes. Every new channel adds more manual work.
            Every week, more of your best people's time disappears into operational overhead instead of
            actual marketing. The ceiling isn't your team's capacity. It's the absence of infrastructure
            underneath them.
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

      {/* OPS TAX SECTION */}
      <section className="scale-ops-tax">
        <div className="scale-ops-tax-inner">
          <h2>How much is <span className="scale-ops-highlight">ops tax</span> really costing you?</h2>
          <p>
            Take your marketing team's total hours last week. Now estimate how many of those hours
            went to: manually pulling reports, chasing assets across tools, fixing broken automations,
            briefing the same thing twice, updating spreadsheets nobody reads.
          </p>
          <p className="scale-ops-punchline">
            That number — that's your <span className="scale-ops-highlight">ops tax</span>. That Works eliminates it.
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
          <h2>Let's find your ceiling.</h2>
          <p className="zto-cta-sub">And show you exactly what's holding it in place.</p>
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

export default Scale;
