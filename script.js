// Script principal para Eco Energy

document.addEventListener('DOMContentLoaded', function() {
    console.log('Eco Energy Solución cargada correctamente');
    
    // Inicializar Swiper
    const swiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'white';
            navbar.style.padding = '0.8rem 0';
        } else {
            navbar.style.background = 'white';
            navbar.style.padding = '1rem 0';
        }
    });
    
    // Smooth scroll para los enlaces del navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    console.log('Eco Energy - Energia limpia para el mundo');
});
