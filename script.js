// ============================================
// DESCOMPLIQUE - JAVASCRIPT
// ============================================

// Navigation Toggle (Mobile)
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Sticky Navigation
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.value-card, .consultant-card, .solution-card, .training-card, .diff-card, .testimonial-card, .blog-card');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});

// Testimonials Carousel (simple auto-rotate)
const testimonialSlider = document.querySelector('.testimonials-slider');
if (testimonialSlider) {
    const cards = testimonialSlider.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    
    // Only auto-rotate on mobile
    if (window.innerWidth <= 768) {
        setInterval(() => {
            cards.forEach(card => card.style.display = 'none');
            cards[currentIndex].style.display = 'block';
            currentIndex = (currentIndex + 1) % cards.length;
        }, 5000);
    }
}

// Form handling (if form is added later)
const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Format WhatsApp message
    const message = `Olá! Vim pelo site da Descomplique e gostaria de saber mais.
    
Nome: ${data.name || ''}
Empresa: ${data.company || ''}
Email: ${data.email || ''}
Telefone: ${data.phone || ''}
Mensagem: ${data.message || ''}

Qual o próximo passo?`;
    
    const whatsappUrl = `https://wa.me/5519996655163?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

// Add form submit listener if form exists
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Loading optimization
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Lazy loading images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Track scroll depth for analytics (optional)
let maxScroll = 0;
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        // You can send this to analytics here
    }
});

// Console easter egg
console.log('%c🚀 Descomplique', 'font-size: 24px; font-weight: bold; color: #39FF14; background: #2D2952; padding: 10px;');
console.log('%cEsse site foi desenvolvido com atenção aos detalhes e foco em resultados.', 'font-size: 12px; color: #666;');
console.log('%cEstratégia em pessoas e negócios', 'font-size: 14px; color: #39FF14; font-weight: bold;');
