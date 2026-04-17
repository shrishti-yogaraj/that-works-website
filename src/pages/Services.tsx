import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const Services = () => {
  const { openPopup } = useContactPopup();
  return (
    <>
      <SEOHead
        title="GTM Services — Find Your Entry Point — That Works"
        description="Two ways in. One outcome: a marketing function that runs without us. Choose Marketing OS for your growth stage, or a standalone specialist service."
        canonical="/services"
      />
      <Nav />

      {/* HERO */}
      <section className="svcs-hero">
        <div className="svcs-hero-inner">
          <div className="section-label">Services</div>
          <h1>Find your entry point.</h1>
          <p>Two ways in. One outcome: a marketing function that runs without us.</p>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="svcs-paths-section">
        <div className="svcs-paths-inner">

          {/* Path 1: I know where I am */}
          <div className="svcs-path-card">
            <div className="svcs-path-eyebrow">I know where I am</div>
            <h2>Marketing OS</h2>
            <p>You're at a specific stage of growth. We fix the exact breaking point you're at.</p>
            <div className="svcs-path-items">
              <Link to="/services/marketing-os/zero-to-one" className="svcs-path-item">
                <span className="svcs-path-num">01</span>
                <div className="svcs-path-text">
                  <span className="svcs-path-name">0 → 1</span>
                  <span className="svcs-path-desc">Everything is in your head. Nothing is in a system.</span>
                </div>
                <span className="svcs-path-arrow">→</span>
              </Link>
              <Link to="/services/marketing-os/friction" className="svcs-path-item">
                <span className="svcs-path-num">02</span>
                <div className="svcs-path-text">
                  <span className="svcs-path-name">Friction</span>
                  <span className="svcs-path-desc">Growing in every way except revenue.</span>
                </div>
                <span className="svcs-path-arrow">→</span>
              </Link>
              <Link to="/services/marketing-os/scale" className="svcs-path-item">
                <span className="svcs-path-num">03</span>
                <div className="svcs-path-text">
                  <span className="svcs-path-name">Scale</span>
                  <span className="svcs-path-desc">Moving, but every step is heavier than the last.</span>
                </div>
                <span className="svcs-path-arrow">→</span>
              </Link>
              <Link to="/services/marketing-os/leader" className="svcs-path-item">
                <span className="svcs-path-num">04</span>
                <div className="svcs-path-text">
                  <span className="svcs-path-name">Leader</span>
                  <span className="svcs-path-desc">Steady growth, but you can't see what's driving it.</span>
                </div>
                <span className="svcs-path-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Path 2: I know what I need */}
          <div className="svcs-path-card">
            <div className="svcs-path-eyebrow">I know what I need</div>
            <h2>Point Solutions</h2>
            <p>You have a specific gap. We build the exact system to fill it.</p>
            <div className="svcs-path-items">
              <Link to="/services/branding" className="svcs-path-item">
                <span className="svcs-path-be" style={{ color: 'var(--orange)' }}>Be known.</span>
                <div className="svcs-path-text">
                  <span className="svcs-path-name">Branding TW</span>
                  <span className="svcs-path-desc">Identity, positioning and voice.</span>
                </div>
                <span className="svcs-path-arrow">→</span>
              </Link>
              <Link to="/services/inbound" className="svcs-path-item">
                <span className="svcs-path-be" style={{ color: 'var(--lavender)' }}>Be found.</span>
                <div className="svcs-path-text">
                  <span className="svcs-path-name">Inbound TW</span>
                  <span className="svcs-path-desc">Content, SEO and nurture infrastructure.</span>
                </div>
                <span className="svcs-path-arrow">→</span>
              </Link>
              <Link to="/services/lead-gen" className="svcs-path-item">
                <span className="svcs-path-be" style={{ color: 'var(--yellow)' }}>Be chosen.</span>
                <div className="svcs-path-text">
                  <span className="svcs-path-name">Lead Gen TW</span>
                  <span className="svcs-path-desc">End-to-end outbound engine on autopilot.</span>
                </div>
                <span className="svcs-path-arrow">→</span>
              </Link>
              <Link to="/services/retention" className="svcs-path-item">
                <span className="svcs-path-be" style={{ color: 'var(--text)' }}>Be remembered.</span>
                <div className="svcs-path-text">
                  <span className="svcs-path-name">Retention TW</span>
                  <span className="svcs-path-desc">Lifecycle, enablement and expansion.</span>
                </div>
                <span className="svcs-path-arrow">→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA STRIP */}
      <section className="svcs-cta-strip">
        <div className="svcs-cta-strip-inner">
          <h2>Not sure where to start?</h2>
          <p>That's what the diagnostic call is for.</p>
          <button className="btn-primary" onClick={() => openPopup("services-page")}>Book a Call →</button>
        </div>
      </section>      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Services;
