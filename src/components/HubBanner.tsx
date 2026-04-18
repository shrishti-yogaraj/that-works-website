/**
 * HubBanner — the subscription + book a call strip shown at the top of all
 * /blog-family pages. Handles its own newsletter state internally.
 */
import { useNewsletterSubscribe } from "@/hooks/useNewsletterSubscribe";
import { useContactPopup } from "@/contexts/ContactPopupContext";

const HubBanner = () => {
  const { email, setEmail, status, errorMessage, subscribe } = useNewsletterSubscribe();
  const { openPopup } = useContactPopup();

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
      <button className="sub-banner-btn sub-banner-consult-btn" onClick={() => openPopup("hub-banner")}>
        Book a consultation →
      </button>
    </div>
  );
};

export default HubBanner;
