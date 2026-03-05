const Nav = () => {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">That Works<span>.</span></a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/approach">How It Works</a></li>
          <li className="nav-dropdown">
            <a href="/services">Services</a>
            <div className="nav-dropdown-menu">
              <a href="/services/marketing-os/zero-to-one">0→1</a>
              <a href="/services/marketing-os/friction">Friction</a>
              <a href="/services/marketing-os/scale">Scale</a>
              <a href="/services/marketing-os/leader">Leader</a>
              <a href="/services/lead-gen">Lead Gen TW</a>
              <a href="/services/branding">Branding TW</a>
            </div>
          </li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <a href="/book-a-call" className="nav-cta">Book a Call</a>
      </div>
    </nav>
  );
};

export default Nav;
