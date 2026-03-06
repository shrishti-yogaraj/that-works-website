import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import useCanonical from "@/hooks/useCanonical";

const deliverables = [
  { name: "Content Strategy", desc: "Topic clusters, keyword mapping, editorial calendar. Built around what your buyers are actually searching for." },
  { name: "SEO Foundation", desc: "Technical audit, on-page optimisation, internal linking architecture. The infrastructure search engines reward." },
  { name: "Lead Magnet System", desc: "High-value content assets that convert visitors into leads. Guides, tools, templates, built to your ICP." },
  { name: "Nurture Sequences", desc: "Email flows that move leads from interested to ready. Automated, personalised, and mapped to buying intent." },
  { name: "Distribution Playbook", desc: "Channel-by-channel plan for getting your content in front of the right people. Not just publish and hope." },
  { name: "Performance Dashboard", desc: "Traffic, conversions, pipeline contribution. You'll know exactly what's working and what to do next." },
];

const InboundService = () => {
  useCanonical("/services/inbound");
  const { openPopup } = useContactPopup();
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="br-hero">
        <div className="br-hero-inner">
          <div className="section-label">Inbound TW</div>
          <h1>The best leads find you.</h1>
          <p className="br-hero-sub">Content. SEO. Nurture. Compounding.</p>
          <p className="br-hero-body">
            Most companies create content and hope. That Works builds inbound as infrastructure, a system that attracts the right buyers, captures them, and moves them toward a conversation without your team having to chase.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="br-problem">
        <div className="br-problem-inner">
          <div className="br-problem-block">
            <h2>Publishing is not a strategy.</h2>
            <p>
              Content without architecture is just noise. Most businesses produce blog posts, social updates, and the occasional guide with no system connecting any of it. No keyword strategy. No lead capture. No nurture. The content exists but it doesn't work. Inbound done right is a compounding asset, not a content treadmill.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="br-included">
        <div className="br-included-inner">
          <div className="section-label">What's included</div>
          <h2>A system that attracts, captures, <em style={{ fontStyle: 'italic', color: 'var(--lavender)' }}>and converts.</em></h2>
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
          <h2>Four steps to inbound that compounds.</h2>
          <div className="br-steps">
            <div className="br-step">
              <div className="br-step-num">01</div>
              <h3>Audit</h3>
              <p>We assess your current content, SEO position, and lead capture setup. Find the gaps and the quick wins.</p>
            </div>
            <div className="br-step">
              <div className="br-step-num">02</div>
              <h3>Architect</h3>
              <p>We build the full inbound strategy, topic clusters, keywords, lead magnets, nurture flows, all connected.</p>
            </div>
            <div className="br-step">
              <div className="br-step-num">03</div>
              <h3>Build</h3>
              <p>We implement the system. Content infrastructure, capture mechanisms, automation, distribution.</p>
            </div>
            <div className="br-step">
              <div className="br-step-num">04</div>
              <h3>Hand over</h3>
              <p>You leave with a documented inbound engine your team can run, measure, and grow without us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE OUTPUT */}
      <section className="br-output">
        <div className="br-output-inner">
          <h2><em>You leave with an inbound engine that works while you sleep.</em></h2>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-label" style={{ textAlign: 'center' }}>Ready when you are</div>
          <h2>Ready to stop chasing <em>and start attracting?</em></h2>
          <p>Book a diagnostic call. We'll figure out where you are and what you need.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => openPopup("inbound-page")}>Book a Diagnostic Call →</button>
          </div>
          <p className="cta-note">No pitch. No pressure. Just clarity.</p>
        </div>
      </section>      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo"><img src="/logo.svg" alt="That Works" className="footer-logo-img" /></div>
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

export default InboundService;
