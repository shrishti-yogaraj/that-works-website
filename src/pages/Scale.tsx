import Nav from "@/components/Nav";
import StageSwitcher from "@/components/StageSwitcher";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import SEOHead from "@/components/SEOHead";
import FaqAccordion from "@/components/FaqAccordion";

const tiers = [
  {
    name: "Foundation Sprint",
    duration: "4 weeks",
    tagline: "Your team doesn't need more hours. They need a better system.",
    whoFor: "Growing business where the marketing team is stretched thin, drowning in operational work, with no clear priority.",
    deliverables: [
      "Operations audit identifying highest-impact bottlenecks",
      "Prioritisation framework: what to keep, cut, automate, delegate",
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
    tagline: "Scale the system, not the headcount.",
    whoFor: "Scaling business with a marketing team executing daily but no infrastructure underneath. Data siloed, processes tribal, scaling means more people not better systems.",
    deliverables: [
      "Full process audit and SOP library",
      "Centralised reporting dashboard",
      "Workflow automation design",
      "Team skill map and hiring briefs",
      "12-month scaling roadmap with KPIs",
    ],
    leaveWith: "A documented automated marketing system that runs on process not personalities, ready to scale without proportional headcount.",
    tier: "popular",
    badge: "Most popular",
  },
  {
    name: "Full OS",
    duration: "12 weeks",
    tagline: "You've outgrown the scrappy phase. Time to operate like it.",
    whoFor: "Established business that needs to professionalise its entire marketing operation. They have budget and people but not the infrastructure to operate like a scaled function.",
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

const faqs = [
  {
    q: "What do we actually own at the end of the engagement?",
    a: "Everything. Every document, SOP, playbook, tool setup, and strategy is yours. We don't retain access, we don't lock anything behind a retainer, and you don't need us to run what we've built.",
    slug: "/blog/what-you-own-after-a-marketing-infrastructure-engagement",
  },
  {
    q: "How is That Works different from hiring a fractional CMO?",
    a: "A fractional CMO advises. We build. You get a complete, documented marketing system — tools configured, processes written, team trained — not strategic guidance that leaves the moment the contract ends.",
    slug: "/blog/fractional-cmo-vs-marketing-infrastructure-build",
  },
  {
    q: "Do you work with us ongoing, or is this a one-time engagement?",
    a: "The engagement has a defined end. We're not selling a retainer — we're selling a build. There's an optional Engine Tune-Up retainer for strategic oversight after the engagement closes, but that's your choice, not ours.",
    slug: "/blog/why-our-engagements-have-a-defined-end",
  },
  {
    q: "What does the handover process look like?",
    a: "The final week of every engagement is dedicated to handover — a working session with your team, full documentation walkthrough, and a 30-day check-in after we're done.",
    slug: "/blog/what-a-marketing-infrastructure-handover-actually-looks-like",
  },
  {
    q: "We're moving but every step feels heavier. How do you fix that without slowing us down?",
    a: "The weight usually comes from manual processes that haven't been systematised, team members doing work that should be automated, and decisions being made reactively instead of from a clear playbook. We identify the highest-friction points first and build relief there — so the system gets lighter as you grow, not heavier.",
    slug: "/blog/why-scaling-feels-harder-than-it-should",
  },
  {
    q: "We're firefighting constantly. How do we stop without dropping everything?",
    a: "Firefighting is a systems problem, not a people problem. We build the SOPs, decision frameworks, and role clarity that let your team handle recurring situations without escalating everything. The goal is a marketing function that runs on process, not on founder availability.",
    slug: "/blog/how-to-stop-firefighting-in-your-marketing-team",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const Scale = () => {
  const { openPopup } = useContactPopup();
  return (
    <>
      <SEOHead
        title="Marketing OS: Scale — Systemise for Growth — That Works"
        description="Your team is stretched thin with no clear priority. We streamline operations, eliminate bottlenecks, and build the systems that turn a busy team into a productive one."
        canonical="/services/marketing-os/scale"
      />
      <Nav />

      <StageSwitcher active="scale" />

      {/* HERO */}
      <section className="zto-hero">
        <div className="zto-hero-inner">
          <h1>Your team doesn't need more hours.</h1>
          <p className="zto-hero-sub">They need a better system.</p>
          <p className="zto-hero-body">
            You're growing. The team is working flat out. And somehow, the output isn't keeping up
            with the input. That's not a people problem. That's an infrastructure problem, and
            adding headcount won't fix it.
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
            That number? That's your <span className="scale-ops-highlight">ops tax</span>. That Works eliminates it.
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
          <button className="btn-primary" onClick={() => openPopup("marketing-os-scale")}>Book a Diagnostic Call</button>
          <p className="cta-note">20 minutes. No pitch. You'll leave with clarity regardless.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mos-faq">
        <div className="mos-faq-inner">
          <div className="section-label">Common questions</div>
          <h2>Everything you need to know</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo"><img src="/logo.svg" alt="That Works" width="678" height="392" className="footer-logo-img" /></div>
            <p className="footer-tagline">High performance GTM systems. Designed, implemented and handed over.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social">LinkedIn</a>
              <a href="#" className="footer-social">X / Twitter</a>
            </div>
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
              <li><a href="/services">All Services</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p className="footer-newsletter-desc">GTM insights and what's actually working. No fluff.</p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" className="footer-newsletter-input" />
              <button type="submit" className="footer-newsletter-btn">Subscribe →</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 That Works. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Scale;
