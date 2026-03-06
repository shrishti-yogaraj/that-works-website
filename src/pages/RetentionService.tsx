import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import useCanonical from "@/hooks/useCanonical";

const deliverables = [
  { name: "Customer Lifecycle Map", desc: "Every stage from first touch to advocacy, mapped, measured, and with clear ownership at each step." },
  { name: "Retention Sequences", desc: "Automated email and in-product flows that keep customers engaged, informed, and growing with you." },
  { name: "Sales Playbook", desc: "Objection handling, discovery frameworks, talk tracks, and deal guides. Your team closes more with less guesswork." },
  { name: "Onboarding System", desc: "A structured onboarding flow that gets customers to value fast and sets the tone for the entire relationship." },
  { name: "Expansion Playbook", desc: "Upsell and cross-sell triggers, timing, and messaging. Revenue from customers you already have." },
  { name: "Sales Enablement Suite", desc: "Case studies, one-pagers, battle cards, proposal templates. Everything your team needs to win and retain." },
];

const RetentionService = () => {
  useCanonical("/services/retention");
  const { openPopup } = useContactPopup();
  return (
    <>
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

      {/* THE PROBLEM */}
      <section className="br-problem">
        <div className="br-problem-inner">
          <div className="br-problem-block">
            <h2>You're losing revenue you've already earned.</h2>
            <p>
              Most businesses pour budget into acquisition and treat retention as an afterthought. No onboarding system. No lifecycle sequences. No expansion triggers. Sales teams wing it with whatever collateral exists. The result: churn you could have prevented, expansion revenue left on the table, and a sales process that depends entirely on individual reps being good. That's not a people problem. It's an infrastructure problem.
            </p>
          </div>
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

export default RetentionService;
