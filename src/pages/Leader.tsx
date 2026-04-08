import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import StageSwitcher from "@/components/StageSwitcher";
import SEOHead from "@/components/SEOHead";
import FaqAccordion from "@/components/FaqAccordion";

const tiers = [
  {
    name: "Foundation Sprint",
    duration: "4 weeks",
    tagline: "The leak you can't see is the one that sinks you.",
    whoFor: "Established business experiencing invisible churn, declining engagement, or stagnating pipeline, and nobody can pinpoint why.",
    deliverables: [
      "Marketing health diagnostic focused on lifecycle gaps and retention blind spots",
      "Customer lifecycle mapping from acquisition to advocacy",
      "Churn risk identification framework and early warning indicators",
      "90-day retention and engagement recovery roadmap",
      "Quick-win recommendations for immediate impact",
    ],
    leaveWith: "Complete visibility on where customers are dropping off, why, and a clear plan to close the gaps.",
    tier: "entry",
  },
  {
    name: "Engine Build",
    duration: "8 weeks",
    tagline: "You're brilliant at winning them. Now stop losing them.",
    whoFor: "Established business where acquisition is optimised but retention, expansion and advocacy have no system behind them.",
    deliverables: [
      "Full customer lifecycle audit and segmentation framework",
      "Retention marketing infrastructure with health scoring and churn triggers",
      "Customer advocacy and referral programme design",
      "Unified customer data architecture",
      "Lifecycle reporting dashboard with cohort analysis and LTV tracking",
    ],
    leaveWith: "A complete lifecycle marketing engine from first touch to advocacy, with the data, automation and processes to keep customers longer and grow them faster.",
    tier: "popular",
    badge: "Most popular",
  },
  {
    name: "Full OS",
    duration: "12 weeks",
    tagline: "One team. One strategy. One engine.",
    whoFor: "Established business that needs a complete marketing transformation, not optimisation but a fundamental restructure of how marketing operates, reports, and drives the business.",
    deliverables: [
      "Complete marketing function audit and restructure plan",
      "Unified marketing strategy connecting brand, demand, product and customer marketing",
      "Cross-functional data architecture and executive reporting framework",
      "Full lifecycle marketing build",
      "Marketing leadership playbook with OKRs, quarterly cadence and board reporting",
    ],
    leaveWith: "A unified marketing operation with shared strategy, connected data, cross-functional workflows, and leadership-grade reporting. Marketing that drives the business, not just supports it.",
    tier: "premium",
  },
];

const deliverableTiles = [
  "Customer lifecycle map", "Churn risk framework", "Retention infrastructure",
  "Lifecycle reporting dashboard", "Unified data architecture", "Marketing leadership playbook",
  "Board reporting framework", "OKR structure",
  "Positioning document", "Messaging framework", "Tone of voice guide",
  "90-day roadmap", "Tool stack configured", "CRM set up",
  "Channel playbook", "SOP library", "Skill map",
  "Handover session", "30-day check-in",
];

const testimonialSlots = [
  { name: "[Client Name]", title: "[Title]", company: "[Company]", quote: "\"Populate with real testimonial when collected.\"" },
  { name: "[Client Name]", title: "[Title]", company: "[Company]", quote: "\"Populate with real testimonial when collected.\"" },
  { name: "[Client Name]", title: "[Title]", company: "[Company]", quote: "\"Populate with real testimonial when collected.\"" },
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
    q: "Growth is happening but we can't explain what's driving it. Is that actually a problem?",
    a: "Yes — because what you can't explain, you can't protect, replicate, or scale. If your growth is driven by factors you don't understand, you have no way of doubling down on what's working or catching the early signs of what's about to stop. Visibility is infrastructure too.",
    slug: "/blog/why-unexplained-growth-is-a-risk-not-a-success",
  },
  {
    q: "How do you build a marketing function that doesn't depend on one person to run it?",
    a: "By replacing person-dependent knowledge with documented systems. Every process, decision framework, and playbook lives in a place the whole team can access and follow. When the person changes, the system stays. That's what we build — and it's exactly what most growing companies are missing.",
    slug: "/blog/how-to-build-a-marketing-function-that-doesnt-depend-on-one-person",
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

const Leader = () => {
  const { openPopup } = useContactPopup();
  return (
    <>
      <SEOHead
        title="Marketing OS: Leader — Close the Lifecycle Gaps — That Works"
        description="Established business with invisible churn or stagnating pipeline? We map your full customer lifecycle, identify exactly where customers drop off, and close the gaps."
        canonical="/services/marketing-os/leader"
      />
      <Nav />

      <StageSwitcher active="leader" />

      {/* HERO */}
      <section className="zto-hero">
        <div className="zto-hero-inner">
          <h1>The leak you can't see is the one that sinks you.</h1>
          <p className="zto-hero-sub">You've built something. Now make it impossible to lose.</p>
          <p className="zto-hero-body">
            The surface metrics look fine. Revenue is healthy. The team is busy. But somewhere in the
            system, customers are quietly leaving, expansion is being left on the table, and marketing
            is operating in silos nobody talks about out loud.
          </p>
        </div>
      </section>

      {/* TIER CARDS */}
      <section className="zto-tiers">
        <div className="zto-tiers-inner leader-tiers">
          {tiers.map((t) => (
            <div key={t.name} className={`zto-tier-card zto-tier-${t.tier}${t.tier === "premium" ? " leader-premium" : ""}`}>
              {t.badge && <span className="zto-tier-badge">{t.badge}</span>}
              {t.tier === "premium" && <span className="leader-tier-accent" />}
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

      {/* VISIBILITY SECTION */}
      <section className="leader-visibility">
        <div className="leader-visibility-inner">
          <h2>What does marketing actually contribute to your business?</h2>
          <p>
            If the honest answer is "we're not entirely sure", that's the problem. Not your team.
            Not your budget. Not your channels. The absence of a unified view of marketing's impact
            on revenue, retention and growth is costing you more than any campaign ever could.
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

      {/* SOCIAL PROOF PLACEHOLDER */}
      <section className="leader-proof">
        <div className="leader-proof-inner">
          <div className="section-label">What our clients say</div>
          <div className="leader-proof-grid">
            {testimonialSlots.map((t, i) => (
              <div key={i} className="leader-proof-card">
                <p className="leader-proof-quote">{t.quote}</p>
                <div className="leader-proof-meta">
                  <span className="leader-proof-name">{t.name}</span>
                  <span className="leader-proof-title">{t.title}, {t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="zto-cta">
        <div className="zto-cta-inner">
          <h2>Let's find what the surface metrics are hiding.</h2>
          <p className="zto-cta-sub">And show you exactly what it's costing you.</p>
          <button className="btn-primary" onClick={() => openPopup("marketing-os-leader")}>Book a Diagnostic Call</button>
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

export default Leader;
