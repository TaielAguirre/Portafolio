# 🚀 Elevate Orbit - Portfolio de Taiel Aguirre

Portfolio profesional moderno y responsive desarrollado con HTML5, CSS3 y JavaScript vanilla. Diseñado para mostrar mis habilidades como Full-Stack Developer y E-commerce Specialist bajo la marca **Elevate Orbit**.

## ✨ Características

### 🎨 Diseño Moderno
- **Diseño responsive** optimizado para todos los dispositivos
- **Tema claro/oscuro** con persistencia en localStorage
- **Animaciones suaves** y efectos visuales profesionales
- **Tipografía moderna** con Inter y JetBrains Mono
- **Paleta de colores profesional** con gradientes

### 🛠️ Tecnologías Utilizadas
- **HTML5** semántico y accesible
- **CSS3** con variables CSS y Grid/Flexbox
- **JavaScript ES6+** con clases y módulos
- **Font Awesome** para iconografía
- **Google Fonts** para tipografía

### 📱 Funcionalidades
- **Navegación suave** entre secciones
- **Filtros de proyectos** por categoría
- **Formulario de contacto** funcional
- **Animaciones de scroll** con Intersection Observer
- **Barras de habilidades** animadas
- **Efecto de partículas** en el hero
- **Modo oscuro/claro** con transiciones

### 🎯 Secciones del Portfolio

1. **Hero Section**
   - Presentación personal
   - Estadísticas destacadas
   - Imagen profesional
   - Efecto de partículas

2. **Sobre Mí**
   - Historia profesional
   - Características destacadas
   - Certificaciones

3. **Habilidades Técnicas**
   - Categorías organizadas
   - Barras de progreso animadas
   - Tecnologías actualizadas

4. **Proyectos Destacados**
   - Filtros por categoría
   - Cards interactivas
   - Enlaces a código y demo

5. **Experiencia Profesional**
   - Timeline interactivo
   - Detalles de cada posición
   - Logros destacados

6. **Contacto**
   - Información de contacto
   - Formulario funcional
   - Enlaces sociales

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno
- Servidor web local (opcional)

### Instalación
1. Clona el repositorio:
```bash
git clone https://github.com/TaielAguirre/Portafolio.git
cd Portafolio
```

2. Abre `index.html` en tu navegador o usa un servidor local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

### Personalización

#### 1. Información Personal
Edita el archivo `config.js` para actualizar:
- Información de contacto
- URLs de proyectos
- Configuraciones de SEO

#### 2. Proyectos
Modifica `projects.json` para agregar/editar proyectos:
```json
{
  "id": "mi-proyecto",
  "title": "Mi Proyecto",
  "category": ["fullstack", "ecommerce"],
  "featured": true,
  "mainImage": "images/projects/mi-proyecto/main.jpg",
  "description": "Descripción del proyecto",
  "technologies": ["React", "Node.js", "MongoDB"],
  "githubUrl": "https://github.com/usuario/repo",
  "liveUrl": "https://mi-proyecto.com"
}
```

#### 3. Estilos
Personaliza los colores en `styles.css`:
```css
:root {
    --primary: #1e3c72;
    --secondary: #06b6d4;
    --accent: #f59e0b;
    /* ... más variables */
}
```

## 📁 Estructura del Proyecto

```
Portafolio/
├── index.html              # Página principal
├── styles.css              # Estilos principales
├── scripts.js              # JavaScript principal
├── project-loader.js       # Cargador de proyectos
├── projects.json           # Datos de proyectos
├── config.js               # Configuración
├── favicon.svg             # Favicon
├── README.md               # Documentación
├── images/                 # Imágenes del portfolio
│   ├── projects/           # Imágenes de proyectos
│   └── og-image.jpg        # Imagen para redes sociales
└── admin/                  # Panel administrativo (opcional)
```

## 🎨 Personalización Avanzada

### Agregar Nueva Sección
1. Agrega el HTML en `index.html`
2. Agrega los estilos en `styles.css`
3. Actualiza la navegación en `scripts.js`

### Modificar Animaciones
Edita las configuraciones en `config.js`:
```javascript
ANIMATIONS: {
    enableScrollAnimations: true,
    enableParticleEffect: true,
    animationDuration: 300,
    staggerDelay: 100
}
```

### Integrar Formulario de Contacto
1. Configura un servicio como Formspree o Netlify Forms
2. Actualiza la URL en `config.js`
3. Modifica el método `simulateFormSubmission` en `scripts.js`

## 🔧 Optimizaciones

### Performance
- **Lazy loading** de imágenes
- **Minificación** de CSS/JS
- **Compresión** de imágenes
- **Service Worker** para cache

### SEO
- **Meta tags** optimizados
- **Schema.org** markup
- **Open Graph** tags
- **Sitemap** generado

### Accesibilidad
- **ARIA labels** apropiados
- **Navegación por teclado**
- **Contraste** de colores
- **Alt text** en imágenes

## 📱 Responsive Design

El portfolio está optimizado para:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🌐 Despliegue

### GitHub Pages
1. Sube el código a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. El sitio estará disponible en `https://usuario.github.io/repositorio`

### Netlify
1. Conecta tu repositorio de GitHub
2. Configura el build command (opcional)
3. El sitio se desplegará automáticamente

### Vercel
1. Importa el proyecto desde GitHub
2. Configura las variables de entorno
3. Despliega con un clic

## 📊 Métricas y Analytics

Para agregar analytics:
1. Configura Google Analytics o similar
2. Actualiza `enableAnalytics: true` en `config.js`
3. Agrega el código de tracking en `index.html`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Marca**: Elevate Orbit
- **Email**: taielaguirr@gmail.com
- **LinkedIn**: [linkedin.com/in/taiel-aguirre](https://linkedin.com/in/taiel-aguirre)
- **GitHub**: [github.com/TaielAguirre](https://github.com/TaielAguirre)
- **Portfolio**: [taielaguirre.github.io/Portafolio](https://taielaguirre.github.io/Portafolio)

---

⭐ Si te gusta este portfolio, ¡dale una estrella al repositorio!