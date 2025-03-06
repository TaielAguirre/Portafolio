// Manejador de modales para proyectos
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close-modal');
    
    // Datos de los proyectos
    const projectsData = {
        'gestor-de-pedidos': {
            title: 'Gestor de Pedidos',
            description: `
                <h3>Sistema de Gestión de Pedidos</h3>
                <p>Aplicación web completa para la gestión de pedidos, incluyendo:</p>
                <ul>
                    <li>Creación y seguimiento de pedidos</li>
                    <li>Historial de pedidos realizados</li>
                    <li>Control de pedidos arribados</li>
                    <li>Sistema de respaldo de información</li>
                </ul>
                <div class="tech-stack">
                    <span>PHP</span>
                    <span>MySQL</span>
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>AJAX</span>
                </div>
                <div class="demo-guide">
                    <h4>Características Principales:</h4>
                    <div class="demo-steps">
                        <div class="step">
                            <img src="./images/gestor-de-pedidos/main.PNG" alt="Panel Principal" loading="lazy">
                            <p>Panel Principal</p>
                        </div>
                        <div class="step">
                            <img src="./images/gestor-de-pedidos/crear-pedido.PNG" alt="Crear Pedido" loading="lazy">
                            <p>Creación de Pedidos</p>
                        </div>
                        <div class="step">
                            <img src="./images/gestor-de-pedidos/pedidos-guardados.PNG" alt="Pedidos Guardados" loading="lazy">
                            <p>Pedidos Guardados</p>
                        </div>
                    </div>
                    <div class="demo-steps">
                        <div class="step">
                            <img src="./images/gestor-de-pedidos/pedidos-arribados.PNG" alt="Pedidos Arribados" loading="lazy">
                            <p>Pedidos Arribados</p>
                        </div>
                        <div class="step">
                            <img src="./images/gestor-de-pedidos/historial-de-pedidos.PNG" alt="Historial" loading="lazy">
                            <p>Historial de Pedidos</p>
                        </div>
                        <div class="step">
                            <img src="./images/gestor-de-pedidos/backup.PNG" alt="Sistema de Backup" loading="lazy">
                            <p>Sistema de Respaldo</p>
                        </div>
                    </div>
                </div>
            `
        },
        presupuestador: {
            title: 'Sistema Presupuestador',
            description: `
                <h3>Generador de Presupuestos Profesional</h3>
                <p>Sistema web para la creación y gestión de presupuestos, que incluye:</p>
                <ul>
                    <li>Gestión de productos y servicios</li>
                    <li>Administración de clientes</li>
                    <li>Configuración personalizada</li>
                    <li>Generación de presupuestos detallados</li>
                </ul>
                <div class="tech-stack">
                    <span>PHP</span>
                    <span>MySQL</span>
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>FPDF</span>
                </div>
                <div class="demo-guide">
                    <h4>Características Principales:</h4>
                    <div class="demo-steps">
                        <div class="step">
                            <img src="./images/presupuestador/main.PNG" alt="Panel Principal" loading="lazy">
                            <p>Panel de Control</p>
                        </div>
                        <div class="step">
                            <img src="./images/presupuestador/productos.PNG" alt="Gestión de Productos" loading="lazy">
                            <p>Catálogo de Productos</p>
                        </div>
                        <div class="step">
                            <img src="./images/presupuestador/productos1.PNG" alt="Detalles de Productos" loading="lazy">
                            <p>Detalles de Productos</p>
                        </div>
                    </div>
                    <div class="demo-steps">
                        <div class="step">
                            <img src="./images/presupuestador/clientes1.PNG" alt="Lista de Clientes" loading="lazy">
                            <p>Lista de Clientes</p>
                        </div>
                        <div class="step">
                            <img src="./images/presupuestador/clientes2.PNG" alt="Detalles de Cliente" loading="lazy">
                            <p>Detalles de Cliente</p>
                        </div>
                        <div class="step">
                            <img src="./images/presupuestador/config.PNG" alt="Configuración" loading="lazy">
                            <p>Configuración del Sistema</p>
                        </div>
                    </div>
                </div>
            `
        },
        'bot-cripto': {
            title: 'CryptoBot Pro',
            description: `
                <h3>🚀 Plataforma Profesional de Trading Automatizado</h3>
                <p>CryptoBot Pro es una solución avanzada de trading que combina análisis técnico, machine learning y automatización para el mercado de criptomonedas.</p>
                
                <h4>✨ Características Principales:</h4>
                <ul>
                    <li>Análisis técnico en tiempo real con múltiples indicadores (RSI, MACD, SMA)</li>
                    <li>Sistema de trading automatizado con estrategias personalizables</li>
                    <li>Gestión de portfolio y seguimiento de inversiones</li>
                    <li>Sistema de alertas por email y Telegram</li>
                    <li>Backtesting de estrategias</li>
                    <li>Dashboard interactivo con gráficos en tiempo real</li>
                </ul>

                <h4>🛠️ Tecnologías Utilizadas:</h4>
                <ul>
                    <li>Python (Backend y Análisis)</li>
                    <li>Streamlit (Frontend)</li>
                    <li>APIs de Exchange (Binance)</li>
                    <li>Machine Learning (Sklearn, TensorFlow)</li>
                    <li>Base de Datos (SQLite/PostgreSQL)</li>
                    <li>WebSockets para datos en tiempo real</li>
                </ul>

                <h4>📊 Resultados:</h4>
                <ul>
                    <li>Más de 1000 operaciones exitosas simuladas</li>
                    <li>Precisión promedio del 68% en señales de trading</li>
                    <li>Tiempo de respuesta < 100ms para análisis en tiempo real</li>
                    <li>Sistema de gestión de riesgo integrado</li>
                </ul>
            `,
            images: [
                './images/bot_cripto/dashboard.png',
                './images/bot_cripto/analysis.png',
                './images/bot_cripto/portfolio.png'
            ]
        }
    };

    // Abrir modal con detalles del proyecto
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.dataset.project;
            const project = projectsData[projectId];
            
            if (project) {
                modalContent.innerHTML = `
                    <h2>${project.title}</h2>
                    <div class="project-description">
                        ${project.description}
                    </div>
                `;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Sistema de demos
    const demoButtons = document.querySelectorAll('.btn-demo');
    let currentDemo = null;

    // Crear contenedor de demo
    const demoContainer = document.createElement('div');
    demoContainer.className = 'demo-container';
    demoContainer.innerHTML = `
        <div class="demo-frame">
            <div class="demo-header">
                <h3></h3>
                <div class="demo-controls">
                    <button class="demo-button refresh-demo">Reiniciar</button>
                    <button class="demo-button close-demo">Cerrar</button>
                </div>
            </div>
            <div class="loading"></div>
            <iframe style="width: 100%; height: calc(100% - 60px); border: none;"></iframe>
        </div>
    `;
    document.body.appendChild(demoContainer);

    const iframe = demoContainer.querySelector('iframe');
    const loading = demoContainer.querySelector('.loading');
    const demoTitle = demoContainer.querySelector('.demo-header h3');

    // Manejador de demos
    demoButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const demoUrl = this.href;
            
            Swal.fire({
                title: 'Acceso a Demo',
                html: `
                    <p>Esta demo requiere un servidor PHP y MySQL.</p>
                    <p>Puedes acceder a la demo en:</p>
                    <code>${demoUrl}</code>
                    <p class="mt-3">Credenciales de prueba:</p>
                    <p>Usuario: demo<br>Contraseña: demo123</p>
                `,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Ir a la Demo',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(demoUrl, '_blank');
                }
            });
        });
    });

    // Controles de demo
    demoContainer.querySelector('.close-demo').addEventListener('click', () => {
        demoContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
        iframe.src = 'about:blank';
    });

    demoContainer.querySelector('.refresh-demo').addEventListener('click', () => {
        loading.style.display = 'flex';
        iframe.style.display = 'none';
        iframe.src = iframe.src;
    });

    // Navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (demoContainer.style.display === 'block') {
                demoContainer.style.display = 'none';
                document.body.style.overflow = 'auto';
                iframe.src = 'about:blank';
            } else if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Lazy loading de imágenes
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}); 

