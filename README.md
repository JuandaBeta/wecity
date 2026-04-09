# 🏙️ WECITY — Landing Page de Ciudad Inteligente

Sitio web de aterrizaje para **WECITY**, una plataforma de ciudades inteligentes enfocada en la co-creación de soluciones urbanas sostenibles. Desarrollado con **Astro 4 + React**, estética oscura, sistema de internacionalización (EN/ES) y componentes modulares para presentar proyectos, keynotes, stakeholders y aliados estratégicos.

🌐 **Demo en vivo:** [https://69c44a787524ab9231137b61--resonant-sorbet-377f1f.netlify.app](https://69c44a787524ab9231137b61--resonant-sorbet-377f1f.netlify.app)

---

## 🚀 Stack Tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| [Astro](https://astro.build/) | ^4.6.0 | Framework principal (SSG) |
| [React](https://react.dev/) | ^18.3.0 | Componentes interactivos |
| [@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/) | ^3.1.0 | Integración React en Astro |
| TypeScript | ^5.4.0 | Tipado estático |
| CSS Custom Properties | — | Sistema de diseño y theming |

---

## 📁 Estructura del Proyecto

```
wecity/
├── public/
│   └── logos/                   # Logos de aliados (.webp)
├── src/
│   ├── assets/
│   │   └── images/projects/     # Imágenes de proyectos (.avif)
│   ├── components/
│   │   ├── About.astro
│   │   ├── Approach.astro
│   │   ├── Contact.astro
│   │   ├── ContactForm.tsx      # Formulario interactivo (React)
│   │   ├── CTA.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Keynotes.astro
│   │   ├── Navbar.astro
│   │   ├── Partners.astro
│   │   ├── Projects.astro
│   │   ├── Stakeholders.astro
│   │   └── Stats.astro
│   ├── data/
│   │   └── content.ts           # Datos de proyectos, keynotes, stakeholders
│   ├── pages/
│   │   └── index.astro          # Página principal con sistema i18n
│   └── styles/
│       └── global.css           # Variables CSS y estilos globales
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🌍 Sistema de Internacionalización (i18n)

El proyecto implementa un sistema de traducciones centralizado directamente en `index.astro`. Los textos de toda la interfaz están definidos como un objeto `translations` con soporte para **inglés (EN)** y **español (ES)**, controlado mediante el atributo `data-lang` en el `<html>`.

Las claves cubren todos los componentes: navbar, hero, secciones, formulario de contacto y footer.

---

## ⚙️ Instalación y desarrollo local

### Prerrequisitos

- Node.js `>= 18`
- npm `>= 9`

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/wecity.git
cd wecity

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor local con hot reload |
| `npm run build` | Build de producción en `/dist` |
| `npm run preview` | Vista previa del build |

---

## 🧩 Componentes principales

- **Hero** — Sección de apertura con mensaje principal
- **About** — Descripción de la iniciativa WECITY
- **Approach** — Metodología en layout zigzag
- **Keynotes** — Ponentes y conferenciantes
- **Stakeholders** — Ecosistema de actores clave
- **Projects** — Galería de proyectos con lightbox, likes y layout tipo revista
- **Partners** — Marquee animado de logos de aliados
- **Stats** — Cifras e indicadores de impacto
- **CTA** — Llamado a la acción
- **Contact** — Formulario de contacto (React + validación)
- **Footer** — Pie de página con créditos

---

## 🏗️ Build y despliegue

```bash
# Generar build estático
npm run build

# Los archivos quedan en /dist — listos para subir a cualquier hosting estático
```

El proyecto está desplegado en **Netlify** (static site). Compatible con Vercel, Cloudflare Pages o cualquier CDN que sirva archivos estáticos.

---

*Desarrollado con Astro 4 — Medellín, Colombia 🇨🇴*