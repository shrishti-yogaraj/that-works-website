import Nav from "@/components/Nav";
import StageSwitcher from "@/components/StageSwitcher";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import SEOHead from "@/components/SEOHead";
import FaqAccordion from "@/components/FaqAccordion";

const tiers = [
  {
    name: "Foundation Sprint",
    duration: "4 weeks",
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
    q: "Everything is in my head and nothing is written down. Is that too early for this?",
    a: "It's the perfect time. The 0→1 stage is exactly where we do our best work — extracting what's in your head, turning it into a documented strategy, and building the first systems before bad habits get entrenched. Waiting until you're bigger doesn't make the foundation easier to build. It makes it harder.",
    slug: "/blog/is-it-too-early-to-build-marketing-infrastructure",
  },
  {
    q: "We're 100% founder-led right now. Can this work without a marketing team?",
    a: "Yes — that's the most common situation we work with at this stage. We design the system for your current resource level, which may just be you. The deliverable is a foundation you can hand to your first marketing hire the moment you're ready — so they hit the ground running instead of starting from scratch.",
    slug: "/blog/building-marketing-infrastructure-as-a-founder-with-no-team",
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

const deliverableTiles = [
  "Positioning document", "Messaging framework", "Tone of voice guide",
  "90-day roadmap", "Tool stack configured", "CRM set up",
  "Channel playbook", "SOP library", "Skill map",
  "Handover session", "30-day check-in",
];

const ZeroToOne = () => {
  const { openPopup } = useContactPopup();
  return (
    <>
      <SEOHead
        title="Marketing OS: Zero to One — Build Your First GTM Engine — That Works"
        description="Building your first marketing engine. ICP, positioning, CRM setup and a 90-day roadmap — built for founders with a product ready to sell but zero marketing infrastructure."
        canonical="/services/marketing-os/zero-to-one"
      />
      <Nav />

      <StageSwitcher active="zero-to-one" />

      {/* HERO */}
      <section className="zto-hero">
        <div className="zto-hero-inner">
          <h1>You've built something worth talking about.</h1>
          <p className="zto-hero-sub">Now let's make sure the right people hear it.</p>
          <p className="zto-hero-body">
            Before channels, before content, before campaigns, you need a foundation.
            Most early-stage founders skip this and pay for it later. That Works builds it first.
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
          <button className="btn-primary" onClick={() => openPopup("marketing-os-zero-to-one")}>Book a Diagnostic Call</button>
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

export default ZeroToOne;