// Agregar al final del archivo scripts.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value
    };

    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ahora mostraremos una alerta de éxito
    Swal.fire({
        icon: 'success',
        title: '¡Mensaje Enviado!',
        text: 'Gracias por contactarme. Te responderé pronto.',
        confirmButtonColor: '#6200EA'
    }).then(() => {
        this.reset();
    });
}); 

// Manejador de lecturas
document.addEventListener('DOMContentLoaded', function() {
    const readingModal = document.getElementById('articleModal');
    const readingContent = document.getElementById('articleContent');
    const closeReadingModal = readingModal.querySelector('.close-modal');

    // Abrir lectura
    document.querySelectorAll('[data-reading]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const readingId = this.dataset.reading;
            const template = document.getElementById(`reading-${readingId}`);
            
            if (template) {
                readingContent.innerHTML = template.innerHTML;
                readingModal.style.display = 'block';
                document.body.style.overflow = 'hidden';

                // Resaltar sintaxis de código si existe Prism.js
                if (window.Prism) {
                    Prism.highlightAll();
                }
            }
        });
    });

    // Cerrar lectura
    closeReadingModal.addEventListener('click', () => {
        readingModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Cerrar al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === readingModal) {
            readingModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && readingModal.style.display === 'block') {
            readingModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Manejador de proyectos
document.addEventListener('DOMContentLoaded', function() {
    const projectModal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const closeProjectModal = projectModal.querySelector('.close-modal');

    // Abrir proyecto
    document.querySelectorAll('[data-project]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.dataset.project;
            const template = document.getElementById(`project-${projectId}`);
            
            if (template) {
                modalContent.innerHTML = template.innerHTML;
                projectModal.style.display = 'block';
                document.body.style.overflow = 'hidden';

                // Resaltar sintaxis de código si existe Prism.js
                if (window.Prism) {
                    Prism.highlightAll();
                }
            }
        });
    });

    // Cerrar proyecto
    closeProjectModal.addEventListener('click', () => {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Cerrar al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.style.display === 'block') {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}); 

// Configuración de proyectos y sus imágenes
const projectImages = {
    'bot_cripto': [
        'images/bot_cripto/main.jpg',
        'images/bot_cripto/dashboard.jpg',
        'images/bot_cripto/trading.jpg',
        'images/bot_cripto/stats.jpg'
    ],
    'gestor-de-pedidos': [
        'images/gestor-de-pedidos/main.jpg',
        'images/gestor-de-pedidos/pedidos.jpg',
        'images/gestor-de-pedidos/clientes.jpg',
        'images/gestor-de-pedidos/reportes.jpg'
    ],
    'presupuestador': [
        'images/presupuestador/main.jpg',
        'images/presupuestador/nuevo.jpg',
        'images/presupuestador/lista.jpg',
        'images/presupuestador/detalles.jpg'
    ]
};

// Función para mostrar detalles del proyecto
function showProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    const gallery = document.getElementById('projectGallery');
    const images = projectImages[projectId];

    // Limpiar galería existente
    gallery.innerHTML = '';

    // Agregar imágenes al modal
    images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = 'Captura de pantalla del proyecto';
        img.onclick = () => openFullImage(imageSrc);
        gallery.appendChild(img);
    });

    // Mostrar modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevenir scroll
}

