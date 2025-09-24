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
        <div class="nav-actions">
            <div class="dark-mode-label">
                <span>Dark mode</span>
                <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"></button>
            </div>
            <a href="contact.html" class="btn btn-primary btn-sm">Get Started</a>
        </div>
    </nav>
</header>
`;

// Function to inject header into page
function loadHeader() {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Load header when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
} else {
    loadHeader();
}
