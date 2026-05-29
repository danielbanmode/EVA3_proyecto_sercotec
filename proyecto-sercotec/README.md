# Centro de Negocios Santiago de SERCOTEC - Landing Page

## 📋 Descripción del Proyecto

Landing page moderna y responsiva para el Centro de Negocios Santiago de SERCOTEC, desarrollada con React 18 y Vite. La aplicación presenta los servicios de asesoramiento empresarial, capacitación, financiamiento e innovación con una interfaz intuitiva y accesible.

**Cliente:** Centro de Negocios Santiago de SERCOTEC  
**Tecnología:** React 18 + Vite  
**Estado:**  Completado  
**Última actualización:** Mayo 27, 2026

---

##  Características Principales

###  Funcionalidades Implementadas

- **Landing Page Completa**: Secciones de inicio, nosotros, servicios, testimonios, FAQs y contacto
- **Componentes Reutilizables**: ServiceCard, TestimonialsCarousel, ContactForm
- **Datos Dinámicos**: Servicios, testimonios y FAQs cargados desde JSON (API ready)
- **Carrusel de Testimonios**: Auto-rotativo con navegación manual
- **Formulario de Contacto**: Con validación avanzada de email (regex) y seguridad anti-bots
- **Diseño Responsive**: Adaptable a mobile (768px breakpoint) y escritorio
- **Navegación Interactiva**: Menú hamburguesa, smooth scroll, rutas dinámicas
- **Paleta SERCOTEC**: Colores institucionales (azul #001a4d, rojo #e63946)
- **Efectos Visuales**: Gradientes, animaciones, transiciones suaves (cubic-bezier)
- **Accesibilidad WCAG 2.1**: Etiquetas semánticas, aria-labels, contraste de colores

---

##  Estructura del Proyecto

```
proyecto-sercotec/
├── public/
│   ├── images/
│   │   ├── asesoramiento.png
│   │   ├── capacitacion.png
│   │   ├── diagnostico.png
│   │   ├── financiamiento.png
│   │   ├── innovacion.png
│   │   └── redes.png
│   └── data/
│       ├── servicios.json
│       ├── testimonios.json
│       ├── faqs.json
│       └── about.json
├── src/
│   ├── assets/
│   │   └── logo.jpg
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Header/
│   │   ├── ServiceCard/
│   │   ├── TestimonialsCarousel/
│   │   ├── ContactForm/
│   │   └── Footer/
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Contacto.jsx
│   ├── api/
│   │   └── services.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

##  Instalación y Uso

### Requisitos Previos
- Node.js v18+
- npm v9+

### Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

##  Dependencias

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.x",
  "react-hook-form": "^7.x",
  "react-icons": "^4.x"
}
```

---

##  Guía de Componentes

### ServiceCard
Componente reutilizable para servicios con imagen, título, descripción y botón de contacto.

### TestimonialsCarousel
Carrusel auto-rotativo con navegación manual y indicadores.

### ContactForm
Formulario con validación avanzada de email (regex), campos requeridos, y protección anti-bots (honeypot field).

---

##  Paleta de Colores SERCOTEC

```css
--color-primary: #001a4d;      /* Azul oscuro */
--color-secondary: #3d52a0;    /* Púrpura-azul */
--color-accent: #e63946;       /* Rojo */
--color-bg: #ffffff;           /* Blanco */
--color-bg-light: #f8f9fa;     /* Gris claro */
```

---

##  Seguridad Implementada

✅ Validación de email con regex  
✅ Campos requeridos validados  
✅ Honeypot field (protección anti-bots)  
✅ Rate limiting (máx 1 envío por 10s)  
✅ Sanitización de datos  
✅ CORS ready para backend  

---

##  Consumo de API/JSON

Todos los datos se cargan dinámicamente desde `/public/data/`:

```javascript
// src/api/services.js
export const getServicios = async () => { }
export const getTestimonios = async () => { }
export const getFaqs = async () => { }
export const sendContacto = async (data) => { }
```

---

##  Responsive Design

- **Mobile:** Stack vertical, menú hamburguesa (< 768px)
- **Escritorio:** Grid layout, menú horizontal (≥ 768px)

---

##  Mejores Prácticas

✅ Componentes reutilizables  
✅ Separación de responsabilidades  
✅ Hooks de React (useState, useEffect)  
✅ CSS Variables centralizadas  
✅ Animaciones smooth  
✅ WCAG 2.1 Accesibilidad  
✅ Validación avanzada  

---

##  Contacto

**Centro de Negocios Santiago de SERCOTEC**  
📍 Manuel Rodríguez Sur 749, Santiago  
📧 centro.santiago@centrossercotec.cl

---

**Versión:** 1.0.0 | **Estado:** ✅ Producción | **Última actualización:** 27/05/2026
