document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const articleCards = document.querySelectorAll('.article-card');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const modalClose = document.querySelector('.modal-close');
    const categoryCards = document.querySelectorAll('.category-card');
    const articlesGrid = document.querySelector('.articles-grid');

    // Función para abrir el modal con el contenido del artículo
    const openArticleModal = (article) => {
        const title = article.querySelector('h3').textContent;
        const category = article.querySelector('.article-category').textContent;
        const content = article.getAttribute('data-content');

        modalContent.innerHTML = `
            <h2>${title}</h2>
            <span class="article-category">${category}</span>
            <div class="article-full-content">
                ${content}
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Inicializar Prism.js si está disponible
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
    };

    // Función para cerrar el modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Event Listeners
    articleCards.forEach(card => {
        card.addEventListener('click', () => openArticleModal(card));
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
            const categoryType = category.getAttribute('data-category');
            
            articleCards.forEach(article => {
                const articleCategory = article.getAttribute('data-category');
                
                if (categoryType === 'all' || articleCategory === categoryType) {
                    article.style.display = '';
                } else {
                    article.style.display = 'none';
                }
            });

            // Actualizar clases activas
            categoryCards.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');
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
    animateOnScroll(); // Llamada inicial para elementos visibles
}); 