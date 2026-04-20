/**
 * HubBanner — the subscription + book a call strip shown at the top of all
 * /blog-family pages. Handles its own newsletter state internally.
 */
import { useState } from "react";
import { useNewsletterSubscribe } from "@/hooks/useNewsletterSubscribe";
import { useContactPopup } from "@/contexts/ContactPopupContext";

const HubBanner = () => {
  const { email, setEmail, status, errorMessage, subscribe } = useNewsletterSubscribe("hub-banner");
  const { openPopup } = useContactPopup();
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="sub-banner" id="subBanner">
      <span className="sub-banner-text">
        GTM insights and resources, once a week.
      </span>

      {/* Desktop form — hidden on mobile via CSS */}
      <form className="sub-banner-form sub-banner-form--desktop" onSubmit={subscribe}>
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

      {/* Mobile buttons — hidden on desktop via CSS */}
      <div className="sub-banner-mobile-btns">
        <button
          className="sub-banner-btn"
          type="button"
          onClick={() => setShowInput(v => !v)}
          disabled={status === "success"}
        >
          {status === "success" ? "You're in ✓" : "Subscribe free →"}
        </button>
        <button className="sub-banner-btn sub-banner-consult-btn" onClick={() => openPopup("hub-banner")}>
          Book a consultation →
        </button>
      </div>

      {/* Mobile email input — shown after tapping Subscribe */}
      {showInput && (
        <form className="sub-banner-form sub-banner-form--mobile" onSubmit={(e) => { subscribe(e); setShowInput(false); }}>
          <input
            className="sub-banner-input"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
            disabled={status === "loading" || status === "success"}
          />
          <button
            className="sub-banner-btn"
            type="submit"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Subscribing…" : "Go →"}
          </button>
        </form>
      )}

      {status === "error" && (
        <span className="sub-banner-note" style={{ color: "#f87171" }}>{errorMessage}</span>
      )}

      {/* Desktop consult button — hidden on mobile via CSS */}
      <button className="sub-banner-btn sub-banner-consult-btn sub-banner-consult-btn--desktop" onClick={() => openPopup("hub-banner")}>
        Book a consultation →
      </button>
    </div>
  );
};

export default HubBanner;
