# Nexo UI Kit

Design system y componentes Astro para el ecosistema **Nexo Digital Lab**. Tokens de diseño como fuente única de verdad y componentes standalone, sin ataduras a Prisma, Supabase ni la app de Nexo Digital.

## Quick path

```bash
git clone https://github.com/NexoDigital-Lab/nexo-ui-kit.git
cd nexo-ui-kit
npm install
npm run dev
```

Abrí `http://localhost:4321` — tenés la landing, la referencia de tokens y cada componente con ejemplos live.

## Consumo en tu proyecto

### Tokens (siempre)

Copiá `src/styles/tokens.css` o importalo como CSS global. Todos los valores visuales del kit se resuelven con variables `--nx-*`.

```css
@import 'path/to/nexo-ui-kit/src/styles/tokens.css';
```

### Componentes

Hoy el consumo es **copy-paste** de los `.astro` de `src/components/`. No dependen de nada más que los tokens:

1. Copiá el componente (ej. `Button.astro`) a tu proyecto
2. Asegurate de que `tokens.css` esté cargado
3. Importalo y usalo

```astro
---
import Button from '../components/Button.astro';
---

<Button variant="primary" href="/empleos">Ver empleos</Button>
<Button variant="secondary" size="sm">Cancelar</Button>
```

Cuando el kit madure se publicará como package npm (`@nexodigital/ui-kit`) y el copy-paste queda para casos edge.

## Componentes

| Componente | Variantes / props clave | Docs |
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
│   ├── tokens.css      ← fuente única de design tokens
│   ├── base.css        ← reset + defaults, importa tokens
│   └── docs.css        ← chrome del sitio de documentación
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
- **Dark theme primero** — el ecosistema Nexo es dark; light mode no está en scope v0

## Desarrollo

| Comando | Uso |
|---|---|
| `npm run dev` | Dev server con HMR |
| `npm run build` | Build estático a `dist/` |
| `npm run preview` | Preview del build |

## Próximos pasos

- [ ] Publicar como `@nexodigital/ui-kit` en npm
- [ ] Script de sincronización de tokens hacia Nexo-Digital
- [ ] Más componentes: Modal, Toast, Tabs, Avatar, EmptyState
- [ ] Modo light (bajo prioridad)

## Licencia

MIT — Nexo Digital Lab.
