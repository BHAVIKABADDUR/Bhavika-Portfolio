// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
}

// Copy email to clipboard
const emailBtn = document.getElementById('emailBtn');
const copyToast = document.getElementById('copyToast');
if (emailBtn) {
    const email = 'baddurbhavika@gmail.com';
    emailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(email).then(() => {
            if (copyToast) {
                copyToast.classList.add('show');
                setTimeout(() => copyToast.classList.remove('show'), 1800);
            }
        }).catch(() => {
            // Clipboard API unavailable — fall back to a mailto link
            window.location.href = `mailto:${email}`;
        });
    });
}

// Sticky header shadow on scroll
const siteHeader = document.getElementById('siteHeader');
if (siteHeader) {
    const onScroll = () => {
        siteHeader.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// Gentle scroll reveal for section content
const revealTargets = document.querySelectorAll(
    '.section-title, .exp-grid, .cap-grid, .case, .beyond-grid, .contact-title'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach((el) => revealObserver.observe(el));
} else {
    revealTargets.forEach((el) => el.classList.add('in'));
}