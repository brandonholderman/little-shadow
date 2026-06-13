const nav = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');

if (nav && navLinks) {
    nav.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        nav.setAttribute('aria-expanded', isOpen);
    });


    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            nav.setAttribute('aria-expanded', 'false');
        });
    });


    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav')) {
            navLinks.classList.remove('open');
            nav.setAttribute('aria-expanded', 'false');
        }
    });
}


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