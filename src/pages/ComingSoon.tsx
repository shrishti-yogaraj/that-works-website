import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CleoSearch from "@/components/CleoSearch";
import HubBanner from "@/components/HubBanner";
import { useNewsletterSubscribe } from "@/hooks/useNewsletterSubscribe";
import "@/styles/pages/articles.css"; // reuse hub light theme + dark footer

interface ComingSoonProps {
  name: string;
  eyebrow: string;
  description: string;
  slug: string; // for canonical + SEO
}

const ComingSoon = ({ name, eyebrow, description, slug }: ComingSoonProps) => {
  const { email, setEmail, status, subscribe } = useNewsletterSubscribe();

  return (
    <>
      <SEOHead
        title={`${name} — That Works`}
        description={description}
        canonical={`/${slug}`}
      />
      <div className="hub-page articles-page">

        {/* Banner */}
        <HubBanner />

        {/* Header */}
        <header className="articles-header">
          <Link to="/blog" className="articles-back">← Back to hub</Link>
          <span className="articles-brand">That Works</span>
        </header>

        {/* Main */}
        <div className="coming-soon-body">
          <p className="coming-soon-eyebrow">{eyebrow}</p>
          <h1 className="coming-soon-title">{name}</h1>
          <p className="coming-soon-desc">{description}</p>

          <div className="coming-soon-card">
            <p className="coming-soon-card-label">We're still building this</p>
            <p className="coming-soon-card-body">
              We're making sure {name.toLowerCase()} is as useful and well-designed
              as everything else here. It'll be worth the wait.
            </p>

            <p className="coming-soon-notify-label">Get notified when it drops:</p>
            <form className="coming-soon-form" onSubmit={subscribe}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="coming-soon-input"
                required
                disabled={status === "loading" || status === "success"}
              />
              <button
                type="submit"
                className="coming-soon-btn"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? "Subscribing…" : status === "success" ? "You're in ✓" : "Notify me →"}
              </button>
            </form>
          </div>

        </div>

        <CleoSearch />
        <Footer />

        <Link to="/" className="back-to-site" aria-label="Go to That Works website">
          <span className="bts-top">
            <span className="bts-arrow">←</span>
            That Works
          </span>
          <span className="bts-cta">Go to the website</span>
        </Link>
      </div>
    </>
  );
};

// ─── Named exports for each content type ─────────────────────────────────────

export const Dissections = () => (
  <ComingSoon
    name="Dissections"
    eyebrow="Forensic breakdowns"
    slug="dissections"
    description="We reverse-engineer how the best B2B companies built their GTM motion — system by system."
  />
);

export const Arsenal = () => (
  <ComingSoon
    name="The Arsenal"
    eyebrow="Ready to use"
    slug="arsenal"
    description="Templates, canvases and worksheets built from real implementations. Download and run."
  />
);

export const Lab = () => (
  <ComingSoon
    name="The Lab"
    eyebrow="Interactive tools"
    slug="lab"
    description="Diagnostics and calculators that give you a scored output — not a framework to figure out yourself."
  />
);
