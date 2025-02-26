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

    // Datos de los artículos
    const articlesData = {
        'zero-trust': {
            title: 'Implementando Zero Trust en la Nube',
            category: 'Cloud Security',
            level: 'Avanzado',
            readTime: '20 min',
            content: document.getElementById('article-zero-trust').innerHTML
        },
        'trading-algorithms': {
            title: 'Algoritmos de Trading con Python: Una Guía Completa',
            category: 'Trading & ML',
            level: 'Avanzado',
            readTime: '45 min',
            content: document.getElementById('trading_article_template').innerHTML
        },
        'cloud-security': {
            title: 'Fundamentos de Seguridad en la Nube',
            category: 'Cloud Security',
            level: 'Básico',
            readTime: '15 min',
            content: document.getElementById('article-cloud-security').innerHTML
        }
    };

    // Función para abrir el modal con el contenido del artículo
    const openArticleModal = (articleId) => {
        const article = articlesData[articleId];
        if (!article) return;

        modalContent.innerHTML = `
            <div class="article-header">
                <h2>${article.title}</h2>
                <div class="article-meta">
                    <span class="article-category">${article.category}</span>
                    <span><i class="far fa-clock"></i> ${article.readTime}</span>
                    <span><i class="fas fa-book-reader"></i> Nivel: ${article.level}</span>
                </div>
            </div>
            <div class="article-full-content">
                ${article.content}
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Inicializar Prism.js para resaltado de código
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }

        // Agregar a historial de lectura
        addToReadingHistory(articleId);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Función para filtrar artículos
    const filterArticles = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedLevel = filterSelect.value;
        const selectedCategory = document.querySelector('.category-card.active')?.dataset.category;

        articleCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const category = card.querySelector('.article-category').textContent;
            const level = card.querySelector('.article-meta').textContent.includes(selectedLevel);
            
            const matchesSearch = title.includes(searchTerm);
            const matchesLevel = selectedLevel === 'all' || level;
            const matchesCategory = !selectedCategory || selectedCategory === 'all' || 
                                  category.toLowerCase().includes(selectedCategory);

            card.style.display = (matchesSearch && matchesLevel && matchesCategory) ? '' : 'none';
        });
    };

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
            const article = articlesData[id];
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
            openArticleModal(articleId);
        });
    });

    modalClose?.addEventListener('click', closeModal);

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
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
    searchInput?.addEventListener('input', filterArticles);
    filterSelect?.addEventListener('change', filterArticles);

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

    // Inicialización
    updateReadingHistory();
}); 