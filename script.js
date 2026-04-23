// Script principal para Eco Energy

document.addEventListener('DOMContentLoaded', function() {
    console.log('Eco Energy Solutions cargada correctamente');
    
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

    // Inicializar Swiper para Aliados
    const aliadosSwiper = new Swiper('.aliados-swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    // Navbar hide on scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.classList.contains('navbar-static')) {
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                navbar.style.top = '-100px';
            } else {
                // Scrolling up
                navbar.style.top = '0';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        });
    }
    
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

// Interceptar formulario de contacto
const formContacto = document.getElementById('contacto-form');
if (formContacto) {
    formContacto.addEventListener('submit', async function(event) {
        event.preventDefault(); // Evita que Formspree abra su página
        const boton = formContacto.querySelector('button[type="submit"]');
        boton.innerText = 'Enviando...'; // Da feedback al usuario
        
        const data = new FormData(event.target);
        try {
            const response = await fetch(event.target.action, {
                method: formContacto.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                // Redirección exitosa usando JavaScript
                window.location.href = '/gracias.html';
            } else {
                boton.innerText = 'Error al enviar';
                alert('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.');
            }
        } catch (error) {
            boton.innerText = 'Error al enviar';
            alert('Hubo un problema de conexión.');
        }
    });
}

