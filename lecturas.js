document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const articleCards = document.querySelectorAll('.article-card');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const modalClose = document.querySelector('.close-modal');
    const categoryCards = document.querySelectorAll('.category-card');
    const articlesGrid = document.querySelector('.articles-grid');
    const searchInput = document.querySelector('#searchArticles');
    const filterSelect = document.querySelector('#filterLevel');
    const timeFilter = document.querySelector('#filterTime');
    const categoryPills = document.querySelectorAll('.category-pill');
    const readingCards = document.querySelectorAll('.reading-card');

    // Datos de los artículos
    const articlesData = [
        {
            id: 'zero-trust',
            title: 'Implementando Zero Trust en la Nube',
            description: 'Una guía completa sobre la implementación de arquitectura Zero Trust en entornos cloud.',
            image: 'images/readings/zero-trust.jpg',
            readingTime: '20 min',
            level: 'Avanzado',
            category: 'Cloud Security',
            template: 'article-zero-trust'
        },
        {
            id: 'cloud-security',
            title: 'Fundamentos de Seguridad en la Nube',
            description: 'Conceptos fundamentales y mejores prácticas para asegurar infraestructuras cloud.',
            image: 'images/readings/cloud-security.jpg',
            readingTime: '15 min',
            level: 'Básico',
            category: 'Cloud Security',
            template: 'article-cloud-security'
        },
        {
            id: 'trading-algorithms',
            title: 'Algoritmos de Trading con Python',
            description: 'Desarrollo de estrategias automatizadas de trading utilizando Python y APIs financieras.',
            image: 'images/readings/trading.jpg',
            readingTime: '45 min',
            level: 'Avanzado',
            category: 'Desarrollo',
            template: 'trading_article_template'
        },
        {
            id: 'microservices',
            title: 'Arquitectura de Microservicios con Node.js',
            description: 'Guía práctica para diseñar, implementar y desplegar una arquitectura de microservicios escalable.',
            image: 'images/readings/microservices.jpg',
            readingTime: '30 min',
            level: 'Intermedio',
            category: 'Desarrollo',
            template: 'article-microservices'
        },
        {
            id: 'ci-cd',
            title: 'Implementando CI/CD con GitHub Actions',
            description: 'Tutorial paso a paso para configurar pipelines de integración y despliegue continuo usando GitHub Actions.',
            image: 'images/readings/ci-cd.jpg',
            readingTime: '25 min',
            level: 'Intermedio',
            category: 'DevOps',
            template: 'article-ci-cd'
        }
    ];

    // Estado de los filtros
    let activeFilters = {
        search: '',
        level: 'all',
        time: 'all',
        category: 'all'
    };

    // Función para mostrar un artículo
    window.showArticle = function(articleId) {
        const template = document.getElementById(articleId === 'trading-algorithms' ? 'trading_article_template' : `article-${articleId}`);
        if (!template) {
            console.error('Template no encontrado:', articleId);
            return;
        }

        const modalContent = document.querySelector('#articleModal .modal-content');
        const articleContent = document.getElementById('articleContent');
        
        // Limpiar contenido anterior
        articleContent.innerHTML = '';
        
        // Clonar y agregar el contenido del template
        articleContent.appendChild(template.content.cloneNode(true));
        
        // Activar resaltado de sintaxis
        if (window.Prism) {
            Prism.highlightAll();
        }
        
        // Mostrar el modal
        const modal = document.getElementById('articleModal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    // Cerrar el modal cuando se hace clic en la X
    document.querySelector('.close').addEventListener('click', () => {
        const modal = document.getElementById('articleModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Cerrar el modal cuando se hace clic fuera del contenido
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('articleModal');
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Cerrar el modal con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const modal = document.getElementById('articleModal');
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Función para filtrar artículos
    function filterArticles() {
        readingCards.forEach(card => {
            let shouldShow = true;

            // Filtro de búsqueda
            if (activeFilters.search) {
                const title = card.querySelector('.reading-title').textContent.toLowerCase();
                const description = card.querySelector('.reading-description').textContent.toLowerCase();
                const searchTerm = activeFilters.search.toLowerCase();
                shouldShow = shouldShow && (title.includes(searchTerm) || description.includes(searchTerm));
            }

            // Filtro de nivel
            if (activeFilters.level !== 'all') {
                const cardLevel = card.getAttribute('data-level');
                shouldShow = shouldShow && cardLevel === activeFilters.level;
            }

            // Filtro de tiempo
            if (activeFilters.time !== 'all') {
                const cardTime = parseInt(card.getAttribute('data-time'));
                switch (activeFilters.time) {
                    case 'short':
                        shouldShow = shouldShow && cardTime < 15;
                        break;
                    case 'medium':
                        shouldShow = shouldShow && cardTime >= 15 && cardTime <= 30;
                        break;
                    case 'long':
                        shouldShow = shouldShow && cardTime > 30;
                        break;
                }
            }

            // Filtro de categoría
            if (activeFilters.category !== 'all') {
                const cardCategory = card.getAttribute('data-category');
                shouldShow = shouldShow && cardCategory === activeFilters.category;
            }

            // Mostrar u ocultar la tarjeta
            card.style.display = shouldShow ? 'block' : 'none';
        });

        // Animación suave para las tarjetas visibles
        document.querySelectorAll('.reading-card[style="display: block"]').forEach((card, index) => {
            card.style.animation = `fadeIn 0.3s ease forwards ${index * 0.1}s`;
        });
    }

    // Función para agregar al historial de lectura
    const addToReadingHistory = (articleId) => {
        let history = JSON.parse(localStorage.getItem('readingHistory') || '[]');
        if (!history.includes(articleId)) {
            history.push(articleId);
            localStorage.setItem('readingHistory', JSON.stringify(history));
            updateReadingHistory();
        }
    };

    // Función para actualizar la visualización del historial
    const updateReadingHistory = () => {
        const historyContainer = document.querySelector('#readingHistory');
        if (!historyContainer) return;

        const history = JSON.parse(localStorage.getItem('readingHistory') || '[]');
        historyContainer.innerHTML = history.length ? history.map(id => {
            const article = articlesData.find(article => article.id === id);
            return `
                <div class="history-item">
                    <h4>${article.title}</h4>
                    <span>${article.category}</span>
                </div>
            `;
        }).join('') : '<p>No hay artículos leídos recientemente</p>';
    };

    // Event Listeners
    articleCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const articleId = e.currentTarget.dataset.article;
            showArticle(articleId);
        });
    });

    modalClose?.addEventListener('click', () => {
        document.getElementById('articleModal').style.display = 'none';
    });

    // Filtrado por categorías
    categoryCards.forEach(category => {
        category.addEventListener('click', () => {
            categoryCards.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');
            filterArticles();
        });
    });

    // Búsqueda y filtros
    searchInput?.addEventListener('input', (e) => {
        activeFilters.search = e.target.value;
        filterArticles();
    });

    filterSelect?.addEventListener('change', (e) => {
        activeFilters.level = e.target.value;
        filterArticles();
    });

    timeFilter?.addEventListener('change', (e) => {
        activeFilters.time = e.target.value;
        filterArticles();
    });

    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Actualizar UI
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Actualizar filtros
            activeFilters.category = pill.getAttribute('data-category');
            filterArticles();
        });
    });

    // Animaciones al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Animaciones para las tarjetas
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    readingCards.forEach(card => observer.observe(card));

    // Inicialización
    updateReadingHistory();
    filterArticles();
}); 