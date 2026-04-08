import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import SEOHead from "@/components/SEOHead";
import FaqAccordion from "@/components/FaqAccordion";

const deliverables = [
  { name: "Brand Strategy", desc: "Positioning, ICP definition, competitive landscape, why you win." },
  { name: "Messaging Framework", desc: "Core message, pillars, one-liners, pitch lines, what you never say." },
  { name: "Tone of Voice", desc: "How you sound, with examples across contexts." },
  { name: "Visual Identity", desc: "Logo, colour, typography, visual direction." },
  { name: "Brand Guidebook", desc: "Everything documented, everything usable, nothing left to interpretation." },
  { name: "Message Bank", desc: "Copy ready to use across channels: website, sales, outreach, social." },
];

const faqs = [
  {
    q: "We already have a logo. Do we still need brand infrastructure?",
    a: "A logo is the surface. Brand infrastructure is everything underneath — positioning, messaging, tone of voice, the way you describe what you do and why it matters. Most B2B businesses have a visual identity and no strategic foundation. That's why their marketing feels inconsistent and their sales conversations feel hard.",
    slug: "/blog/b2b-brand-infrastructure-vs-visual-identity",
  },
  {
    q: "How does brand work connect to pipeline? We need leads, not aesthetics.",
    a: "Brand is what makes every other channel work harder. Clear positioning shortens sales cycles. A strong message makes cold outreach land better. Consistent tone makes content more recognisable. The businesses that scale fastest aren't the ones with the best ads — they're the ones with the clearest story.",
    slug: "/blog/how-b2b-brand-strategy-directly-drives-pipeline",
  },
  {
    q: "What do we actually receive as brand deliverables?",
    a: "A positioning document, a full messaging framework with pillars and proof points, a tone of voice guide with examples, core content templates, and a visual direction brief for your designer. Everything is documented, handed over, and built to be used — not filed and forgotten.",
    slug: "/blog/what-do-you-actually-get-from-a-b2b-brand-strategy-engagement",
  },
  {
    q: "Our founder is the brand right now. How do we systematise that?",
    a: "This is one of the most common situations we work with. Founder-led brand is powerful — but it only scales if you extract the thinking behind it into a documented system. We do that: positioning, messaging pillars, tone of voice, and content templates that let anyone on your team communicate with the same clarity and energy as the founder.",
    slug: "/blog/how-to-systematise-founder-led-brand-for-b2b-scale",
  },
  {
    q: "How do you make sure the brand stays consistent after you hand it over?",
    a: "Consistency comes from documentation, not supervision. Every brand engagement ends with a tone of voice guide, messaging framework, and content templates your team can use independently. We train whoever needs to use it before we leave.",
    slug: "/blog/how-to-maintain-brand-consistency-without-an-agency",
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

const BrandingService = () => {
  const { openPopup } = useContactPopup();
  return (
    <>
      <SEOHead
        title="Brand System & Positioning — That Works"
        description="Your brand. Built to last. We build the whole brand system — identity, positioning, voice and a full message bank — and hand it over so it runs without us."
        canonical="/services/branding"
      />
      <Nav />

      {/* HERO */}
      <section className="br-hero">
        <div className="br-hero-inner">
          <div className="section-label">Branding TW</div>
          <h1>Your brand. Built to last.</h1>
          <p className="br-hero-sub">Identity. Positioning. Voice. Handed over.</p>
          <p className="br-hero-body">
            Most businesses design a logo and call it branding. That Works builds the whole system, from how you think about yourself to how the world talks about you.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="br-included">
        <div className="br-included-inner">
          <div className="section-label">What's included</div>
          <h2>Everything a brand needs. <em style={{ fontStyle: 'italic', color: 'var(--lavender)' }}>Nothing it doesn't.</em></h2>
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
          <h2>Three steps to a brand that works.</h2>
          <div className="br-steps">
            <div className="br-step">
              <div className="br-step-num">01</div>
              <h3>Discover</h3>
              <p>We dig into your business, your market, your competitors and your customers.</p>
            </div>
            <div className="br-step">
              <div className="br-step-num">02</div>
              <h3>Build</h3>
              <p>We craft the full brand system, from positioning to visual identity.</p>
            </div>
            <div className="br-step">
              <div className="br-step-num">03</div>
              <h3>Hand over</h3>
              <p>You leave with a complete, documented brand OS your whole team can use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE OUTPUT */}
      <section className="br-output">
        <div className="br-output-inner">
          <h2><em>You leave knowing exactly who you are, who you're for, and what to say.</em></h2>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-label" style={{ textAlign: 'center' }}>Ready when you are</div>
          <h2>Ready to build something <em>that lasts?</em></h2>
          <p>Book a diagnostic call. We'll figure out where you are and what you need.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => openPopup("branding-page")}>Book a Diagnostic Call →</button>
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

export default BrandingService;
