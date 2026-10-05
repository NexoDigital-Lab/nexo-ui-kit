# Contribuir a Nexo UI Kit

Gracias por tu interés en mejorar Nexo UI Kit. Esta guía explica cómo colaborar y qué esperamos de cada contribución.

## Flujo de trabajo

1. Haz un **fork** del repositorio y clona tu copia.
2. Crea una **rama** desde `master` con un nombre descriptivo (`feat/…`, `fix/…`, `docs/…`).
3. Instala dependencias e inicia el entorno de desarrollo:

   ```bash
   npm install
   npm run dev
   ```

4. Implementa el cambio siguiendo las convenciones de abajo.
5. Verifica que la documentación compila:

   ```bash
   npm run build
   ```

6. Abre un **pull request** contra `master` usando la plantilla del repositorio.

## Comandos útiles

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala las dependencias del proyecto. |
| `npm run dev` | Inicia el servidor de desarrollo de Astro. |
| `npm run build` | Genera el sitio estático de documentación. |
| `npm run preview` | Sirve el build local para revisión. |

## Convenciones de código

- **Componentes Astro con estilos acotados**: cada componente vive en `src/components/*.astro` y define sus estilos en un bloque `<style>` propio.
- **Tokens de diseño**: usa las propiedades CSS `--nx-*` de `src/styles/tokens.css` (colores, espaciado, radios, tipografía). Evita valores hardcodeados.
- **Copy en español neutro**: toda la interfaz de usuario y la documentación se escriben en español profesional y neutro. Identificadores, nombres de props, clases CSS y fragmentos de código permanecen en inglés.
- **Sin dependencias nuevas**: el kit es deliberadamente ligero. Agregar dependencias de npm requiere justificación previa en el PR.
- **Accesibilidad**: los elementos decorativos se marcan con `aria-hidden="true"`; toda animación respeta `prefers-reduced-motion`.

## Cómo agregar un nuevo componente

1. Crea `src/components/<Nombre>.astro` con props tipadas y estilos acotados.
2. Crea la página de documentación en `src/pages/components/<nombre>.astro` (sigue la estructura de las páginas existentes).
3. Exporta el componente en `src/components/index.js`.
4. Agrega la entrada de exportación en `package.json` (mapa `exports`).
5. Agrega el enlace en `componentLinks` de `src/layouts/BaseLayout.astro`.
6. Agrega la tarjeta en el array `components` de `src/pages/index.astro`.
7. Ejecuta `npm run build` y confirma que pasa.

## Expectativas de los pull requests

- El build (`npm run build`) debe pasar.
- La documentación relacionada debe actualizarse junto con el cambio.
- El copy nuevo debe estar en español neutro (cuando aplique).
- Un PR debe tener un alcance acotado: evita refactorizaciones no relacionadas.
- Describe el *qué* y el *por qué* del cambio; incluye capturas si afecta UI.

## Licencia

Al contribuir aceptas que tus aportes se distribuyan bajo la licencia MIT del proyecto (ver `LICENSE`).
