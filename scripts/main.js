const header = document.querySelector('.header');
const images = document.querySelectorAll('.hero-carousel img');
const trustCards = document.querySelectorAll('.trust-card');


let index = 0;
let interval = setInterval(nextSlide, 3000);

// navbar smooth scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// smooth fade transition
function nextSlide() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

document.querySelector('.hero-carousel').addEventListener('mouseenter', () => {
    clearInterval(interval);
});

document.querySelector('.hero-carousel').addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 3000);
});

// trigger on scroll
function revealTrustCards() {
    const triggerBottom = window.innerHeight * 0.85;

    trustCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealTrustCards);
window.addEventListener('load', revealTrustCards);

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// burger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate hamburger into “X”
    hamburger.classList.toggle('open');
});