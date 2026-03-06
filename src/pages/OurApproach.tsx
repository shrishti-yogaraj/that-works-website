import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import useCanonical from "@/hooks/useCanonical";

const OurApproach = () => {
  useCanonical("/approach");
  const { openPopup } = useContactPopup();
  const deliverables = [
    "Brand positioning document",
    "12-month strategic roadmap",
    "Full SOP library",
    "Tool stack, configured and connected",
    "Team skill map",
    "Content calendar",
    "Sales playbook",
    "Lead scoring model",
    "Attribution framework",
    "Reporting dashboards",
  ];

  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="approach-hero">
        <div className="approach-hero-inner">
          <div className="section-label">How it works</div>
          <h1>We take care of the whole thing.</h1>
          <p className="approach-hero-sub">Strategy. Infrastructure. Execution. Handed over.</p>
          <p className="approach-hero-body">
            Most businesses get a piece of the puzzle. A consultant with a deck. A freelancer who builds but doesn't think. An agency that executes but never transfers ownership. That Works does all of it, and leaves you with something that runs without us.
          </p>
        </div>
      </section>

      {/* THE GAP */}
      <section className="gap-section">
        <div className="gap-inner">
          <div className="section-label">The gap in the market</div>
          <h2>Everyone does a piece. <em style={{ fontStyle: 'italic', color: 'var(--lavender)' }}>Nobody does the whole thing.</em></h2>
          <div className="gap-grid">
            <div className="gap-card">
              <div className="gap-card-label">Option A</div>
              <h3>The Consultant</h3>
              <p>Gives you strategy. A beautiful deck. Maybe a framework. Then disappears. You're left with a plan and no one to build it.</p>
              <div className="gap-verdict">Strategy ✓ &nbsp; Build ✗ &nbsp; Handover ✗</div>
            </div>
            <div className="gap-card">
              <div className="gap-card-label">Option B</div>
              <h3>The Freelancer / Agency</h3>
              <p>Builds or executes. Sometimes well. But no strategic thinking behind the work. No ownership transfer. You stay dependent.</p>
              <div className="gap-verdict">Strategy ✗ &nbsp; Build ✓ &nbsp; Handover ✗</div>
            </div>
            <div className="gap-card gap-card-tw">
              <div className="gap-card-label" style={{ color: 'var(--orange)' }}>Option C</div>
              <h3>That Works</h3>
              <p>Strategy + infrastructure + execution + full handover. You leave with a system your team owns and can run, without us.</p>
              <div className="gap-verdict gap-verdict-tw">Strategy ✓ &nbsp; Build ✓ &nbsp; Handover ✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="pillars-section">
        <div className="pillars-inner">
          <div className="pillars-header">
            <div className="section-label">The four pillars</div>
            <h2>Everything is connected.</h2>
            <p>Most companies treat these as separate workstreams. We build them as one integrated system.</p>
          </div>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-num">01</div>
              <h3>Brand</h3>
              <p>Positioning, messaging, visual identity. The foundation every other channel is built on top of.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-num">02</div>
              <h3>Inbound</h3>
              <p>Content strategy, SEO, lead magnets, nurture flows. The engine that compounds over time.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-num">03</div>
              <h3>Outbound</h3>
              <p>Prospecting infrastructure, enrichment, sequencing, personalisation at scale. Predictable pipeline.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-num">04</div>
              <h3>Sales Enablement</h3>
              <p>Playbooks, objection handling, collateral, CRM workflows. Your team closes more with less effort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="process-section">
        <div className="process-inner">
          <div className="process-header">
            <div className="section-label">The process</div>
            <h2>Four stages. One outcome: <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>you own it.</em></h2>
            <p>Every engagement follows the same proven path, built to leave you stronger than when we arrived.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-num">01</div>
              <h3>Diagnose</h3>
              <p>We map everything: your stack, your team, your gaps, your goals. No assumptions, no shortcuts.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">02</div>
              <h3>Design</h3>
              <p>We architect the full system. Strategy, infrastructure, roadmap, all connected, all sequenced.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">03</div>
              <h3>Build</h3>
              <p>We implement everything. Tools configured, flows live, integrations connected, team trained.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">04</div>
              <h3>Implement</h3>
              <p>You own it. Documentation, SOPs, training complete. The system runs without us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU LEAVE WITH */}
      <section className="deliverables-section">
        <div className="deliverables-inner">
          <div className="deliverables-header">
            <div className="section-label">What you leave with</div>
            <h2>You leave with all of this. <em style={{ fontStyle: 'italic', color: 'var(--yellow)' }}>It's yours.</em></h2>
            <p>No dependency. No ongoing retainer required. Everything built, documented, and handed over.</p>
          </div>
          <div className="deliverables-grid">
            {deliverables.map((item, i) => (
              <div key={i} className="deliverable-item">
                <span className="deliverable-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HANDOVER PROMISE */}
      <section className="promise-section">
        <div className="promise-inner">
          <h2>We build things that outlive us.</h2>
          <p>
            Dependency is not a business model we believe in. Every engagement is designed to end with you fully capable of running what we've built. No expensive external resource required month to month.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-label" style={{ textAlign: 'center' }}>Ready when you are</div>
          <h2>Ready to build yours?</h2>
          <p>Book a 15-minute diagnostic. We'll tell you exactly where you are, and what it takes to get to the next stage.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => openPopup("approach-page")}>Book a Diagnostic Call →</button>
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

export default OurApproach;
