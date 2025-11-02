// ========================================
// Variables globales
// ========================================

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

// ========================================
// Navegación y menú hamburguesa
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Navegación activa según scroll
    updateActiveNavLink();
});

// ========================================
// Scroll effects
// ========================================

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Navbar con scroll
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Actualizar link activo
    updateActiveNavLink();
    
    // Reveal animations
    revealOnScroll();
    
    lastScrollTop = scrollTop;
});

// ========================================
// Actualizar link de navegación activo
// ========================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ========================================
// Scroll suave para todos los enlaces ancla
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Animación de contador para estadísticas
// ========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Iniciar contadores cuando sean visibles
let countersAnimated = false;

function checkCounters() {
    if (countersAnimated) return;
    
    const statsSection = document.querySelector('.hero-stats');
    if (!statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, target);
        });
        countersAnimated = true;
    }
}

window.addEventListener('scroll', checkCounters);
document.addEventListener('DOMContentLoaded', checkCounters);

// ========================================
// Tema claro/oscuro
// ========================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar preferencia guardada
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle tema
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// ========================================
// Reveal on Scroll
// ========================================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Agregar clase reveal a elementos que deben animarse
document.addEventListener('DOMContentLoaded', () => {
    // Agregar reveal a las cards de habilidades
    document.querySelectorAll('.skill-category').forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Agregar reveal a items de contacto
    document.querySelectorAll('.contact-item').forEach((el, index) => {
        el.classList.add('reveal-left');
        el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Agregar reveal a highlights de sobre mí
    document.querySelectorAll('.highlight-item').forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${index * 0.15}s`;
    });
});

// ========================================
// Efecto parallax suave en hero
// ========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// ========================================
// Preloader (opcional)
// ========================================

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// ========================================
// Lazy loading para imágenes
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Partículas animadas en el hero (opcional)
// ========================================

function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 0;
    `;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particlesContainer.appendChild(particle);
    }
    
    hero.appendChild(particlesContainer);
}

// Descomentar si quieres partículas animadas
// document.addEventListener('DOMContentLoaded', createParticles);

// ========================================
// Copiar email al hacer click (opcional)
// ========================================

document.querySelectorAll('.contact-item a[href^="mailto"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const email = link.textContent;
        
        navigator.clipboard.writeText(email).then(() => {
            // Mostrar notificación
            showNotification('📧 Email copiado al portapapeles');
        });
    });
});

// ========================================
// Sistema de notificaciones
// ========================================

function showNotification(message, duration = 3000) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-sm);
        box-shadow: 0 4px 20px var(--shadow-color);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remover después del tiempo especificado
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}

// ========================================
// Detectar modo oscuro del sistema
// ========================================

if (window.matchMedia && !localStorage.getItem('theme')) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-theme');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
}

// ========================================
// Smooth scroll para Safari
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// Performance: Throttle scroll events
// ========================================

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

// Aplicar throttle a eventos de scroll pesados
window.addEventListener('scroll', throttle(revealOnScroll, 100));

// ========================================
// Console message (opcional - marca personal)
// ========================================

console.log('%c¡Hola Developer! 👋', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cEste portfolio fue construido con HTML, CSS y JavaScript vanilla.', 'font-size: 14px; color: #64748b;');

// ========================================
// Analytics (descomentar y configurar si usas)
// ========================================

/*
// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'TU-ID-DE-ANALYTICS');
*/
