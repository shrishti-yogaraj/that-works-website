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
    <div class="floating-bg-1"></div>
    <div class="floating-bg-2"></div>
    <div class="floating-bg-3"></div>
    <div class="floating-bg-4"></div>
    <div class="grid-pattern"></div>
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
