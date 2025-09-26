// Shared Header Component
// Save this file as: js/header.js

const headerHTML = `
<header>
    <nav class="container">
        <div class="logo">Lead Gen That Works</div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="how-it-works.html">How It Works</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="pricing.html">Pricing</a></li>
        </ul>
      <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 0.8rem; color: var(--text-muted);">Dark mode</span>
                    <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"></button>
                </div>
                <a href="#demo" class="btn btn-primary btn-sm">Get Started</a>
            </div>
        </nav>
    </header>
`;
 const backgroundHTML = `
    <div style="position: fixed; top: 10%; right: 8%; width: 120px; height: 120px; background: var(--gradient); border-radius: 50%; opacity: 0.08; animation: float 6s ease-in-out infinite; z-index: -5;"></div>
    <div style="position: fixed; bottom: 25%; left: 12%; width: 80px; height: 80px; background: var(--secondary-accent); border-radius: 30%; opacity: 0.12; animation: float 4s ease-in-out infinite reverse; z-index: -5;"></div>
    <div style="position: fixed; top: 35%; left: 3%; width: 60px; height: 60px; background: var(--accent-color); border-radius: 12px; opacity: 0.15; animation: float 5s ease-in-out infinite; z-index: -5;"></div>
    <div style="position: fixed; bottom: 15%; right: 15%; width: 100px; height: 100px; border: 3px solid var(--accent-color); border-radius: 50%; opacity: 0.1; animation: float 7s ease-in-out infinite; z-index: -5;"></div>
    <div style="position: fixed; top: 60%; right: 25%; width: 40px; height: 40px; background: var(--warm-gradient); border-radius: 50%; opacity: 0.2; animation: float 3s ease-in-out infinite; z-index: -5;"></div>
    <div style="position: fixed; top: 15%; left: 25%; width: 30px; height: 30px; background: var(--secondary-accent); transform: rotate(45deg); opacity: 0.15; animation: float 8s ease-in-out infinite reverse; z-index: -5;"></div>
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: radial-gradient(circle at 20px 20px, rgba(255, 107, 53, 0.03) 1px, transparent 1px); background-size: 40px 40px; z-index: -10;"></div>
`;
// Function to inject header into page
function loadHeader() {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('afterbegin', backgroundHTML);
}

// Load header when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
} else {
    loadHeader();
}