// Función para abrir imagen en tamaño completo
function openFullImage(imageSrc) {
    const fullImageModal = document.createElement('div');
    fullImageModal.className = 'modal';
    fullImageModal.style.display = 'block';
    fullImageModal.innerHTML = `
        <div class="modal-content" style="background: none; padding: 0;">
            <span class="close" onclick="closeFullImage(this)">&times;</span>
            <img src="${imageSrc}" style="width: 100%; height: auto; max-height: 90vh; object-fit: contain;">
        </div>
    `;
    document.body.appendChild(fullImageModal);
}

// Función para cerrar imagen en tamaño completo
function closeFullImage(closeButton) {
    closeButton.parentElement.parentElement.remove();
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const closeBtn = modal.querySelector('.close');

    // Cerrar con el botón X
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Cerrar al hacer click fuera del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
}); 

// Función para mostrar un artículo
function showArticle(articleId) {
    const modal = document.getElementById('articleModal');
    const content = document.getElementById('articleContent');
    const template = document.getElementById(`article-${articleId}`);

    if (template) {
        // Limpiar contenido anterior
        content.innerHTML = '';
        
        // Añadir animación de carga
        content.classList.add('loading');
        
        // Simular carga de contenido
        setTimeout(() => {
            // Quitar animación de carga
            content.classList.remove('loading');
            
            // Insertar contenido del artículo
            content.innerHTML = template.innerHTML;
            
            // Mostrar modal con animación
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
            
            document.body.style.overflow = 'hidden';
            
            // Calcular tiempo de lectura
            calculateReadingTime();
            
            // Añadir funcionalidad para copiar código
            setupCodeCopy();
            
            // Resaltar sintaxis de código si existe Prism.js
            if (window.Prism) {
                Prism.highlightAll();
            }
            
            // Registrar vista del artículo
            trackArticleView(articleId);
        }, 500);
    } else {
        console.error(`No se encontró el template para el artículo: ${articleId}`);
    }
}

