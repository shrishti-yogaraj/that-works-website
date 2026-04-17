import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/approach", label: "How It Works" },
  { to: "/services", label: "Services" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog ↗" },
];

const Nav = ({ variant }: { variant?: "light" } = {}) => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
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

        <Link to="/book-a-call" className="nav-cta">Book a Call</Link>
      </div>
    </nav>
  );
};

export default Nav;
