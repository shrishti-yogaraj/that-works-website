// =================== POPUP FORM COMPONENT ===================
// Reusable popup form that can be included on any page

const popupFormHTML = `
<!-- =================== POPUP MODAL =================== -->
<div class="modal-overlay" id="lead-form">
    <div class="modal">
        <button class="modal-close">&times;</button>
        <h3 style="font-size: 3rem; font-weight: 800; background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 2rem;">Let's Talk!</h3>
        
        <form class="lead-form" id="mainLeadForm">
            <div class="form-group">
                <label class="form-label" for="name">Full Name *</label>
                <input type="text" id="name" name="name" class="form-input" required>
            </div>
            
            <div class="form-group">
                <label class="form-label" for="email">Work Email *</label>
                <input type="email" id="email" name="email" class="form-input" required>
            </div>
            
            <div class="form-group">
                <label class="form-label" for="company">Company *</label>
                <input type="text" id="company" name="company" class="form-input" required>
            </div>
            
            <div class="form-group">
                <label class="form-label" for="role">Your Role *</label>
                <input type="text" id="role" name="role" class="form-input" placeholder="e.g. Sales Director, Founder, VP Sales" required>
            </div>
            
            <div class="form-group">
                <label class="form-label" for="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" class="form-input" required>
            </div>
            
            <div class="form-group">
                <label class="form-label" for="challenge">Biggest Lead Gen Challenge *</label>
                <select id="challenge" name="challenge" class="form-select" required>
                    <option value="">What's your biggest challenge?</option>
                    <option value="Takes too much time">Takes too much time</option>
                    <option value="Low quality prospects">Low quality prospects</option>
                    <option value="Generic outreach">Generic outreach</option>
                    <option value="Low response rates">Low response rates</option>
                    <option value="Hard to scale">Hard to scale</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            
            <div class="form-group">
                <label class="form-label" for="urgency">How soon are you looking to implement? *</label>
                <select id="urgency" name="urgency" class="form-select" required>
                    <option value="">Select timeframe</option>
                    <option value="ASAP - This week">ASAP - This week</option>
                    <option value="Within a month">Within a month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Just exploring options">Just exploring options</option>
                </select>
            </div>
            
            <div class="form-group">
                <label class="form-label" for="details">Tell us more about your goals</label>
                <textarea id="details" name="details" class="form-textarea" placeholder="What specific results are you hoping to achieve? Any other details we should know?"></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">
                Book My Demo
            </button>
            
            <p class="text-small">
                You'll hear from us within 24 hours.
            </p>
        </form>
        
        <!-- Success Message Container (hidden initially) -->
        <div id="successMessage" style="display: none; text-align: center; padding: 3rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">✓</div>
            <h3 style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem; color: #10b981;">Thank You!</h3>
            <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; color: var(--text-light);">
                We've received your request and will be in touch within 24 hours to schedule your demo.
            </p>
            <button class="btn btn-primary" onclick="
                document.getElementById('lead-form').classList.remove('active'); 
                document.body.style.overflow = ''; 
                document.getElementById('successMessage').style.display = 'none';
                document.getElementById('mainLeadForm').style.display = 'block';
                document.getElementById('mainLeadForm').reset();
            ">Close</button>
        </div>
        
        <!-- Error Message Container (hidden initially) -->
        <div id="errorMessage" style="display: none; text-align: center; padding: 3rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">⚠️</div>
            <h3 style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem; color: #ef4444;">Oops!</h3>
            <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; color: var(--text-light);">
                Something went wrong submitting your form. Please try again or email us directly at <a href="mailto:hello@leadgenthatworks.com" style="color: var(--primary);">hello@leadgenthatworks.com</a>
            </p>
            <button class="btn btn-primary" onclick="
                document.getElementById('errorMessage').style.display = 'none';
                document.getElementById('mainLeadForm').style.display = 'block';
            ">Try Again</button>
        </div>
    </div>
</div>
`;

// Function to inject popup form into page
function loadPopupForm() {
    document.body.insertAdjacentHTML('beforeend', popupFormHTML);
    initializePopupForm();
}

// Initialize popup form functionality
function initializePopupForm() {
    // Open popup when trigger buttons are clicked
    document.querySelectorAll('.popup-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const popup = document.getElementById('lead-form');
            if (popup) {
                popup.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close popup functionality
    const popup = document.getElementById('lead-form');
    const closeBtn = popup.querySelector('.modal-close');
    
    // Close with X button
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
        document.body.style.overflow = '';
        // Reset all views
        document.getElementById('successMessage').style.display = 'none';
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('mainLeadForm').style.display = 'block';
        document.getElementById('mainLeadForm').reset();
    });
    
    // Close when clicking overlay
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
            // Reset all views
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('errorMessage').style.display = 'none';
            document.getElementById('mainLeadForm').style.display = 'block';
            document.getElementById('mainLeadForm').reset();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
            // Reset all views
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('errorMessage').style.display = 'none';
            document.getElementById('mainLeadForm').style.display = 'block';
            document.getElementById('mainLeadForm').reset();
        }
    });
    
    // Handle form submission
    const form = document.getElementById('mainLeadForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        // Collect form data
        const leadData = {
            timestamp: new Date().toISOString(),
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            role: formData.get('role'),
            phone: formData.get('phone'),
            challenge: formData.get('challenge'),
            urgency: formData.get('urgency'),
            details: formData.get('details'),
            source: window.location.href,
            userAgent: navigator.userAgent
        };
        
        try {
            // Create abort controller with 15 second timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);
            
            // Send to your N8N webhook
            const response = await fetch('YOUR_N8N_WEBHOOK_URL_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(leadData),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error('Webhook submission failed');
            }
            
            // SUCCESS - Hide form and show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
        } catch (error) {
            console.error('Form submission error:', error);
            console.log('Lead Data:', leadData); // For debugging
            
            // ERROR - Hide form and show error message
            form.style.display = 'none';
            errorMessage.style.display = 'block';
            
        } finally {
            // Restore button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Load popup form when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPopupForm);
} else {
    loadPopupForm();
}