// Función para cerrar el artículo
function closeArticle() {
    const modal = document.getElementById('articleModal');
    
    // Animar cierre
    modal.classList.remove('show');
    
    // Esperar a que termine la animación
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Calcular tiempo de lectura
function calculateReadingTime() {
    const articleContent = document.querySelector('#articleContent');
    if (!articleContent) return;
    
    // Contar palabras (aproximado)
    const text = articleContent.textContent || articleContent.innerText;
    const wordCount = text.split(/\s+/).length;
    
    // Calcular minutos (promedio 200 palabras por minuto)
    const minutes = Math.ceil(wordCount / 200);
    
    // Actualizar elemento de tiempo de lectura si existe
    const readingTimeElement = document.querySelector('.reading-time');
    if (readingTimeElement) {
        readingTimeElement.innerHTML = `<i class="far fa-clock"></i> ${minutes} min lectura`;
    }
}

// Configurar botones para copiar código
function setupCodeCopy() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        // Crear botón de copia
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-btn';
        copyButton.innerHTML = '<i class="far fa-copy"></i>';
        copyButton.title = 'Copiar código';
        
        // Añadir botón al bloque de código
        const pre = block.parentNode;
        pre.style.position = 'relative';
        pre.appendChild(copyButton);
        
        // Añadir evento de clic
        copyButton.addEventListener('click', () => {
            const code = block.textContent;
            navigator.clipboard.writeText(code).then(() => {
                // Cambiar ícono temporalmente para indicar éxito
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="far fa-copy"></i>';
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar:', err);
                copyButton.innerHTML = '<i class="fas fa-times"></i>';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="far fa-copy"></i>';
                }, 2000);
            });
        });
    });
}

// Registrar vista de artículo
function trackArticleView(articleId) {
    // Obtener historial de vistas del localStorage
    let viewedArticles = JSON.parse(localStorage.getItem('viewedArticles') || '[]');
    
    // Añadir artículo actual si no está ya
    if (!viewedArticles.includes(articleId)) {
        viewedArticles.push(articleId);
        // Limitar a los últimos 10 artículos
        if (viewedArticles.length > 10) {
            viewedArticles = viewedArticles.slice(-10);
        }
        localStorage.setItem('viewedArticles', JSON.stringify(viewedArticles));
    }
    
    // Actualizar contador de vistas (simulado)
    const viewCount = parseInt(localStorage.getItem(`article_${articleId}_views`) || '0');
    localStorage.setItem(`article_${articleId}_views`, viewCount + 1);
}

