/* ============================================
   VARIABLES GLOBALES
   ============================================ */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

/* ============================================
   NAVIGATION MOBILE
   ============================================ */

// Toggle menu au click du hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ============================================
   ACTIVE NAV LINK ON SCROLL
   ============================================ */

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            link.style.color = 'var(--primary)';
        } else {
            link.style.color = '';
        }
    });
});

/* ============================================
   FILTRAGE DES PROJETS
   ============================================ */

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Enlever la classe active de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Filtrer les projets
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.classList.remove('hidden');
                // Animer l'apparition
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'fadeIn 0.5s ease-out';
                }, 10);
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

/* ============================================
   FORM SUBMISSION
   ============================================ */

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validation simple
    if (!name || !email || !subject || !message) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    // Créer un lien mailto
    const mailtoLink = `mailto:contact@elie-portfolio.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`)}`;

    // Ouvrir le client mail par défaut
    window.location.href = mailtoLink;

    // Alternative: envoyer via API (si vous avez un backend)
    // sendFormViaAPI(name, email, subject, message);

    // Afficher un message de succès
    showFormSuccess();

    // Réinitialiser le formulaire
    contactForm.reset();
});

function showFormSuccess() {
    const form = contactForm;
    const originalContent = form.innerHTML;
    
    form.innerHTML = `
        <div style="text-align: center; padding: 2rem; background: rgba(0, 208, 132, 0.1); border-radius: 0.5rem;">
            <h3 style="color: #00d084; margin-bottom: 0.5rem;">✓ Message envoyé</h3>
            <p style="color: var(--text-secondary);">Merci ! Je vous répondrai dans les 24 heures.</p>
        </div>
    `;

    setTimeout(() => {
        form.innerHTML = originalContent;
        attachFormListener();
    }, 3000);
}

function attachFormListener() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', contactForm.onsubmit);
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* ============================================
   NAVBAR BACKGROUND ON SCROLL
   ============================================ */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

/* ============================================
   INTERSECTION OBSERVER POUR ANIMATIONS
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer tous les cards
document.querySelectorAll('.skill-category, .stat-card, .project-card, .education-card').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

/* ============================================
   DARK MODE TOGGLE (Optionnel)
   ============================================ */

// Décommenter pour ajouter un toggle dark mode
/*
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '🌙';
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: var(--primary);
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Charger les préférences dark mode
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '☀️';
}
*/

/* ============================================
   PARALLAX EFFECT SIMPLE
   ============================================ */

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        heroSection.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

/* ============================================
   ANALYTICS & TRACKING (Optionnel)
   ============================================ */

// Vous pouvez ajouter Google Analytics, Mixpanel, etc.
// Exemple avec Google Analytics:
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');

// Tracker les clics sur les projets
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        gtag('event', 'project_view', {
            'project_number': index + 1,
            'project_title': card.querySelector('.project-title').textContent
        });
    });
});
*/

/* ============================================
   PRINT FUNCTIONALITY
   ============================================ */

// Ajouter un bouton print si nécessaire
window.printPortfolio = function() {
    window.print();
};

/* ============================================
   ACCESSIBILITY
   ============================================ */

// Améliorer la navigation au clavier
document.querySelectorAll('a, button, input, textarea').forEach(element => {
    element.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && (element.tagName === 'A' || element.tagName === 'BUTTON')) {
            element.click();
        }
    });
});

/* ============================================
   CONSOLE MESSAGE
   ============================================ */

console.log(
    '%cBienvenue sur le portfolio d\'Élie',
    'font-size: 16px; font-weight: bold; color: #0066ff;'
);
console.log(
    '%cIngénieur en Systèmes, Réseaux & Sécurité',
    'font-size: 12px; color: #666;'
);
console.log(
    '%cSi vous êtes intéressé par une collaboration, contactez-moi !',
    'font-size: 12px; color: #999;'
);
