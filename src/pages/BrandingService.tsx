import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import useCanonical from "@/hooks/useCanonical";

const deliverables = [
  { name: "Brand Strategy", desc: "Positioning, ICP definition, competitive landscape, why you win." },
  { name: "Messaging Framework", desc: "Core message, pillars, one-liners, pitch lines, what you never say." },
  { name: "Tone of Voice", desc: "How you sound, with examples across contexts." },
  { name: "Visual Identity", desc: "Logo, colour, typography, visual direction." },
  { name: "Brand Guidebook", desc: "Everything documented, everything usable, nothing left to interpretation." },
  { name: "Message Bank", desc: "Copy ready to use across channels: website, sales, outreach, social." },
];

const BrandingService = () => {
  useCanonical("/services/branding");
  const { openPopup } = useContactPopup();
  return (
    <>
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

      {/* THE PROBLEM */}
      <section className="br-problem">
        <div className="br-problem-inner">
          <div className="br-problem-block">
            <h2>A logo is not a brand.</h2>
            <p>
              A brand is a position in someone's mind. It's the reason they choose you over the alternative, the words they use to describe you to a colleague, the feeling they get before you say a word. Most businesses don't have that. They have a colour palette and a font.
            </p>
          </div>
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
      </section>      {/* FOOTER */}
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
