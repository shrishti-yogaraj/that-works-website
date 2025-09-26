// =================== LEAD GEN THAT WORKS - MAIN JAVASCRIPT ===================
// Main JavaScript functionality for all pages

document.addEventListener('DOMContentLoaded', () => {

    // =================== THEME TOGGLE FUNCTIONALITY ===================
    const themeToggle = document.getElementById('themeToggle');
    
    // Set initial theme from localStorage or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            //forcing microscroll to make header change
            //window.scrollBy(0, 1);
            //window.scrollBy(0, -1);
        });
    }

    // =================== SMOOTH SCROLLING FOR ANCHOR LINKS ===================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =================== HEADER SCROLL EFFECT ===================
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            //const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

            if (currentScroll > 50) {
                //header.style.background = isDark ? 'rgba(10, 10, 10, 0.95)' : 'rgba(254, 253, 251, 0.95)';
                //header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                //if (isDark) {
                   // header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
                header.classList.add('scrolled');
                }
            } else {
                //header.style.background = isDark ? 'rgba(10, 10, 10, 0.9)' : 'rgba(254, 253, 251, 0.9)';
               //header.style.boxShadow = 'none';
                header.classList.remove('scrolled');
            }
        });
    }

    // =================== ANIMATION ON SCROLL (INTERSECTION OBSERVER) ===================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with the .fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // =================== PRICING PAGE FUNCTIONALITY ===================
    
    // Billing toggle functionality
    const billingToggle = document.getElementById('billingToggle');
    if (billingToggle) {
        const starterPrice = document.getElementById('starter-price');
        const growthPrice = document.getElementById('growth-price');
        const enterprisePrice = document.getElementById('enterprise-price');

        billingToggle.addEventListener('click', () => {
            billingToggle.classList.toggle('active');
            const isAnnual = billingToggle.classList.contains('active');
            
            // Update prices based on toggle
            if (starterPrice && growthPrice && enterprisePrice) {
                if (isAnnual) {
                    starterPrice.textContent = '398';
                    growthPrice.textContent = '798';
                    enterprisePrice.textContent = '1,598';
                } else {
                    starterPrice.textContent = '497';
                    growthPrice.textContent = '997';
                    enterprisePrice.textContent = '1,997';
                }
            }
        });
    }

    // =================== FAQ ACCORDION FUNCTIONALITY ===================
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active', !isActive);
            });
        }
    });

    // =================== BLOG PAGE FUNCTIONALITY ===================
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-button');
    const blogCards = document.querySelectorAll('.blog-card');

    if (searchInput && blogCards.length > 0) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            blogCards.forEach(card => {
                const title = card.querySelector('.blog-title').textContent.toLowerCase();
                const excerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
                const category = card.querySelector('.blog-category').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || excerpt.includes(searchTerm) || category.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Category filtering
    if (filterButtons.length > 0 && blogCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.dataset.category;
                
                // Filter cards
                blogCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                // Clear search when filtering
                if (searchInput) {
                    searchInput.value = '';
                }
            });
        });

        // Add click handlers to blog cards
        blogCards.forEach(card => {
            card.addEventListener('click', function() {
                alert('This would navigate to the full article. For demo purposes, articles are not yet implemented.');
            });
            
            card.style.cursor = 'pointer';
        });
    }

    // =================== NEWSLETTER FORM FUNCTIONALITY ===================
    
    // Blog page newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
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

    // Footer newsletter form
    const footerNewsletterForm = document.getElementById('footerNewsletterForm');
    if (footerNewsletterForm) {
        footerNewsletterForm.addEventListener('submit', function(e) {
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

    // =================== CONTACT FORM FUNCTIONALITY ===================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation and submission logic would go here
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // =================== GEO-BASED PRICING (PRICING PAGE) ===================
    
    // Geo-based pricing functionality
    async function updatePricingByLocation() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            const country = data.country_name;
            const countryCode = data.country_code;
            
            const geoIndicator = document.getElementById('geoIndicator');
            if (geoIndicator) {
                geoIndicator.textContent = `Pricing shown for ${country}`;
            }
            
            // Apply different pricing for different regions
            const pricingMultiplier = getPricingMultiplier(countryCode);
            
            if (pricingMultiplier !== 1) {
                adjustPrices(pricingMultiplier);
            }
        } catch (error) {
            console.log('Could not determine location, using default pricing');
        }
    }
    
    function getPricingMultiplier(countryCode) {
        // Example pricing adjustments
        const regionalPricing = {
            'GB': 1.1,   // UK - slightly higher
            'AU': 1.05,  // Australia - slightly higher  
            'CA': 0.95,  // Canada - slightly lower
            'IN': 0.3,   // India - much lower
            'BR': 0.4,   // Brazil - lower
        };
        
        return regionalPricing[countryCode] || 1;
    }
    
    function adjustPrices(multiplier) {
        // Adjust all prices by the multiplier
        const prices = document.querySelectorAll('[data-monthly], [data-annual], [data-onetime]');
        prices.forEach(priceElement => {
            const monthly = parseInt(priceElement.dataset.monthly);
            const annual = parseInt(priceElement.dataset.annual);
            const onetime = parseInt(priceElement.dataset.onetime);
            
            if (monthly) {
                priceElement.dataset.monthly = Math.round(monthly * multiplier);
                priceElement.dataset.annual = Math.round(annual * multiplier);
            }
            if (onetime) {
                priceElement.dataset.onetime = Math.round(onetime * multiplier);
            }
        });
        
        // Update displayed prices
        const isAnnual = billingToggle && billingToggle.classList.contains('active');
        const starterPrice = document.getElementById('starter-price');
        const growthPrice = document.getElementById('growth-price');
        const enterprisePrice = document.getElementById('enterprise-price');
        const onetimePrice = document.getElementById('onetime-price');
        
        if (starterPrice && growthPrice && enterprisePrice) {
            if (isAnnual) {
                starterPrice.textContent = Math.round(398 * multiplier);
                growthPrice.textContent = Math.round(798 * multiplier);
                enterprisePrice.textContent = Math.round(1598 * multiplier).toLocaleString();
            } else {
                starterPrice.textContent = Math.round(497 * multiplier);
                growthPrice.textContent = Math.round(997 * multiplier);
                enterprisePrice.textContent = Math.round(1997 * multiplier).toLocaleString();
            }
        }
        
        if (onetimePrice) {
            onetimePrice.textContent = Math.round(9997 * multiplier).toLocaleString();
        }
    }

    // Initialize geo-pricing if on pricing page
    if (document.getElementById('geoIndicator')) {
        updatePricingByLocation();
    }

    // =================== HOMEPAGE SPECIFIC FUNCTIONALITY ===================
    
    // Float animation styles for homepage
    if (document.querySelector('.hero')) {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                33% { transform: translateY(-20px) rotate(5deg); }
                66% { transform: translateY(10px) rotate(-3deg); }
            }
        `;
        document.head.appendChild(style);
    }

});

// =================== GLOBAL UTILITY FUNCTIONS ===================

// Function to initialize theme on page load (called before DOMContentLoaded)
function initializeTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Initialize theme immediately
initializeTheme();
