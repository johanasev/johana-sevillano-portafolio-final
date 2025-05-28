# Portafolio de Johana Sevillano

¡Bienvenido(a) a mi portafolio! 
Este proyecto es una hoja de vida interactiva y dinámica construida con las últimas tecnologías web, diseñada para mostrar mi experiencia y habilidades adquiridas seún mi perfil.

## Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando el sigueinte stack de tecnologías:

* **Next.js 14+** (con App Router): Un framework de React para construir aplicaciones web de alto rendimiento.
* **React**: La librería principal para construir la interfaz de usuario.
* **TypeScript**: Un superset de JavaScript que añade tipado estático para un código más robusto y mantenible.
* **Tailwind CSS**: Un framework de CSS de primera utilidad que permite construir diseños personalizados rápidamente.
* **React Icons**: Una librería popular para integrar iconos fácilmente en proyectos React.
* **Git**: Sistema de control de versiones para la gestión del código fuente.
* **Vercel**: Plataforma para el despliegue y alojamiento del proyecto.

## Características Principales

El portafolio está estructurado en un diseño de tres columnas responsivo, ofreciendo una experiencia de usuario optimizada.

### Columna Izquierda (Sidebar Fija)

* **Información Personal**: Mi foto, nombre y título profesional.
* **Datos de Contacto**: Mi ciudad de residencia, teléfono, correo electrónico y enlace a mi perfil de GitHub.
* **Idiomas**: Listado de idiomas con su respectivo porcentaje de dominio a través de barras de progreso.
* **Lenguajes de Programación**: Listado de lenguajes de programación con su porcentaje de dominio.
* **Habilidades Extra**: Una sección destacada con habilidades blandas y duras, utilizando iconos personalizados en color de acento. 

### Contenido Central (Scroll Vertical)

* **Perfil**: Una sección de bienvenida con mi foto, un título principal y una descripción corta de mi perfil profesional.
    * **Botón "Saber más"**: Al hacer clic, se despliega un **modal interactivo** con información más detallada sobre mi trayectoria. 
* **Conocimientos**: Detalla mis habilidades técnicas y áreas de conocimiento, presentadas en tarjetas con título, descripción e íconos. El diseño respeta los "cards" mostrados en Figma. Los íconos pueden ser de Flaticon o Iconify. 
* **Educación**: Mi historial académico, mostrando institución, fechas, título y una breve descripción de los estudios. También sigue el diseño de "cards" del Figma. 
* **Portafolio**: Una galería de mis proyectos más representativos. 
    * Cada proyecto incluye una imagen, título y descripción. 
    * Cada tarjeta de proyecto cuenta con un botón "Saber más" que abre un **modal** con información detallada y enlaces (se recomienda a GitHub u otras plataformas).
    * Las tarjetas de esta sección respetan el diseño de Figma.
* **Footer**: Un pie de página que incluye información de copyright.

### Columna Derecha (Sidebar Fija)

* **Enlaces a Redes Sociales**: Un listado de íconos que redirigen directamente a mis perfiles en redes sociales (mínimo GitHub y LinkedIn). 

## Diseño y Responsividad

El proyecto está basado en un diseño de Figma y se ha prestado atención a la responsividad, asegurando que la interfaz se adapte y funcione correctamente en diferentes tamaños de pantalla (móviles, tabletas y escritorios).  Los colores y la fuente utilizados son personalizables.

## 📂 Estructura del Proyecto

La estructura del proyecto sigue las convenciones de Next.js con el App Router y una organización modular de componentes:
```bash

johana-sevillano-portafolio/
├── public/
│   ├── johana.jpg           # Foto de perfil
│   ├── icons/               # Iconos SVG para la sección de Conocimientos
│   │   ├── data-analysis.svg
│   │   ├── graphic-design.svg
│   │   └── ...
│   └── proyectos/            # Imágenes para la sección de Portafolio
│       ├── powerbi.jpg
│       ├── catalogo.jpg
│       └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal de 3 columnas (RootLayout)
│   │   ├── page.tsx         # Página principal con las secciones centrales
│   │   └── globals.css      # Estilos globales y directivas de Tailwind
│   ├── components/
│   │   └── Sidebar/         # Componentes internos de la Sidebar izquierda
│   │       ├── Sidebar.tsx
│   │       ├── InfoPersonal.tsx
│   │       ├── DatosContacto.tsx
│   │       ├── Idiomas.tsx
│   │       ├── Lenguajes.tsx
│   │       └── Habilidades.tsx
│   └── sections/            # Componentes de las secciones de la columna central
│       ├── Perfil/Perfil.tsx
│       ├── Conocimientos/Conocimientos.tsx
│       ├── Educacion/Educacion.tsx
│       ├── Portafolio/Portafolio.tsx
│       └── Footer/Footer.tsx
├── tailwind.config.ts       # Configuración de Tailwind CSS
├── tsconfig.json            # Configuración de TypeScript
└── package.json
```

## Atomic Design

* __Átomos__:  
Iconos, botones ("Saber más"), campos de texto, imágenes, barras de progreso (en Idiomas y Lenguajes).

* __Moléculas__:  
Cada elemento de DatosContacto (ícono + texto), cada li de Idiomas o Lenguajes (texto + barra de progreso), cada li de Habilidades Extra (ícono + texto), cada "card" de 
Conocimientos (ícono + título + descripción), y cada "card" de Portafolio (imagen + título + descripción + botón).

* __Organismos__:  
Componentes como InfoPersonal, DatosContacto, Idiomas, Lenguajes, Habilidades en la sidebar. Y las secciones centrales como Perfil, Conocimientos, Educacion, Portafolio, Footer.

* __Plantilla__:  
El RootLayout (src/app/layout.tsx) que define la estructura general de tres columnas es un ejemplo de plantilla.

* __Página__:  
El src/app/page.tsx que ensambla todos los organismos de la columna central para formar la página final.
Este enfoque de diseño modular y la reutilización de componentes son características clave del Atomic Design.

## Despliegue
Puedes ver la versión en línea aquí:
➡️ [https://johana-sevillano.vercel.app](https://johana-sevillano-portafolio.vercel.app/) ← (Deloy en Vercel)

## Desarrollado por

**Johana Sevillano**
* [GitHub](https://github.com/johanasev)
* [LinkedIn](https://www.linkedin.com/in/johanasevillano/)


