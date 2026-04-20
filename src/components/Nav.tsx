import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContactPopup } from "@/contexts/ContactPopupContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/approach", label: "How It Works" },
  { to: "/services", label: "Services" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog ↗" },
];

const Nav = ({ variant, hideBooking, applyNow }: { variant?: "light"; hideBooking?: boolean; applyNow?: boolean } = {}) => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openPopup } = useContactPopup();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);
    return () => { document.body.classList.remove("nav-menu-open"); };
  }, [menuOpen]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <>
      <nav className="site-nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <img src={variant === "light" ? "/logo-dark.svg" : "/logo.svg"} alt="That Works" width="678" height="392" className="nav-logo-img" />
          </Link>

          <ul className={`nav-pill-group${scrolled ? " nav-pill-scrolled" : ""}`}>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={`nav-pill-link${isActive(to) ? " nav-active" : ""}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {applyNow ? (
            <a href="#apply" className="nav-cta nav-cta--desktop">Apply Now ↓</a>
          ) : (
            <button
              className="nav-cta nav-cta--desktop"
              onClick={() => openPopup("nav")}
              style={hideBooking ? { visibility: "hidden", pointerEvents: "none" } : undefined}
            >
              Book a Call
            </button>
          )}

          <button
            className={`nav-hamburger${menuOpen ? " nav-hamburger--open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-mobile-menu${menuOpen ? " nav-mobile-menu--open" : ""}`}>
        <ul className="nav-mobile-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`nav-mobile-link${isActive(to) ? " nav-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {applyNow ? (
          <a href="#apply" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>
            Apply Now ↓
          </a>
        ) : !hideBooking && (
          <button
            className="nav-mobile-cta"
            onClick={() => { setMenuOpen(false); openPopup("nav"); }}
          >
            Book a Call
          </button>
        )}
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="nav-mobile-backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Nav;
