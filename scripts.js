// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a fade-in effect to the content on scroll
    const fadeInElements = document.querySelectorAll('.ad-content');
    
    window.addEventListener('scroll', fadeInOnScroll);

    function fadeInOnScroll() {
        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight) {
                element.classList.add('fade-in');
            }
        });
    }
});