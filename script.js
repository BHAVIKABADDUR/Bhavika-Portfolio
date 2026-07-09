// Active chapter tracking on the film-strip rail
const railLinks = document.querySelectorAll('.rail-link');
const chapters = document.querySelectorAll('.chapter');

if (railLinks.length && chapters.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const ch = entry.target.getAttribute('data-ch');
                railLinks.forEach((l) => l.classList.remove('active'));
                const active = document.querySelector(`.rail-link[data-ch="${ch}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    chapters.forEach((c) => observer.observe(c));
}

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('.mobile-link').forEach((link) => {
        link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
}

// Copy email to clipboard
function wireEmailButton(btn) {
    if (!btn) return;
    btn.addEventListener('click', () => {
        navigator.clipboard.writeText('baddurbhavika@gmail.com').then(() => {
            const toast = document.getElementById('copyToast');
            if (toast) {
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 1800);
            } else {
                btn.textContent = 'copied — baddurbhavika@gmail.com';
                setTimeout(() => { btn.textContent = 'baddurbhavika@gmail.com'; }, 1800);
            }
        });
    });
}
wireEmailButton(document.getElementById('emailBtn'));
wireEmailButton(document.getElementById('emailBtn2'));

// Gentle scroll reveal for chapter content
const revealTargets = document.querySelectorAll(
    '.chapter-title, .body-text, .skill-lines, .job-meta, .story-list, .contact-sheet, .pull-quote, .frame'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealTargets.forEach((el) => revealObserver.observe(el));
