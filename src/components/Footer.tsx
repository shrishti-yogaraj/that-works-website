import { Link } from "react-router-dom";
import { useNewsletterSubscribe } from "@/hooks/useNewsletterSubscribe";

const Footer = () => {
  const { email, setEmail, status, errorMessage, subscribe } = useNewsletterSubscribe();

  return (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="footer-logo">
          <img src="/logo.svg" alt="That Works" width="678" height="392" className="footer-logo-img" />
        </div>
        <p className="footer-tagline">High performance GTM systems. Designed, implemented and handed over.</p>
        <div className="footer-socials">
          <a href="#" className="footer-social">LinkedIn</a>
          <a href="#" className="footer-social">X / Twitter</a>
        </div>
      </div>
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/approach">How It Works</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/join">We're Hiring</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Services</h4>
        <ul>
          <li><Link to="/services">All Services</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Newsletter</h4>
        <p className="footer-newsletter-desc">GTM insights and what's actually working. No fluff.</p>
        <form className="footer-newsletter-form" onSubmit={subscribe}>
          <input
            type="email"
            placeholder="your@email.com"
            className="footer-newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading" || status === "success"}
          />
          <button
            type="submit"
            className="footer-newsletter-btn"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Subscribing…" : status === "success" ? "You're in ✓" : "Subscribe →"}
          </button>
        </form>
        {status === "error" && (
          <p className="footer-newsletter-error">{errorMessage}</p>
        )}
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
  );
};

export default Footer;
