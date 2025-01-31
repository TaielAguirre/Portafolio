// Manejador de modales para proyectos
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close-modal');
    
    // Datos de los proyectos
    const projectsData = {
        electroprimaapp: {
            title: 'ElectroPrima App',
            description: `
                <h3>Sistema de Gestión Integral para ElectroPrima</h3>
                <p>Aplicación web completa para la gestión de una empresa de electrodomésticos, incluyendo:</p>
                <ul>
                    <li>Sistema de gestión de pedidos y ventas</li>
                    <li>Control de inventario en tiempo real</li>
                    <li>Seguimiento de servicio técnico</li>
                    <li>Generación de reportes y estadísticas</li>
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
                            <img src="images/electroprimaapp/pedidos.jpg" alt="Sistema de Pedidos">
                            <p>Gestión de Pedidos</p>
                        </div>
                        <div class="step">
                            <img src="images/electroprimaapp/inventario.jpg" alt="Control de Inventario">
                            <p>Control de Inventario</p>
                        </div>
                        <div class="step">
                            <img src="images/electroprimaapp/ventas.jpg" alt="Sistema de Ventas">
                            <p>Sistema de Ventas</p>
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
                    <li>Interfaz intuitiva de creación</li>
                    <li>Cálculos automáticos de costos</li>
                    <li>Exportación a PDF personalizado</li>
                    <li>Historial y seguimiento de presupuestos</li>
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
                            <img src="images/presupuestador/dashboard.jpg" alt="Panel Principal">
                            <p>Panel de Control</p>
                        </div>
                        <div class="step">
                            <img src="images/presupuestador/nuevo.jpg" alt="Nuevo Presupuesto">
                            <p>Creación de Presupuestos</p>
                        </div>
                        <div class="step">
                            <img src="images/presupuestador/preview.jpg" alt="Vista Previa">
                            <p>Vista Previa PDF</p>
                        </div>
                    </div>
                </div>
            `
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
                    <div class="project-gallery">
                        ${project.images.map(img => `
                            <img src="${img}" alt="${project.title}" />
                        `).join('')}
                    </div>
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