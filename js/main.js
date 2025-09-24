// Main JavaScript File
// Save this file as: js/main.js

// This function runs when the entire HTML document has been loaded.
document.addEventListener('DOMContentLoaded', () => {

    // =================== THEME TOGGLE ===================
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
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

            if (currentScroll > 50) { // A smaller threshold for a quicker effect
                header.style.background = isDark ? 'rgba(10, 10, 10, 0.95)' : 'rgba(254, 253, 251, 0.95)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                if (isDark) {
                     header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
                }
            } else {
                header.style.background = isDark ? 'rgba(10, 10, 10, 0.9)' : 'rgba(254, 253, 251, 0.9)';
                header.style.boxShadow = 'none';
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
                observer.unobserve(entry.target); // Optional: stop observing after animation runs
            }
        });
    }, observerOptions);

    // Observe all elements with the .fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // =================== PRICING PAGE FUNCTIONALITY (if on pricing page) ===================
    // Billing toggle functionality
    const billingToggle = document.getElementById('billingToggle');
    if (billingToggle) {
        const starterPrice = document.getElementById('starter-price');
        const proPrice = document.getElementById('pro-price');
        const enterprisePrice = document.getElementById('enterprise-price');

        billingToggle.addEventListener('click', () => {
            billingToggle.classList.toggle('active');
            const isAnnual = billingToggle.classList.contains('active');
            
            // Update prices based on toggle
            if (starterPrice) {
                starterPrice.textContent = isAnnual ? starterPrice.dataset.annual : starterPrice.dataset.monthly;
            }
            if (proPrice) {
                proPrice.textContent = isAnnual ? proPrice.dataset.annual : proPrice.dataset.monthly;
            }
            if (enterprisePrice) {
                enterprisePrice.textContent = isAnnual ? enterprisePrice.dataset.annual : enterprisePrice.dataset.monthly;
            }
        });
    }

    // FAQ Accordion functionality
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

});
