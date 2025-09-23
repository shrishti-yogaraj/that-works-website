// Main JavaScript functionality for Lead Gen That Works
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

    // =================== MOBILE MENU TOGGLE ===================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-links--open');
            mobileMenuToggle.classList.toggle('mobile-menu-toggle--open');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-links--open');
                mobileMenuToggle.classList.remove('mobile-menu-toggle--open');
            });
        });
    }

    // =================== BILLING TOGGLE (PRICING PAGE) ===================
    const billingToggle = document.getElementById('billingToggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');
    
    if (billingToggle) {
        billingToggle.addEventListener('click', () => {
            billingToggle.classList.toggle('active');
            
            if (billingToggle.classList.contains('active')) {
                // Show annual prices
                monthlyPrices.forEach(price => price.classList.add('hidden'));
                annualPrices.forEach(price => price.classList.add('hidden'));
            }
        });
    }

    // =================== SMOOTH SCROLLING FOR ANCHOR LINKS ===================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =================== HEADER SCROLL EFFECT ===================
    const header = document.querySelector('header');
    if (header) {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

            // Background blur effect based on scroll
            if (currentScroll > 50) {
                header.style.background = isDark ? 'rgba(10, 10, 10, 0.95)' : 'rgba(254, 253, 251, 0.95)';
                header.style.boxShadow = isDark ? '0 4px 20px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.05)';
            } else {
                header.style.background = isDark ? 'rgba(10, 10, 10, 0.9)' : 'rgba(254, 253, 251, 0.9)';
                header.style.boxShadow = 'none';
            }

            lastScrollTop = currentScroll;
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
                // Optional: stop observing after animation runs to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with the .fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // =================== FAQ TOGGLE FUNCTIONALITY ===================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const answer = item.querySelector('.faq-answer');
                const isOpen = item.classList.contains('faq-open');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('faq-open');
                });
                
                // Toggle current item
                if (!isOpen) {
                    item.classList.add('faq-open');
                }
            });
        }
    });

    // =================== FORM HANDLING ===================
    const contactForms = document.querySelectorAll('form[data-form-type="contact"]');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            try {
                // Get form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                // Here you would typically send to your backend
                // For now, we'll simulate the request
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Success feedback
                showNotification('Thank you! We\'ll be in touch soon.', 'success');
                form.reset();
                
            } catch (error) {
                console.error('Form submission error:', error);
                showNotification('Something went wrong. Please try again.', 'error');
            } finally {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    });

    // =================== NOTIFICATION SYSTEM ===================
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => {
            notification.classList.add('notification--show');
        }, 10);
        
        // Remove after delay
        setTimeout(() => {
            notification.classList.remove('notification--show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }

    // =================== URL PARAMETER HANDLING ===================
    const urlParams = new URLSearchParams(window.location.search);
    
    // Auto-select pricing plan if specified in URL
    const selectedPlan = urlParams.get('plan');
    if (selectedPlan) {
        const planElements = document.querySelectorAll(`[data-plan="${selectedPlan}"]`);
        planElements.forEach(element => {
            element.classList.add('highlight-plan');
        });
    }
    
    // Auto-select service if specified in URL
    const selectedService = urlParams.get('service');
    if (selectedService) {
        const serviceElements = document.querySelectorAll(`[data-service="${selectedService}"]`);
        serviceElements.forEach(element => {
            element.classList.add('highlight-service');
        });
    }

    // =================== PERFORMANCE OPTIMIZATIONS ===================
    
    // Lazy load images when they come into view
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // Preload critical resources
    const preloadCritical = () => {
        const criticalResources = [
            'css/master.css',
            // Add other critical resources here
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.endsWith('.css') ? 'style' : 'script';
            document.head.appendChild(link);
        });
    };
    
    // Only preload on fast connections
    if ('connection' in navigator && navigator.connection.effectiveType === '4g') {
        preloadCritical();
    }

    // =================== ACCESSIBILITY ENHANCEMENTS ===================
    
    // Keyboard navigation for custom components
    document.addEventListener('keydown', (e) => {
        // Handle Enter/Space on custom buttons
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('toggle-switch')) {
            e.preventDefault();
            e.target.click();
        }
        
        // Handle Escape key to close mobile menu
        if (e.key === 'Escape') {
            const navLinks = document.querySelector('.nav-links');
            const mobileToggle = document.getElementById('mobileMenuToggle');
            if (navLinks && navLinks.classList.contains('nav-links--open')) {
                navLinks.classList.remove('nav-links--open');
                mobileToggle.classList.remove('mobile-menu-toggle--open');
            }
        }
    });

    // Focus management for mobile menu
    const trapFocus = (element) => {
        const focusableElements = element.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    };

    // Apply focus trap to mobile menu when open
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (navLinks.classList.contains('nav-links--open')) {
                        trapFocus(navLinks);
                    }
                }
            });
        });
        
        observer.observe(navLinks, { attributes: true });
    }

    console.log('🚀 Lead Gen That Works - JavaScript loaded successfully');
}); price.classList.remove('hidden'));
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.classList.remove('hidden'));
                annualPrices.forEach(price =>
