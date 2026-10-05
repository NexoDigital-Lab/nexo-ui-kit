# Feature: docs-i18n-opensource

## Objective
Spanish UI copy across all docs pages, reusable background-element components with a usage docs section, and opensource governance files so nexo-ui-kit can be published as a proper open-source repository.

## Problem / Why
- Docs pages are in English. The brand and team are Spanish-speaking (Nexo Digital). The user explicitly requested "Traduci todo a español".
- No background/decorative components exist in the kit. The sibling app Nexo-Digital uses these patterns inline (radial-gradient glows, particle canvas, glassmorphism) but has no reusable components. The user wants "un apartado para mostrar como se usan los elementos del background".
- package.json declares `"license": "MIT"` but there is no LICENSE file, no CONTRIBUTING, no CODE_OF_CONDUCT, no SECURITY, and no .github templates. The user wants it "documentado todo perfectamente para hacerlo un repo opensource".

## Context
- Nexo-Digital investigation (this session): independent Astro 6 community portal, MIT licensed, shared brand identity (cyan #00f5ff / purple #a855f7 / magenta #ff2d78), no code dependency on the kit. Background patterns there are inline CSS Modules, not components. Reference opensource assets: LICENSE (MIT), SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, high-quality README with mermaid diagrams. No CI workflows.
- Kit package: `@nexodigital/v0.1.0`-class package `@nexodigital/ui-kit`, Astro ^7.3.5, Node >=22.12.0, exports map for 11 components + tokens.css + base.css. No test runner (scripts: dev, build, preview, astro, tokens:sync).
- RDD review lineage `review-db7ebe6324136161` reached terminal stop `captured_artifacts_unverifiable` after correction commit `4602661`. Assess on that commit: `review_due=false`, reason `under_budget` (138 lines). Review lifecycle for the prior candidate is closed; this feature is new work.
- Worktree carries unrelated dirty `package.json` + `package-lock.json` (astro ^6.0.5 -> ^7.3.5 upgrade made by another process). Those files must NOT be staged or committed with this feature's work units.

## Scope
IN:
- Translate all docs UI copy to Spanish: 13 pages under `src/pages/`, `src/layouts/BaseLayout.astro` (nav, footer, meta), and `README.md`.
- Create background components + a docs page showing usage, wired into nav, landing grid, `src/components/index.js`, and `package.json` exports.
- Create opensource governance files: LICENSE (MIT), CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md, `.github/` issue and PR templates.
- Work-unit commits per task on master (repo convention).
OUT:
- No behavior changes to existing component runtime code (translation is copy-only; new components are additive).
- No commit of the dirty package.json/package-lock.json Astro 7 upgrade.
- No CI workflows (recorded as future work; not in this feature).

## Tasks
- [ ] T1: Translate docs UI copy to Spanish across all pages, BaseLayout, and README.
- [ ] T2: Create `GlowOrb.astro` and `ParticleField.astro` components; create `src/pages/components/background.astro` docs page with working examples; wire into nav, landing, index.js, package.json exports.
- [ ] T3: Create opensource files: LICENSE (MIT, Nexo Digital Lab, 2026), CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md, `.github/ISSUE_TEMPLATE/` + `PULL_REQUEST_TEMPLATE.md`.
- [ ] T4: Verify `npm run build` passes and structural readback of new/changed files.
- [ ] T5: Record work-unit commit identities in this document after each commit.

## Line forecast
- T1: ~400-700 authored lines (del+add across ~15 files). Exceeds the ~400 per-task heuristic; treated as one coherent translation task, continuing without artificial split.
- T2: ~300-500 authored lines (2 components + docs page + wiring).
- T3: ~250-400 authored lines (5 governance file groups).
- Total forecast: ~1000-1600 authored lines.

## Delivery strategy
Direct work-unit commits on `master`. Repo convention: 2 existing commits, both on master, no branches, no PR flow. Recorded under the >400 ask-on-risk decision as stacked-to-main equivalent. If the user prefers feature-branch-chain, redirect before the next commit.

## Acceptance criteria
- All docs pages and nav render in Spanish.
- `/components/background` exists with live examples of GlowOrb and ParticleField.
- GlowOrb and ParticleField are exported from `src/components/index.js` and `package.json` exports.
- LICENSE, CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md, and `.github/` templates exist and are consistent with `@nexodigital/ui-kit` / Nexo Digital Lab.
- `npm run build` succeeds (13+ pages).
- `package.json` and `package-lock.json` are NOT committed as part of this feature.

## Checks
- `npm run build` after each writer work unit.
- `git diff --stat` / `git status --short` per work unit.
- Structural readback of new files (path exists, exports present, nav link resolves).

## Progress
- T1: **done** — commit `a4e2e77` (15 files, 325+/325-). All docs UI copy in neutral professional Spanish, `lang="es"`, build green (13 pages). Code identifiers, prop names, snippets left in English per contract.
- T2: **done** — commit `634c26b` (7 files, 621+). GlowOrb.astro, ParticleField.astro, /components/background docs page, wired into index.js, package.json exports, nav, landing grid.
- T3: **done** — commit `bafc723` (8 files, 239+). LICENSE (MIT), CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md, .github issue/PR templates — all in neutral professional Spanish.
- T4: **done** — `npm run build` green after every work unit; final build 14 pages. Structural readback confirmed exports, nav, governance files, favicon in dist.
- T5: **done** — all work-unit commit identities recorded below.
- Addendum: **done** — commit `31f982c` favicon (logo.webp + apple-touch-icon 192px copied from Nexo-Digital, link tags in BaseLayout head).

## Work-unit commits
- `4602661` fix: guard Avatar initials, add Modal Escape/focus trap, make Tabs interactive (RDD correction, 4 files, 102+/36-)
- `a4e2e77` docs: translate UI copy to Spanish across docs pages and README (T1, 15 files)
- `1d82cda` chore: upgrade astro to ^7.3.5 and regenerate lockfile
- `452eedd` docs: add ODD task document for docs-i18n-opensource feature
- `634c26b` feat: add GlowOrb and ParticleField background components with docs (T2)
- `bafc723` docs: add opensource governance files (T3)
- `31f982c` feat: add Nexo Digital favicon and apple-touch-icon (addendum)

## Feature status: COMPLETE
All tasks closed. Repo is Spanish-documented, has background components with usage docs, opensource governance files, favicon, and green builds. RDD lineage review-db7ebe6324136161 is terminal (captured_artifacts_unverifiable); assess on correction commit 4602661: review_due=false (under_budget).

## Notes
- Translation register: neutral professional Spanish (persona scope rule for artifacts). Component prop names, CSS class names, code identifiers, and code snippets stay in English/code.
- Background components must respect `prefers-reduced-motion` for any animation.
- Opensource files should mirror the quality bar of Nexo-Digital's governance files where appropriate, adapted to a component-library repo.
