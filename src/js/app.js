const nav = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');

/**
 * Burger Menu for Mobile
 */
if (nav && navLinks) {
    nav.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        nav.setAttribute('aria-expanded', isOpen);
    });

    /**
     * Close Menu when Link Selected
     */
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            nav.setAttribute('aria-expanded', 'false');
        });
    });

    /**
     * Close Menu on Outside Click
     */
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav')) {
            navLinks.classList.remove('open');
            nav.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Scroll Reveal for Sauce Cards
 */
const cards = document.querySelectorAll('.flavor-card, .attr-list li, .story-text p');

if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    cards.forEach((el, i) => {
        el.style.setProperty('--reveal-delay', `${i * 80}ms`);
        el.classList.add('reveal-target');
        revealObs.observe(el);
    });
}

console.log(
    'Website create by Brandon Holderman. Like my work? Please reach out! Email: brandonholderman@outlook.com'
)