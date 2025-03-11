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