# PRISM — Route & Content Integrity Portfolio

PRISM modernizes a 2023 multi-route React portfolio into a route-aware engineering portfolio with explicit content boundaries.

The original project had real React routes, but much of its portfolio content was not credible:

- fake identity content such as `ALAMIN MUSA`
- Lorem Ipsum biography/services/blog/testimonials
- third-party Brex artwork presented as portfolio items
- fake counters such as happy clients, completed projects, downloads, and lines of code
- fake testimonials
- fake address, phone numbers, and email addresses
- social icons without destinations
- contact form without a backend
- résumé download buttons without a résumé file
- AOS animations on most content
- typewriter animation
- Slick carousel
- icon-library-heavy data structures
- a hover-only portfolio overlay
- `console.log` left in production code
- no unknown-route recovery
- CRA boilerplate and a ~709 KB legacy lockfile

## Engineering identity

**PRISM — Route & Content Integrity Portfolio**

PRISM focuses on:

- canonical route registry
- route metadata
- static-host-safe hash routing
- unknown-route recovery
- keyboard route navigation
- repository-backed project content
- deterministic project filtering
- safe repository-link policy
- explicit claim boundaries

## Route architecture

```text
src/data/content.js
        │
        ├─ routeRegistry
        ├─ projects
        ├─ architecture notes
        └─ scope boundaries
        │
        ▼
src/lib/routePolicy.js
        ├─ canonical hash normalization
        ├─ route lookup
        ├─ route index
        ├─ keyboard navigation
        ├─ focus normalization
        ├─ project filtering
        └─ safe GitHub URL validation
        │
        ▼
src/App.jsx
        ├─ hashchange integration
        ├─ document title/description
        ├─ unknown-route recovery
        ├─ keyboard-safe route navigation
        └─ route-specific content
```

## Why hash routing

The original project used browser routes such as `/about` and `/portfolio`.

That requires server rewrite support when a user refreshes a deep route.

PRISM uses:

- `#/overview`
- `#/projects`
- `#/architecture`
- `#/boundaries`

This keeps deep navigation compatible with static hosting such as GitHub Pages without pretending a server router exists.

## Content integrity

The maintained portfolio now follows these rules:

1. Every project links to a real GitHub repository.
2. No fake client logos or testimonials.
3. No fake project/download/client counters.
4. No contact form without a submission backend.
5. No social icon without a real destination.
6. No résumé button without an actual résumé artifact.
7. No route outside the canonical registry.

## Modernization summary

- Create React App → Vite
- React 18 → React 19
- removed React Router
- removed AOS
- removed React CountUp
- removed React Icons
- removed React Slick
- removed Slick Carousel
- removed Typewriter Effect
- removed Web Vitals
- removed fake identity/biography
- removed fake services claims
- removed fake counters
- removed fake testimonials
- removed fake contact data
- removed fake contact form
- removed fake social icons
- removed third-party portfolio artwork
- removed stock images
- removed hover-only portfolio interaction
- removed console logging
- removed oversized Google Fonts import
- removed CRA public/test boilerplate
- removed legacy lockfile
- added Vitest, CI, Pages deployment, and professional documentation

## Local development

Requirements:

- Node.js 22+
- npm

```bash
npm install --legacy-peer-deps --no-audit --no-fund
npm run dev
```

## Tests

```bash
npm test
```

The suite covers:

- empty-route fallback
- bare route normalization
- hash normalization
- unknown-route recovery
- route lookup
- route index
- keyboard route wrapping
- Home/End route navigation
- empty route registry
- focus normalization
- unknown focus recovery
- all-project behavior
- deterministic project filtering
- unique focus generation
- GitHub HTTPS URL validation
- JavaScript URL rejection
- non-GitHub URL rejection

## Quality gate

```bash
npm run check
```

Runs syntax checks, Vitest, and a Vite production build.

## CI

`.github/workflows/quality.yml` runs on pull requests and pushes to `main`.

## Deployment

PRISM includes a manual GitHub Pages workflow.

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Open **Actions → Deploy Pages**.
4. Run the workflow.

## Security review

No API keys, passwords, tokens, authentication flows, unsafe HTML rendering, or sensitive browser storage are required.

External project destinations are static HTTPS links to `github.com`.

## Scope

PRISM is a static engineering portfolio and route/content-system demo.

It does not claim:

- CMS editing
- authentication
- contact submission
- analytics
- real client testimonials
- customer counts
- download counts
- commercial metrics

## License

MIT. See [LICENSE](./LICENSE).
