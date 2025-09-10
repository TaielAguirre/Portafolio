// ===== PORTFOLIO SCRIPTS - MODERN JAVASCRIPT =====

class PortfolioApp {
    constructor() {
        this.init();
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.setupThemeToggle();
        this.setupSmoothScrolling();
        this.setupSkillBars();
        this.setupContactForm();
        this.setupParticleEffect();
    }

    init() {
        console.log('🚀 Portfolio App Initialized');
        this.loadTheme();
        this.setupNavigation();
    }

    // ===== THEME MANAGEMENT =====
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        document.documentElement.setAttribute('data-theme', currentTheme);
        this.updateThemeIcon(currentTheme);

        themeToggle?.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.updateThemeIcon(newTheme);
        });
    }

    updateThemeIcon(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        const icon = themeToggle?.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    // ===== NAVIGATION =====
    setupNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        navToggle?.addEventListener('click', () => {
            navMenu?.classList.toggle('active');
            navToggle?.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu?.classList.remove('active');
                navToggle?.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });

        this.setupActiveNavigation();
    }

    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    // ===== SMOOTH SCROLLING =====
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    setupIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    if (entry.target.classList.contains('skill-progress')) {
                        this.animateSkillBar(entry.target);
                    }
                    
                    if (entry.target.classList.contains('stat-number')) {
                        this.animateCounter(entry.target);
                    }
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll(
            '.section, .skill-category, .project-card, .timeline-item, .contact-card, .feature-item'
        );
        animatedElements.forEach(el => {
            el.classList.add('scroll-reveal');
            observer.observe(el);
        });

        const skillBars = document.querySelectorAll('.skill-progress');
        const counters = document.querySelectorAll('.stat-number');
        
        [...skillBars, ...counters].forEach(el => observer.observe(el));
    }

    // ===== SKILL BARS ANIMATION =====
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            bar.style.width = '0%';
        });
    }

    animateSkillBar(skillBar) {
        const targetWidth = skillBar.getAttribute('data-width');
        skillBar.style.width = targetWidth;
    }

    // ===== COUNTER ANIMATION =====
    animateCounter(counter) {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current) + suffix;
        }, 30);
    }

    // ===== PARTICLE EFFECT =====
    setupParticleEffect() {
        const particlesContainer = document.querySelector('.hero-particles');
        if (!particlesContainer) return;

        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(30, 60, 114, 0.3);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${5 + Math.random() * 10}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }

    // ===== CONTACT FORM =====
    setupContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            try {
                await this.simulateFormSubmission(data);
                this.showNotification('¡Mensaje enviado correctamente!', 'success');
                form.reset();
            } catch (error) {
                this.showNotification('Error al enviar el mensaje. Inténtalo de nuevo.', 'error');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    async simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) {
                    resolve(data);
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000);
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // ===== EVENT LISTENERS =====
    setupEventListeners() {
        window.addEventListener('scroll', this.throttle(() => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }
        }, 100));

        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const navMenu = document.getElementById('nav-menu');
                const navToggle = document.getElementById('nav-toggle');
                navMenu?.classList.remove('active');
                navToggle?.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    }

    handleResize() {
        const isMobile = window.innerWidth <= 768;
        const navMenu = document.getElementById('nav-menu');
        
        if (!isMobile && navMenu?.classList.contains('active')) {
            navMenu.classList.remove('active');
            document.getElementById('nav-toggle')?.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    }

    // ===== UTILITY FUNCTIONS =====
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    debounce(func, wait) {
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
}

// ===== PROJECT FILTER FUNCTIONALITY =====
class ProjectFilter {
    constructor() {
        this.projects = [];
        this.currentFilter = 'all';
        this.init();
    }

    async init() {
        await this.loadProjects();
        this.setupFilterButtons();
        this.renderProjects();
    }

    async loadProjects() {
        try {
            const response = await fetch('projects.json');
            const data = await response.json();
            this.projects = data.projects;
        } catch (error) {
            console.error('Error loading projects:', error);
            this.projects = [];
        }
    }

    setupFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.getAttribute('data-filter');
                this.renderProjects();
            });
        });
    }

    renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        const filteredProjects = this.currentFilter === 'all' 
            ? this.projects 
            : this.projects.filter(project => 
                project.category.includes(this.currentFilter)
            );

        projectsGrid.innerHTML = '';

        filteredProjects.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });

        const newCards = projectsGrid.querySelectorAll('.project-card');
        newCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-image-container">
                <img src="${project.mainImage}" alt="${project.title}" class="project-image" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY0NzQ4YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg=='">
            </div>
            <div class="project-content">
                <div class="project-category">${project.category[0]}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="project-link">
                        <i class="fab fa-github"></i>
                        <span>Código</span>
                    </a>` : ''}
                    ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Demo</span>
                    </a>` : ''}
                </div>
            </div>
        `;
        return card;
    }
}

// ===== INITIALIZE APP =====
document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp();
    const projectFilter = new ProjectFilter();
    document.body.classList.add('loaded');
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioApp, ProjectFilter };
}
