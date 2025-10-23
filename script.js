// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const scrollProgress = document.getElementById('scroll-progress');
const scrollToTop = document.getElementById('scrollToTop');
const contactForm = document.getElementById('contactForm');
const typewriter = document.getElementById('typewriter');
const emailBtn = document.getElementById('emailBtn');
const emailTooltip = document.getElementById('emailTooltip');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeScrollEffects();
    initializeTypewriter();
    initializeParticles();
    initializeSkillBars();
    initializeContactForm();
    initializeScrollToTop();
    initializeEmailButton();
});

// Initialize AOS (Animate On Scroll) library
function initializeAnimations() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });
}

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll effects
function initializeScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar background on scroll
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll progress bar
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
        
        // Scroll to top button visibility
        if (scrollTop > 300) {
            scrollToTop.classList.add('visible');
        } else {
            scrollToTop.classList.remove('visible');
        }
        
        // Parallax effect for hero section
        const heroSection = document.querySelector('.home');
        if (heroSection && scrollTop < window.innerHeight) {
            const parallaxSpeed = scrollTop * 0.5;
            heroSection.style.transform = `translateY(${parallaxSpeed}px)`;
        }
        
        lastScrollTop = scrollTop;
    });
}

// Typewriter effect
function initializeTypewriter() {
    const texts = [
        "Hi, I'm Bhavika",
        "Turning ideas into digital experiences",
        "Building the future with code",
        "Creating meaningful solutions"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriter.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next text
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    // Start typewriter effect after a short delay
    setTimeout(typeWriter, 1000);
}

// Particles background
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#00BFA6'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00BFA6',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Animated skill bars
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    let hasAnimated = false;
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
            
            if (isVisible && !bar.classList.contains('animated')) {
                const width = bar.getAttribute('data-width');
                // Force reflow to ensure transition works
                bar.style.width = '0%';
                bar.offsetHeight; // Trigger reflow
                
                // Use setTimeout to ensure transition is applied
                setTimeout(() => {
                    bar.style.width = width + '%';
                    bar.classList.add('animated');
                }, 100);
            }
        });
    };
    
    window.addEventListener('scroll', animateSkillBars);
    // Check on page load and after a short delay
    setTimeout(animateSkillBars, 100);
    animateSkillBars();
}

// Contact form handling
function initializeContactForm() {
    if (!contactForm) return; // Exit if contact form doesn't exist
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    const colors = {
        success: '#00BFA6',
        error: '#ff4757',
        info: '#3742fa'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Email button functionality
function initializeEmailButton() {
    if (emailBtn && emailTooltip) {
        // Show tooltip on click
        emailBtn.addEventListener('click', function() {
            emailTooltip.classList.add('show');
            
            // Copy email to clipboard
            const email = 'baddurbhavika@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                // Change tooltip text temporarily to show copied
                const originalText = emailTooltip.textContent;
                emailTooltip.textContent = 'Copied to clipboard!';
                emailTooltip.classList.add('copied');
                
                setTimeout(() => {
                    emailTooltip.textContent = originalText;
                    emailTooltip.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
            
            // Hide tooltip after 3 seconds
            setTimeout(() => {
                emailTooltip.classList.remove('show');
            }, 3000);
        });
        
        // Show tooltip on hover
        emailBtn.addEventListener('mouseenter', function() {
            emailTooltip.classList.add('show');
        });
        
        emailBtn.addEventListener('mouseleave', function() {
            setTimeout(() => {
                if (!emailTooltip.classList.contains('copied')) {
                    emailTooltip.classList.remove('show');
                }
            }, 300);
        });
    }
}

// Scroll to top functionality
function initializeScrollToTop() {
    scrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
});

// Smooth scrolling for all anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loading');
    
    // Hide loading screen after content is loaded
    setTimeout(() => {
        const loadingElements = document.querySelectorAll('.loading');
        loadingElements.forEach(el => el.classList.remove('loading'));
    }, 500);
});

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add click effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Scroll handling code here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // Enter key activates focused buttons
    if (e.key === 'Enter' && document.activeElement.classList.contains('btn')) {
        document.activeElement.click();
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--accent-primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Console welcome message
console.log(`
🚀 Welcome to Bhavika's Portfolio!
✨ Built with modern web technologies
🎨 Featuring smooth animations and responsive design
📱 Optimized for all devices
🔧 Open source and customizable
`);

// Add error handling for external resources
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Image failed to load:', e.target.src);
    }
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
