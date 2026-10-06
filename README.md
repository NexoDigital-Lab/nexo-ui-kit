# Nexo UI Kit

[![npm](https://img.shields.io/npm/v/@nexodigital/ui-kit.svg)](https://www.npmjs.com/package/@nexodigital/ui-kit)
[![license](https://img.shields.io/npm/l/@nexodigital/ui-kit.svg)](./LICENSE)

Sistema de diseño y componentes Astro para el ecosistema **Nexo Digital Lab**. Tokens de diseño como fuente única de verdad y componentes independientes, sin ataduras a Prisma, Supabase ni la app de Nexo Digital.

## Inicio rápido

### Como paquete npm (recomendado)

```bash
npm install @nexodigital/ui-kit
```

### Desde el repositorio

```bash
git clone https://github.com/NexoDigital-Lab/nexo-ui-kit.git
cd nexo-ui-kit
npm install
npm run dev
```

Abre `http://localhost:4321` — tienes la landing, la referencia de tokens y cada componente con ejemplos en vivo.

Demo en producción: https://nexo-ui-kit-chi.vercel.app

## Consumo en tu proyecto

### Tokens (siempre)

Todos los valores visuales del kit se resuelven con variables `--nx-*`. Importalo como CSS global:

```css
@import '@nexodigital/ui-kit/tokens.css';
```

### Componentes

Los componentes son `.astro` standalone que solo dependen de los tokens:

```astro
---
import Button from '@nexodigital/ui-kit/Button';
---

<Button variant="primary" href="/empleos">Ver empleos</Button>
<Button variant="secondary" size="sm">Cancelar</Button>
```

También puedes copiar y pegar los `.astro` de `src/components/` si prefieres no depender del paquete — no tienen más dependencias que los tokens.

### Temas

El kit es **dark-first** pero soporta light mode. Los tokens se resuelven automáticamente con `prefers-color-scheme` del sistema, o puedes forzarlo con `data-theme` en `<html>`:

```html
<html data-theme="light">  <!-- o "dark" -->
```

## Componentes

| Componente | Variantes / props clave | Documentación |
|---|---|---|
| `Button` | primary, secondary, ghost, danger · sm/md/lg · `href` renderiza `<a>` | `/components/button` |
| `Badge` | cyan, purple, magenta, success, warning, danger, muted · sm/md · dot | `/components/badge` |
| `Card` | hover on/off · padding md/lg | `/components/card` |
| `Input` | text, email, password, search · label opcional · estado error | `/components/input` |
| `SearchBar` | compone Input + Button · icono lupa | `/components/search-bar` |
| `SectionHeader` | badge + title + subtitle · `centered` · `gradientTitle` | `/components/section-header` |
| `Modal` | open · sm/md/lg · `closable` · overlay + panel | `/components/modal` |
| `Toast` | success, warning, danger, info · 4 posiciones · `demo` inline | `/components/toast` |
| `Tabs` | lista de tabs + `active` id · panel server-rendered | `/components/tabs` |
| `Avatar` | sm/md/lg/xl · imagen o fallback de iniciales | `/components/avatar` |
| `EmptyState` | icono + title + message · slot `action` | `/components/empty-state` |
| `GlowOrb` | sm/md/lg/xl · cyan/purple/magenta/brand · intensity | `/components/background` |
| `ParticleField` | canvas de partículas · density/speed · reduced-motion | `/components/background` |

## Tokens principales

| Grupo | Ejemplos |
|---|---|
| Brand | `--nx-cyan`, `--nx-purple`, `--nx-magenta`, `--nx-indigo` (+ soft) |
| Semantic | `--nx-success`, `--nx-warning`, `--nx-danger`, `--nx-info` |
| Surfaces | `--nx-bg-primary`, `--nx-bg-secondary`, `--nx-bg-card`, `--nx-bg-card-hover` |
| Text | `--nx-text-primary`, `--nx-text-secondary`, `--nx-text-muted` |
| Typography | `--nx-font-body` (Inter), `--nx-font-display` (Outfit), tamaños, weights |
| Spacing | `--nx-space-1` … `--nx-space-16` (base 4px) |
| Radius | `--nx-radius-sm/md/lg/xl/full` |
| Gradients | `--nx-gradient-main`, `--nx-gradient-brand`, `--nx-gradient-subtle` |
| Motion | `--nx-ease`, `--nx-duration-fast/normal/slow` |

Referencia visual completa en `/tokens`.

## Estructura

```
src/
├── styles/
│   ├── tokens.css      ← fuente única de tokens de diseño
│   ├── base.css        ← reset + defaults, importa tokens
│   └── docs.css        ← UI del sitio de documentación
├── components/         ← componentes Astro standalone
├── layouts/
│   └── BaseLayout.astro
└── pages/
    ├── index.astro              ← landing
    ├── tokens.astro             ← referencia de tokens
    └── components/              ← docs por componente
```

## Convenciones del kit

- **Sin hex hard-coded** en componentes — todo pasa por `--nx-*`
- **Sin dependencias de app** — nada de Prisma, Supabase ni tipos de Nexo Digital
- **Astro scoped styles** — un `.astro` = un componente autocontenido
- **Dark theme primero** — el dark es el default de `:root`; light mode se resuelve con `prefers-color-scheme` o `data-theme="light"`

## Desarrollo

| Comando | Uso |
|---|---|
| `npm run dev` | Dev server con HMR |
| `npm run build` | Build estático a `dist/` |
| `npm run preview` | Preview del build |
| `npm run tokens:sync` | Sincroniza tokens hacia Nexo-Digital |

## Licencia

MIT — Nexo Digital Lab.
