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