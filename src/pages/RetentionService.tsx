import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import SEOHead from "@/components/SEOHead";
import FaqAccordion from "@/components/FaqAccordion";

const deliverables = [
  { name: "Customer Lifecycle Map", desc: "Every stage from first touch to advocacy, mapped, measured, and with clear ownership at each step." },
  { name: "Retention Sequences", desc: "Automated email and in-product flows that keep customers engaged, informed, and growing with you." },
  { name: "Sales Playbook", desc: "Objection handling, discovery frameworks, talk tracks, and deal guides. Your team closes more with less guesswork." },
  { name: "Onboarding System", desc: "A structured onboarding flow that gets customers to value fast and sets the tone for the entire relationship." },
  { name: "Expansion Playbook", desc: "Upsell and cross-sell triggers, timing, and messaging. Revenue from customers you already have." },
  { name: "Sales Enablement Suite", desc: "Case studies, one-pagers, battle cards, proposal templates. Everything your team needs to win and retain." },
];

const faqs = [
  {
    q: "We're focused on acquiring new customers — why should we invest in retention now?",
    a: "Because every customer you lose makes acquisition more expensive. If your retention rate is poor, you're filling a leaky bucket — every pound you spend on growth is partially funding churn. Fixing retention at the system level is almost always a higher ROI investment than spending more on acquisition, and most businesses leave it too late.",
    slug: "/blog/why-b2b-retention-investment-outperforms-acquisition-spend",
  },
  {
    q: "What does a retention marketing system actually look like?",
    a: "It's the infrastructure that keeps customers engaged, informed, and expanding after they've signed. That includes onboarding sequences, lifecycle email flows, adoption touchpoints, renewal and expansion triggers, NPS feedback loops, and the reporting that tells you where customers are dropping off before they churn.",
    slug: "/blog/what-does-a-b2b-retention-marketing-system-look-like",
  },
  {
    q: "How do you reduce churn without just adding more touchpoints?",
    a: "More touchpoints without better signals is just noise. We start by identifying where in the customer journey churn is actually happening — then build interventions that address the real cause. Sometimes that's an onboarding gap. Sometimes it's a product adoption problem. The system targets the root cause, not the symptom.",
    slug: "/blog/how-to-reduce-b2b-churn-without-adding-more-touchpoints",
  },
  {
    q: "How do you measure whether retention is working?",
    a: "The primary metrics are net revenue retention (NRR), churn rate, and expansion revenue. Below those, you're tracking product or service adoption rates, NPS trends, and engagement signals in your lifecycle flows. We build the reporting dashboard into the retention system so you always know where you stand.",
    slug: "/blog/how-to-measure-b2b-retention-marketing-performance",
  },
  {
    q: "At what stage does it make sense to build a retention system?",
    a: "As soon as you have customers worth keeping — which for most B2B businesses is earlier than they think. If you have 10+ active clients and no systematic way of measuring their health, engaging them, or identifying expansion opportunities, you already need this.",
    slug: "/blog/when-should-b2b-companies-build-a-retention-marketing-system",
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

const RetentionService = () => {
  const { openPopup } = useContactPopup();
  return (
    <>
      <SEOHead
        title="Customer Retention Systems — That Works"
        description="Acquisition gets the credit. Retention builds the business. We design the systems that keep customers engaged, equip your sales team to close, and drive net revenue retention."
        canonical="/services/retention"
      />
      <Nav />

      {/* HERO */}
      <section className="br-hero">
        <div className="br-hero-inner">
          <div className="section-label">Retention TW</div>
          <h1>Win them once. Keep them forever.</h1>
          <p className="br-hero-sub">Lifecycle. Sales enablement. Expansion.</p>
          <p className="br-hero-body">
            Acquisition gets the credit. Retention builds the business. That Works designs the systems that keep customers engaged, equip your sales team to close, and turn happy customers into your best growth channel.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="br-included">
        <div className="br-included-inner">
          <div className="section-label">What's included</div>
          <h2>Everything that happens <em style={{ fontStyle: 'italic', color: 'var(--lavender)' }}>after the deal.</em></h2>
          <div className="br-del-grid">
            {deliverables.map((d, i) => (
              <div key={i} className="br-del-card">
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="br-how">
        <div className="br-how-inner">
          <div className="section-label">How it works</div>
          <h2>Three steps to a retention engine that runs.</h2>
          <div className="br-steps">
            <div className="br-step">
              <div className="br-step-num">01</div>
              <h3>Diagnose</h3>
              <p>We map your current lifecycle, identify churn points, and audit your sales enablement assets. Honest picture, no assumptions.</p>
            </div>
            <div className="br-step">
              <div className="br-step-num">02</div>
              <h3>Build</h3>
              <p>We design and implement the full system. Onboarding, lifecycle sequences, playbooks, templates, all connected.</p>
            </div>
            <div className="br-step">
              <div className="br-step-num">03</div>
              <h3>Hand over</h3>
              <p>You leave with a documented retention and sales enablement system your team owns and can run without us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE OUTPUT */}
      <section className="br-output">
        <div className="br-output-inner">
          <h2><em>You leave with a system that keeps customers longer and grows them faster.</em></h2>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-label" style={{ textAlign: 'center' }}>Ready when you are</div>
          <h2>Ready to stop losing <em>what you've already won?</em></h2>
          <p>Book a diagnostic call. We'll figure out where the gaps are and exactly what it takes to close them.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => openPopup("retention-page")}>Book a Diagnostic Call →</button>
          </div>
          <p className="cta-note">No pitch. No pressure. Just clarity.</p>
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

export default RetentionService;
