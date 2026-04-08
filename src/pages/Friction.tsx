import Nav from "@/components/Nav";
import StageSwitcher from "@/components/StageSwitcher";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import SEOHead from "@/components/SEOHead";
import FaqAccordion from "@/components/FaqAccordion";

const tiers = [
  {
    name: "Foundation Sprint",
    duration: "4 weeks",
    tagline: "Stop funding the fog. Start seeing what works.",
    whoFor: "Founder or head of marketing where spend is up and results are flat, nobody can explain why.",
    deliverables: [
      "Full marketing audit with clear diagnosis",
      "ICP refinement and messaging realignment",
      "Attribution framework and analytics baseline",
      "90-day recovery roadmap",
      "One revised channel playbook",
    ],
    leaveWith: "Total clarity on where the waste is, what to double down on, and a 90-day plan to stop the bleeding.",
    tier: "entry",
  },
  {
    name: "Engine Build",
    duration: "8 weeks",
    tagline: "Your marketing isn't broken. It was never built.",
    whoFor: "Early-stage business with disconnected tools, inconsistent messaging, and unpredictable pipeline.",
    deliverables: [
      "Full marketing audit and gap analysis",
      "Rebuilt messaging framework",
      "Tool stack overhaul",
      "Three channel playbooks rebuilt from scratch",
      "Sales enablement pack",
    ],
    leaveWith: "A rebuilt marketing engine with clean data, clear attribution, and a team that knows exactly what to do and why.",
    tier: "popular",
    badge: "Most popular",
  },
  {
    name: "Full OS",
    duration: "12 weeks",
    tagline: "Burn the patchwork. Build the engine.",
    whoFor: "Growing business that's been through agencies, freelancers, and internal hires, and none of it has stuck.",
    deliverables: [
      "Complete brand rebuild",
      "Full inbound overhaul",
      "Outbound rebuild with CRM automation and lead scoring",
      "Complete sales enablement suite",
      "Full SOP library and OKR framework",
    ],
    leaveWith: "A completely rebuilt marketing function with clean systems, clear processes, and a team that finally knows what good looks like.",
    tier: "premium",
  },
];

const frictionSignals = [
  "We're spending on ads but can't tell what's working.",
  "We've tried three agencies and none of them got it.",
  "Our pipeline is completely unpredictable.",
  "Marketing and sales aren't talking to each other.",
  "We have tools but none of them connect.",
  "I know something's wrong but I can't name it.",
];

const deliverableTiles = [
  "Marketing audit document", "Attribution framework", "Rebuilt tool stack",
  "Gap analysis report", "Positioning document", "Messaging framework",
  "Tone of voice guide", "90-day roadmap", "Tool stack configured",
  "CRM set up", "Channel playbook", "SOP library",
  "Skill map", "Handover session", "30-day check-in",
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
    q: "We have a team, budget, and activity — but revenue isn't growing. How do you diagnose that?",
    a: "The Friction stage almost always points to one of three root causes: the wrong ICP, a broken conversion layer, or activity without a system connecting it to revenue. We start with a full audit — what exists, what's broken, what's missing — before recommending anything. We fix the right thing, not the most visible thing.",
    slug: "/blog/why-marketing-activity-doesnt-always-produce-revenue",
  },
  {
    q: "We already have tools and processes in place. Do we start again or work with what we have?",
    a: "We audit what exists first. If it's working, we keep it. If it's creating friction, we replace it. We never rip out infrastructure for the sake of it — but we also won't leave a broken system in place just because it's familiar. You'll know exactly what stays, what changes, and why before we touch anything.",
    slug: "/blog/how-to-fix-marketing-infrastructure-without-starting-from-scratch",
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

const Friction = () => {
  const { openPopup } = useContactPopup();
  return (
    <>
      <SEOHead
        title="Marketing OS: Friction — Fix What's Breaking — That Works"
        description="Marketing spend up, results flat, pipeline unpredictable? We run a full audit, diagnose exactly where the break is, and rebuild from the ground up."
        canonical="/services/marketing-os/friction"
      />
      <Nav />

      <StageSwitcher active="friction" />

      {/* HERO */}
      <section className="zto-hero">
        <div className="zto-hero-inner">
          <h1>Your marketing isn't broken.</h1>
          <p className="zto-hero-sub">It was never built.</p>
          <p className="zto-hero-body">
            You're spending money. You're producing content. You're running campaigns. And yet, nothing
            is connecting. The problem isn't effort. It's architecture. You can't scale what was never
            properly built.
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

      {/* DIAGNOSIS SECTION */}
      <section className="fri-diagnosis">
        <div className="fri-diagnosis-inner">
          <div className="fri-diagnosis-left">
            <h2>Sound familiar?</h2>
            <div className="fri-signals">
              {frictionSignals.map((s) => (
                <div key={s} className="fri-signal-card">{s}</div>
              ))}
            </div>
          </div>
          <div className="fri-diagnosis-right">
            <p>If you nodded at two or more of these, you're in the right place.</p>
          </div>
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
          <h2>Let's name what's broken.</h2>
          <p className="zto-cta-sub">And show you exactly how to fix it.</p>
          <button className="btn-primary" onClick={() => openPopup("marketing-os-friction")}>Book a Diagnostic Call</button>
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

export default Friction;
