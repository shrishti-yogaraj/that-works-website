import Nav from "@/components/Nav";

const Services = () => {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="svcs-hero">
        <div className="svcs-hero-inner">
          <div className="section-label">Services</div>
          <h1>Everything we build.</h1>
          <p>One system. Three entry points. All roads lead to the same outcome — a marketing function that runs without us.</p>
        </div>
      </section>

      {/* VISUAL HIERARCHY */}
      <section className="svcs-map-section">
        <div className="svcs-map-inner">

          {/* Featured: Marketing OS */}
          <div className="svcs-featured">
            <span className="flagship-badge">The full engagement</span>
            <div className="service-tw">TW</div>
            <div className="svcs-featured-name">Marketing OS</div>
            <p className="svcs-featured-desc">Strategy, infrastructure, execution and handover — across every pillar that matters.</p>
            <a href="#" className="service-link">Explore Marketing OS TW →</a>
          </div>

          {/* Connector */}
          <div className="svcs-connector">
            <div className="svcs-connector-line" />
            <div className="svcs-connector-branches">
              <div className="svcs-branch" />
              <div className="svcs-branch" />
              <div className="svcs-branch" />
            </div>
          </div>

          {/* Sub-services */}
          <div className="svcs-sub-grid">
            <div className="svcs-sub-card">
              <div className="service-tw">TW</div>
              <h3>Lead Gen</h3>
              <p>End-to-end lead generation. Scrape, enrich, personalise, deliver — on autopilot.</p>
              <a href="/services/lead-gen" className="service-link">Explore →</a>
            </div>
            <div className="svcs-sub-card">
              <div className="service-tw">TW</div>
              <h3>Branding</h3>
              <p>Brand identity and positioning that does the work before you say a word.</p>
              <a href="/services/branding" className="service-link">Explore →</a>
            </div>
            <div className="svcs-sub-card svcs-sub-card-muted">
              <div className="service-tw" style={{ color: 'var(--label)' }}>TW</div>
              <h3>More coming</h3>
              <p>New service lines in development. Stay tuned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="svcs-cta-strip">
        <div className="svcs-cta-strip-inner">
          <h2>Not sure where to start?</h2>
          <p>That's what the diagnostic call is for.</p>
          <a href="#" className="btn-primary">Book a Call →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">That Works<span>.</span></div>
            <p className="footer-tagline">High performance GTM systems. Designed, implemented and handed over.</p>
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
              <li><a href="/services">Marketing OS TW</a></li>
              <li><a href="/services/lead-gen">Lead Gen TW</a></li>
              <li><a href="/services/branding">Branding TW</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 That Works. All rights reserved.</p>
          <p style={{ color: 'var(--label)' }}>thatworksco.com</p>
        </div>
      </footer>
    </>
  );
};

export default Services;
