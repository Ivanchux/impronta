# Impronta Servicios Gráficos SL

> Proyecto de prácticas FCT · Grado Superior ASIR (Telemática) · CDMFp 2025–2026

**URL pública:** https://ivanchux.github.io/impronta/

---

## Descripción

Web corporativa completa para **Impronta Servicios Gráficos SL**, empresa ficticia basada en Aferta SG. Imprenta y servicios gráficos en Madrid orientada a empresas y autónomos, sin tirada mínima.

**Alumno:** Iván Brihuega Crespo  
**Empresa de prácticas:** Aferta SG  
**Módulo:** 0373 Lenguajes de Marcas y Sistemas de Gestión de Información

---

## Estructura del proyecto

```
impronta/
├── index.html              # Página principal (hero vídeo, servicios, testimonios)
├── servicios.html          # Catálogo de servicios con FAQ acordeón
├── nosotros.html           # Historia, equipo y valores
├── blog.html               # Listado de entradas del blog
├── post-papel.html         # Post: Guía de papeles de impresión
├── post-digital-offset.html # Post: Digital vs Offset
├── post-autonomos.html     # Post: Impresión para autónomos
├── contacto.html           # Formulario de contacto con validación
├── presupuesto.html        # Formulario multi-paso de presupuesto
├── tarjeta.html            # Generador de tarjetas de visita (html2canvas)
├── 404.html                # Página de error personalizada
├── Legal/
│   ├── aviso-legal.html    # LSSI art. 10
│   ├── privacidad.html     # RGPD / LOPDGDD
│   └── cookies.html        # Política de cookies (AEPD)
├── Imagenes/               # Fotografías generadas con IA (Ideogram)
├── Videos/                 # Vídeo de portada (hero)
├── estilos.css             # CSS modular: variables, reset, componentes, responsive
├── scripts.js              # JS vanilla: menú, dark mode, formularios, cookies, tarjeta
├── sitemap.xml             # Sitemap para motores de búsqueda
└── robots.txt              # Instrucciones para crawlers
```

---

## Tecnologías

| Capa | Tecnología |
|------|-----------|
| Maquetación | HTML5 semántico |
| Estilos | CSS puro (variables, Flexbox, Grid, media queries) |
| Comportamiento | JavaScript vanilla (ES5 compatible) |
| Fuentes | Google Fonts (Cormorant Garant + Jost) |
| Iconos | Lucide Icons (MIT) |
| Generador tarjetas | html2canvas |
| Despliegue | GitHub Pages (HTTPS automático, sin build) |

**Sin frameworks, sin dependencias de build** — el proyecto se sirve tal cual desde el repositorio.

---

## Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/Ivanchux/impronta.git
cd impronta

# Servir localmente (cualquiera de estas opciones):
python -m http.server 8000
# o
npx serve .
# o abrir index.html directamente en el navegador
```

---

## Despliegue en GitHub Pages

1. Subir archivos al repositorio: `git push origin main`
2. Ir a **Settings → Pages → Branch: main → Save**
3. La URL queda disponible en `https://ivanchux.github.io/impronta/` en menos de 1 minuto

---

## Características principales

- **14 páginas HTML** con navegación completa y enlazado interno
- **Diseño responsive mobile-first** — funciona desde 360px
- **Modo oscuro** — toggle con persistencia en localStorage
- **Formularios con validación** — contacto y presupuesto multi-paso (3 pasos)
- **Generador de tarjetas de visita** — 3 estilos, descarga PNG anverso + reverso
- **Blog estático** con 3 artículos originales (600-1000 palabras cada uno)
- **SEO on-page** — titles únicos, meta descriptions, Open Graph, sitemap
- **Accesibilidad WCAG 2.2 AA** — contraste, foco visible, aria-labels, labels en formularios
- **Páginas legales completas** — Aviso legal (LSSI), Privacidad (RGPD), Cookies (AEPD)
- **Banner de cookies** con consentimiento y persistencia

---

## Paleta de colores

| Color | HEX | Uso |
|-------|-----|-----|
| Azul oscuro | `#111d33` | Fondo nav, secciones destacadas |
| Azul medio | `#1B2A4A` | Color principal de texto y elementos |
| Oro | `#C9A84C` | Acentos, CTAs, hover states |
| Crema | `#F5F0E8` | Fondo general, secciones claras |

**Tipografías:** Cormorant Garant (títulos, display) · Jost (cuerpo, UI)

---

## Licencias y créditos

- **Imágenes:** generadas con Ideogram — uso libre para proyectos educativos
- **Iconos:** Lucide Icons — licencia MIT
- **Código:** proyecto educativo FCT, sin licencia comercial
