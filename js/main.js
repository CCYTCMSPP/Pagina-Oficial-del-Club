// ===== NAVEGACIÓN =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== GALERÍA DINÁMICA =====
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // Imágenes de ejemplo con nombres recomendados
    const galleryImages = [
        { id: 1, name: 'evento-1.jpg', title: 'Evento Científico 1' },
        { id: 2, name: 'evento-2.jpg', title: 'Evento Científico 2' },
        { id: 3, name: 'evento-3.jpg', title: 'Evento Científico 3' },
        { id: 4, name: 'robot-proyecto.jpg', title: 'Proyecto de Robótica' },
        { id: 5, name: 'experimento-fisica.jpg', title: 'Experimento de Física' },
        { id: 6, name: 'equipo-ccyt.jpg', title: 'Equipo CCYT' }
    ];

    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item animate-fadeIn';
        
        // Crear un gradiente como placeholder hasta que cargue la imagen real
        const colors = [
            'linear-gradient(135deg, #1e3a8a 0%, #fbbf24 100%)',
            'linear-gradient(135deg, #1e3a8a 0%, #ef4444 100%)',
            'linear-gradient(135deg, #1e3a8a 0%, #22c55e 100%)',
            'linear-gradient(135deg, #1e3a8a 0%, #f9a8d4 100%)',
            'linear-gradient(135deg, #0f1d3a 0%, #fbbf24 100%)',
            'linear-gradient(135deg, #ef4444 0%, #fbbf24 100%)'
        ];

        const imageContainer = document.createElement('div');
        imageContainer.style.background = colors[image.id - 1];
        imageContainer.style.width = '100%';
        imageContainer.style.height = '100%';
        imageContainer.style.display = 'flex';
        imageContainer.style.alignItems = 'center';
        imageContainer.style.justifyContent = 'center';
        imageContainer.style.color = 'white';
        imageContainer.style.fontSize = '1.2rem';
        imageContainer.style.fontWeight = 'bold';
        imageContainer.style.textAlign = 'center';
        imageContainer.style.padding = '1rem';
        imageContainer.innerHTML = image.title;

        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        overlay.innerHTML = '<i class="fas fa-search-plus"></i>';

        galleryItem.appendChild(imageContainer);
        galleryItem.appendChild(overlay);
        galleryGrid.appendChild(galleryItem);
    });
}

// Llamar a la función cuando carga el DOM
document.addEventListener('DOMContentLoaded', loadGallery);

// ===== FORMULARIO DE CONTACTO =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validación
    const inputs = contactForm.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    const emailInput = contactForm.querySelector('input[type="email"]');

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    });

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput && !emailRegex.test(emailInput.value)) {
        isValid = false;
        emailInput.style.borderColor = '#ef4444';
    }

    if (isValid) {
        // Mostrar mensaje de éxito
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: linear-gradient(135deg, #22c55e, #16a34a);
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideInRight 0.5s ease-out;
        `;
        successMessage.innerHTML = '✓ Mensaje enviado correctamente. ¡Gracias por contactarnos!';
        document.body.appendChild(successMessage);

        // Limpiar formulario
        contactForm.reset();

        // Reset border colors
        inputs.forEach(input => {
            input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });

        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            successMessage.style.animation = 'slideInLeft 0.5s ease-out forwards';
            setTimeout(() => successMessage.remove(), 500);
        }, 5000);
    }
});

// ===== SCROLL ANIMATIONS =====
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.about-card, .area-card, .project-card, .event-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate');
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    elements.forEach(element => {
        element.classList.add('scroll-animate');
        observer.observe(element);
    });
}

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ===== INICIAR CUANDO CARGA EL DOM =====
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
    animateCounters();
    startNavbarShrink();
});

// ===== NAVBAR SHRINK ON SCROLL =====
function startNavbarShrink() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 4px 20px rgba(30, 58, 138, 0.25)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 4px 20px rgba(30, 58, 138, 0.15)';
        }
    });
}

// ===== ANIMAR CONTADORES (OPCIONAL) =====
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const increment = target / 50;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// ===== EFECTO DE TIPEO EN TÍTULOS =====
function typewriterEffect(element, speed = 50) {
    const text = element.textContent;
    element.textContent = '';
    let index = 0;

    const typeChar = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeChar, speed);
        }
    };

    typeChar();
}

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== DETECCIÓN DE TEMA OSCURO =====
function detectDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        document.documentElement.style.setProperty('--text-dark', '#f3f4f6');
        document.documentElement.style.setProperty('--light-gray', '#1f2937');
    }
}

// ===== MOSTRAR/OCULTAR BOTÓN "VOLVER ARRIBA" =====
function handleScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #fbbf24, #f59e0b);
        color: #1e3a8a;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(251, 191, 36, 0.4);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
            scrollToTopBtn.style.alignItems = 'center';
            scrollToTopBtn.style.justifyContent = 'center';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.transform = 'translateY(-5px)';
        scrollToTopBtn.style.boxShadow = '0 6px 25px rgba(251, 191, 36, 0.5)';
    });

    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.transform = 'translateY(0)';
        scrollToTopBtn.style.boxShadow = '0 4px 15px rgba(251, 191, 36, 0.4)';
    });
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', () => {
    detectDarkMode();
    handleScrollToTop();
});
