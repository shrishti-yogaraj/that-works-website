import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo"><img src="/logo.svg" alt="That Works" width="678" height="392" className="nav-logo-img" /></Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/approach">How It Works</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
        <Link to="/book-a-call" className="nav-cta">Book a Call</Link>
      </div>
    </nav>
  );
};

export default Nav;
