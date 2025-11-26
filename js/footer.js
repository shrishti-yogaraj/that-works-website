// Enhanced Footer Component
// Save this file as: js/footer.js

const footerHTML = `
<footer style="border-top: 1px solid var(--border-color); background: var(--secondary-bg); padding: var(--space-3xl) 0 var(--space-xl);">
    <div class="container">
        <div class="grid grid-auto gap-xl" style="margin-bottom: var(--space-2xl); min-height: 200px;">
            <!-- Company Info -->
            <div style="max-width: 350px;">
                <div class="logo" style="margin-bottom: var(--space-md); font-size: 1.25rem;">Lead Gen That Works</div>
                <p class="text-secondary" style="margin-bottom: var(--space-lg); line-height: 1.6;">
                    Better prospecting through better research. We help B2B sales teams automate their lead generation process and 3x their response rates.
                </p>
                <div style="display: flex; gap: 1rem;">
                    <a href="mailto:hello@leadgenthatworks.com" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">
                        📧 Email Us
                    </a>
                    <a href="tel:+1-555-123-4567" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">
                        📞 Call Us
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 style="color: var(--text-primary); margin-bottom: var(--space-md); font-size: 1rem;">Quick Links</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 0.5rem;">
                        <a href="index.html" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">Home</a>
                    </li>
                    <li style="margin-bottom: 0.5rem;">
                        <a href="about.html" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">About Us</a>
                    </li>
                    <li style="margin-bottom: 0.5rem;">
                        <a href="how-it-works.html" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">How It Works</a>
                    </li>
                    <li style="margin-bottom: 0.5rem;">
                        <a href="pricing.html" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">Plans</a>
                    </li>
                    <li style="margin-bottom: 0.5rem;">
                        <a href="contact.html" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">Contact</a>
                    </li>
                </ul>
            </div>

            <!-- Resources -->
            <div>
                <h4 style="color: var(--text-primary); margin-bottom: var(--space-md); font-size: 1rem;">Resources</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 0.5rem;">
                        <a href="blog.html" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">Blog</a>
                    </li>
                    <li style="margin-bottom: 0.5rem;">
                        <a href="#case-studies" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">Case Studies</a>
                    </li>
                    <li style="margin-bottom: 0.5rem;">
                        <a href="#roi-calculator" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">ROI Calculator</a>
                    </li>
                    <li style="margin-bottom: 0.5rem;">
                        <a href="#templates" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">Email Templates</a>
                    </li>
                    <li style="margin-bottom: 0.5rem;">
                        <a href="#help" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-secondary)'">Help Center</a>
                    </li>
                </ul>
            </div>

            <!-- Newsletter Signup -->
            <div>
                <h4 style="color: var(--text-primary); margin-bottom: var(--space-md); font-size: 1rem;">Stay Updated</h4>
                <p class="text-secondary" style="margin-bottom: var(--space-md); font-size: 0.9rem; line-height: 1.5;">
                    Get weekly tips for improving your lead generation process.
                </p>
                <form id="footerNewsletterForm" style="display: flex; gap: 0.5rem; margin-bottom: var(--space-md);">
                    <input type="email" placeholder="Your email" required style="
                        flex-grow: 1; 
                        padding: 0.5rem; 
                        border: 1px solid var(--border-color); 
                        border-radius: var(--radius-sm); 
                        background: var(--accent-bg); 
                        color: var(--text-primary);
                        font-size: 0.85rem;
                    ">
                    <button type="submit" style="
                        background: var(--gradient); 
                        color: white; 
                        border: none; 
                        padding: 0.5rem 1rem; 
                        border-radius: var(--radius-sm); 
                        cursor: pointer;
                        font-size: 0.85rem;
                        font-weight: 600;
                        transition: transform 0.2s;
                    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        Subscribe
                    </button>
                </form>
                <p style="font-size: 0.75rem; color: var(--text-muted);">
                    No spam. Unsubscribe anytime.
                </p>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div style="
            border-top: 1px solid var(--border-color); 
            padding-top: var(--space-lg); 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            flex-wrap: wrap; 
            gap: 1rem;
        ">
            <div>
                <p class="text-secondary" style="margin: 0; font-size: 0.85rem;">
                    &copy; 2025 Lead Gen That Works. Better prospecting through better research.
                </p>
            </div>
            <div style="display: flex; gap: 1.5rem;">
                <a href="#privacy" style="color: var(--text-muted); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-muted)'">Privacy Policy</a>
                <a href="#terms" style="color: var(--text-muted); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-muted)'">Terms of Service</a>
                <a href="#cookies" style="color: var(--text-muted); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-muted)'">Cookie Policy</a>
            </div>
        </div>
    </div>
</footer>
`;

// Function to inject footer into page
function loadFooter() {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    
    // Add newsletter form functionality
    const footerForm = document.getElementById('footerNewsletterForm');
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email && email.includes('@')) {
                alert('Thank you for subscribing! Check your email for confirmation.');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
}

// Load footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}