// Inicialización de los manejadores de eventos para artículos
document.addEventListener('DOMContentLoaded', function() {
    // Manejador para abrir artículos
    document.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const articleId = this.getAttribute('data-article');
            if (articleId) {
                showArticle(articleId);
            }
        });
    });

    // Manejador para cerrar el modal de artículos
    const modal = document.getElementById('articleModal');
    const closeBtn = modal.querySelector('.close-modal');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeArticle);
    }

    // Cerrar al hacer click fuera del modal
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeArticle();
        }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeArticle();
        }
    });
}); 

// Manejador de pestañas de certificaciones
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Quitar clase activa de todos los botones
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Añadir clase activa al botón actual
                button.classList.add('active');
                
                // Ocultar todos los contenidos
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Mostrar el contenido correspondiente
                const tabId = button.getAttribute('data-tab');
                document.getElementById(`${tabId}-tab`).classList.add('active');
            });
        });
    }
}); 

// Manejador del cambio de tema (oscuro/claro)
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        // Verificar si hay un tema guardado en localStorage
        const savedTheme = localStorage.getItem('theme');
        
        // Aplicar tema guardado o detectar preferencia del sistema
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateThemeIcon(savedTheme);
        } else {
            // Detectar preferencia del sistema
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
            
            if (prefersDarkScheme.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
                updateThemeIcon('dark');
            }
        }
        
        // Manejar clic en el botón de tema
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Cambiar tema
            document.documentElement.setAttribute('data-theme', newTheme);
            
            // Guardar preferencia
            localStorage.setItem('theme', newTheme);
            
            // Actualizar icono
            updateThemeIcon(newTheme);
        });
    }
});

// Función para actualizar el icono del botón de tema
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        if (theme === 'dark') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
} 

// Manejador del slider de testimonios
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonials-slider');
    
    if (slider) {
        const slides = slider.querySelectorAll('.testimonial-slide');
        const dotsContainer = document.querySelector('.testimonial-dots');
        const prevBtn = document.querySelector('.testimonial-prev');
        const nextBtn = document.querySelector('.testimonial-next');
        
        let currentSlide = 0;
        const slideCount = slides.length;
        
        // Crear puntos indicadores
        for (let i = 0; i < slideCount; i++) {
            const dot = document.createElement('span');
            dot.classList.add('testimonial-dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('data-slide', i);
            dotsContainer.appendChild(dot);
            
            // Evento de clic en el punto
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
        }
        
        // Función para ir a una diapositiva específica
        function goToSlide(index) {
            // Validar índice
            if (index < 0) index = slideCount - 1;
            if (index >= slideCount) index = 0;
            
            // Actualizar posición del slider
            slider.style.transform = `translateX(-${index * 100}%)`;
            
            // Actualizar puntos activos
            document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            // Actualizar índice actual
            currentSlide = index;
        }
        
        // Eventos de botones
        prevBtn.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
        });
        
        nextBtn.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
        });
        
        // Cambio automático cada 5 segundos
        let interval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
        
        // Detener cambio automático al pasar el mouse
        slider.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        
        // Reanudar cambio automático al quitar el mouse
        slider.addEventListener('mouseleave', () => {
            interval = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 5000);
        });
        
        // Soporte para gestos táctiles
        let touchStartX = 0;
        let touchEndX = 0;
        
        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            
            if (touchEndX < touchStartX - swipeThreshold) {
                // Deslizar a la izquierda
                goToSlide(currentSlide + 1);
            }
            
            if (touchEndX > touchStartX + swipeThreshold) {
                // Deslizar a la derecha
                goToSlide(currentSlide - 1);
            }
        }
    }
}); 

// Animación de contadores de estadísticas
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        // Función para animar contadores
        function animateCounters() {
            statNumbers.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // 2 segundos
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            });
        }
        
        // Observador de intersección para activar animación cuando sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        // Observar la sección de estadísticas
        const statsSection = document.getElementById('estadisticas');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }
}); 