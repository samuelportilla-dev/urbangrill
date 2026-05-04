
# 🍝 La Nonna Rústica - Proyecto Premium (Next.js)

Este proyecto es una migración de alto nivel del sistema original de La Nonna Rústica a una arquitectura moderna con **Next.js 15**. Se ha mantenido la fidelidad visual del diseño original mientras se añaden efectos cinematográficos y una estructura escalable.

---

## 📂 Estructura del Proyecto

Para facilitar el mantenimiento, el proyecto se divide en las siguientes áreas clave:

### 🎨 Estilos (`src/styles/`)
Aquí es donde controlas toda la apariencia visual.
*   **`global.css`**: Variables de color, fuentes (Cinzel, Outfit) y resets básicos. Lo que cambies aquí afecta a toda la web.
*   **`home.css`**: **(IMPORTANTE)** Es el código base original (legacy). Contiene la estructura de las grillas de productos, tarjetas y botones clásicos.
*   **`menu.css`**: Contiene la lógica visual del carrito (Drawer), modales y efectos premium del proyecto base.
*   **`menu-premium.css`**: Estilos específicos de la versión Next.js: Carrusel hero, barra lateral inteligente (ScrollSpy) y animaciones de entrada.
*   **`reservas-premium.css` / `contacto-premium.css`**: Estilos dedicados exclusivamente a sus respectivas páginas para no sobrecargar el resto del sitio.

### 🏗️ Páginas y Componentes (`src/app/` y `src/components/`)
*   **`src/app/`**: Cada carpeta representa una pestaña del sitio (`/menu`, `/reservas`, `/contacto`).
*   **`GlobalNav.jsx`**: La barra de navegación superior.
*   **`Footer.jsx`**: El pie de página global.
*   **`Preloader.jsx`**: La animación de carga inicial.

### ⚙️ Lógica y Datos (`public/js/` y `public/data/`)
*   **`public/js/app.js`**: El cerebro del sitio. Maneja la carga de productos desde Google Sheets, la lógica del carrito, el cálculo de precios y el envío de pedidos a WhatsApp.
*   **`public/js/fx-*.js`**: Micro-scripts para efectos especiales (partículas, tilt de tarjetas, texto que se revuelve).

---

## 🛠️ Guía Rápida para Cambios

| ¿Qué quieres cambiar? | ¿Dónde ir? |
| :--- | :--- |
| **Colores globales (Rojo, Dorado)** | `src/styles/global.css` (Sección `:root`) |
| **Precios o nombre de productos** | En tu Excel de Google Sheets sincronizado. |
| **Diseño de las tarjetas del menú** | `src/styles/home.css` (Clase `.card-producto`) |
| **Espacios en los modales de productos** | `src/styles/menu-premium.css` (Al final del archivo) |
| **Efectos de la barra de navegación** | `src/styles/nav.css` o `GlobalNav.jsx` |
| **Teléfono de WhatsApp** | `public/js/app.js` (RESTAURANT_CONFIG) |

---

## 🚀 Comandos Útiles
*   `npm run dev`: Inicia el servidor de desarrollo en `localhost:3000`.
*   `npm run build`: Genera la versión optimizada para producción.

---
*Desarrollado con ❤️ para La Nonna Rústica.*
