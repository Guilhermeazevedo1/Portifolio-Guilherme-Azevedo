/**
 * Portfolio Script
 * Interatividade e animações para o portfólio de Guilherme Azevedo
 */

// ============================================
// Navbar Scroll Effect
// ============================================

const navbar = document.getElementById('navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (lastScrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// Intersection Observer for Section Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
    observer.observe(section);
});

// ============================================
// Smooth Scroll Navigation
// ============================================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Button Navigation
// ============================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const href = button.getAttribute('href');
        
        // Check if it's an internal link
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// Add Stagger Animation to Cards
// ============================================

const addStaggerAnimation = (containerSelector, cardSelector) => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const cards = container.querySelectorAll(cardSelector);
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll(cardSelector);
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }, index * 100);
                });
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cardObserver.observe(container);
};

// Apply stagger animation to different sections
addStaggerAnimation('#sobre .about-cards', '.card');
addStaggerAnimation('#skills', '.skill-card');
addStaggerAnimation('#projetos', '.project-card');

// ============================================
// Hover Effects on Cards
// ============================================

const setupCardHoverEffects = () => {
    const allCards = document.querySelectorAll('.card, .skill-card, .project-card');
    
    allCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
};

// Initialize hover effects when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCardHoverEffects);
} else {
    setupCardHoverEffects();
}

// ============================================
// Scroll Progress Indicator (Optional)
// ============================================

const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    // You can use this value to update a progress bar if needed
    // console.log(`Scroll Progress: ${scrollPercent}%`);
};

window.addEventListener('scroll', updateScrollProgress);

// ============================================
// Initialize on Page Load
// ============================================

window.addEventListener('load', () => {
    // Trigger animations for sections already in view
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});

// ============================================
// Keyboard Navigation
// ============================================

document.addEventListener('keydown', (e) => {
    // Scroll to sections with keyboard shortcuts
    if (e.key === 'ArrowDown') {
        window.scrollBy(0, window.innerHeight);
    } else if (e.key === 'ArrowUp') {
        window.scrollBy(0, -window.innerHeight);
    }
});

// ============================================
// Performance Optimization
// ============================================

// Debounce function for scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Debounced scroll handler
const debouncedScroll = debounce(() => {
    updateScrollProgress();
}, 100);

window.addEventListener('scroll', debouncedScroll, { passive: true });

// ============================================
// Console Message
// ============================================

console.log('%cGuilherme Azevedo - Portfólio', 'font-size: 20px; font-weight: bold; color: #00d9ff; text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);');
console.log('%cEspecialista em GenIA • LangChain • LangGraph', 'font-size: 14px; color: #e8e8e8;');


