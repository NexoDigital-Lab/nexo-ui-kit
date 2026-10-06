# Feature: theme-light-and-release

## Objective
Add light-theme support to the kit's token system, fix the sparse ParticleField docs demo, push all commits to GitHub (Vercel auto-redeploy), and publish `@nexodigital/ui-kit` to npm.

## Problem / Why
User asked to complete the four remaining items mentioned in session: (1) push to GitHub, (2) npm publish, (3) light mode, (4) ParticleField demo density. Light mode was listed as low-priority next step in README; density was flagged as sparse (~13 particles) in the docs demo.

## Context
- tokens.css is dark-first via `:root`; components reference `--nx-*` tokens only (convention: no hard-coded hex in components).
- npm: `npm whoami` returns ENEEDAUTH; no token in ~/.npmrc; `@nexodigital/ui-kit` returns E404 on registry (not published yet). Publish is blocked until the user authenticates (`npm login` or NPM_TOKEN).
- Vercel project `shinigamy19s-projects/nexo-ui-kit` has GitHub integration connected — push to master triggers auto-deploy.
- Repo: public on GitHub (NexoDigital-Lab/nexo-ui-kit), 13 commits on master before this feature.

## Scope
IN:
- Light theme token overrides in tokens.css (prefers-color-scheme + data-theme manual toggle).
- Fix any hard-coded dark values in docs.css / components that break light mode.
- Theme toggle in docs site nav (persisted via localStorage).
- ParticleField demo density bump in background.astro.
- Push to GitHub.
- npm publish once auth exists.
OUT:
- No new components. No redesign. No CI. No custom domain.

## Tasks
- [ ] T1: Light theme tokens + hard-coded dark fixes + docs nav theme toggle.
- [ ] T2: ParticleField demo density bump (both instances in background.astro).
- [ ] T3: Push master to GitHub; confirm Vercel redeploy.
- [ ] T4: npm publish `@nexodigital/ui-kit` — BLOCKED on npm auth (user must `npm login` or set NPM_TOKEN).

## Line forecast
T1+T2: ~100-250 authored lines (token block + small fixes + toggle + density). Under 400 heuristic.

## Delivery strategy
Direct commits on master (repo convention).

## Acceptance criteria
- Light mode: under `prefers-color-scheme: light` OR `[data-theme='light']`, surfaces/text/borders read correctly; dark remains default.
- Docs nav has a working theme toggle; choice persists across reloads.
- ParticleField demo renders visibly denser.
- `npm run build` green.
- Push executed; Vercel production URL serves updated content.
- npm publish executed OR auth blocker reported to user.

## Checks
- `npm run build` after writer.
- curl/light-scheme check of live site after push (structural: data-theme script present).

## Progress
- T1: pending
- T2: pending
- T3: pending
- T4: blocked on npm auth

## Notes
- Light palette direction: near-white surfaces (#fafafc / #ffffff cards), dark text (#0a0a0f primary), slightly stronger borders, lighter shadows, darkened soft-brand and semantic tokens for contrast on light backgrounds. Brand gradients stay colorful.
- Manual `[data-theme]` on <html> must win over prefers-color-scheme when set.
- Do not commit npm auth artifacts. No .npmrc tokens in repo.
