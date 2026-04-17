/**
 * HubBanner — the subscription + book a call strip shown at the top of all
 * /blog-family pages. Handles its own newsletter state internally.
 */
import { Link } from "react-router-dom";
import { useNewsletterSubscribe } from "@/hooks/useNewsletterSubscribe";

const HubBanner = () => {
  const { email, setEmail, status, errorMessage, subscribe } = useNewsletterSubscribe();

  return (
    <div className="sub-banner" id="subBanner">
      <span className="sub-banner-text">
        Get one essay a week — GTM insights that <em>actually</em> help B2B operators build smarter.
      </span>
      <form className="sub-banner-form" onSubmit={subscribe}>
        <input
          className="sub-banner-input"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading" || status === "success"}
        />
        <button
          className="sub-banner-btn"
          type="submit"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "Subscribing…" : status === "success" ? "You're in ✓" : "Subscribe free →"}
        </button>
      </form>
      {status === "error" && (
        <span className="sub-banner-note" style={{ color: "#f87171" }}>{errorMessage}</span>
      )}
      <Link to="/book-a-call" className="sub-banner-btn sub-banner-consult-btn">
        Book a consultation →
      </Link>
    </div>
  );
};

export default HubBanner;
