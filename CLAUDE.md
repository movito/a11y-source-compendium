# Accessibility Module Web — Vite + React Project

## What This Is

A small Vite + React site to publish reference pages for the EU Accessibility and Digital Regulations training module. The first page is a **Source Compendium** — an interactive, collapsible reference of ~75 curated sources organized by lecture topic.

This project deploys to **Vercel**.

## Current State

The site has one working page (`source-compendium.jsx`) created as a Claude artifact. It needs to be wrapped in a minimal Vite + React project scaffold and deployed.

### Files provided in `/handoff/`

| File | What it is |
|------|-----------|
| `source-compendium.jsx` | Complete React component (default export). Self-contained — all data, styles, and sub-components are inline. Uses only `useState`, `useRef`, `useEffect` from React. No external dependencies beyond React itself. |
| `accessibility-module.css` | Extracted CSS with custom properties (design tokens), BEM class names, and responsive breakpoints. This is the **reference stylesheet** — the current JSX uses inline styles, but future pages should migrate to these classes. |
| `design-documentation.md` | Full design system documentation: color palette, typography scale, spacing, component specs, accessibility notes, and reuse guidelines. **Read this before creating new pages.** |
| `sources.md` | The source data in markdown (useful reference but already embedded as JS data in the JSX). |
| `course-introduction.md` | Course introduction content — a candidate for the next page to build. |
| `accessibility-module-plan.md` | Full module curriculum — another candidate for a future page. |

## Task: Scaffold and Deploy

### 1. Create Vite + React project

```bash
npm create vite@latest accessibility-module-web -- --template react
cd accessibility-module-web
npm install
```

### 2. Clean out defaults

Remove the default Vite boilerplate:
- Delete `src/App.css`, `src/index.css`, `src/assets/`
- Replace `src/App.jsx` to use the source compendium as the root component

### 3. Project structure (target)

```
accessibility-module-web/
├── public/
├── src/
│   ├── main.jsx                  ← Vite entry point (renders App)
│   ├── App.jsx                   ← Router shell (just renders SourceCompendium for now)
│   ├── styles/
│   │   └── tokens.css            ← CSS custom properties from accessibility-module.css
│   ├── pages/
│   │   └── SourceCompendium.jsx  ← The source compendium page (from handoff)
│   └── components/               ← Shared components extracted later
├── content/                      ← Markdown source files (not built, just reference)
│   ├── sources.md
│   ├── course-introduction.md
│   └── accessibility-module-plan.md
├── docs/
│   └── design-documentation.md   ← Design system reference
├── CLAUDE.md                     ← This file
├── package.json
├── vite.config.js
├── vercel.json                   ← Vercel SPA config
└── index.html
```

### 4. Vercel configuration

Create `vercel.json` for SPA routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 5. Font loading

The component imports Google Fonts via a `<style>` tag with `@import`. For production, move this to `index.html` as a `<link>` tag for better performance:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:wght@600;700&display=swap" rel="stylesheet">
```

Then remove the `@import` line from the component's inline `<style>` tag.

### 6. Deploy

```bash
# If Vercel CLI is installed:
vercel

# Or connect the repo to Vercel via the dashboard.
# Framework preset: Vite
# Build command: npm run build
# Output directory: dist
```

### 7. Verify

After deployment, check:
- [ ] Page loads and displays all source sections
- [ ] Collapsible sections animate open/close
- [ ] External links open in new tabs
- [ ] Focus-visible outlines appear on keyboard navigation
- [ ] Page is readable on mobile (< 640px)
- [ ] Fonts load (Source Serif 4 for heading, Source Sans 3 for body)

---

## Design System Rules

When building new pages or modifying existing ones, follow these rules. Full details in `docs/design-documentation.md`.

### Colors

Use CSS custom properties from `styles/tokens.css`. The palette is warm stone neutrals with blue accents:

- **Page background**: `--color-bg` (#FAFAF9)
- **Cards/panels**: `--color-surface` (#FFFFFF) with `--color-border` (#E8E5E0) and `--shadow-card`
- **Primary text**: `--color-text` (#1C1917)
- **Secondary text**: `--color-text-secondary` (#57534E)
- **Accent**: `--color-accent` (#1a365d) and `--color-accent-light` (#2b6cb0)

The accent blues (`#1a365d` / `#2b6cb0`) are shared with the slide deck design system to maintain visual continuity between slides and web materials.

### Typography

- **Display headings**: Source Serif 4, 700 weight — used for page titles only
- **Everything else**: Source Sans 3 — weights 400 (body), 500 (source names), 600 (section headings), 700 (labels)
- **Monospace accents**: JetBrains Mono — used sparingly for compact badges (day codes)

Never use Inter, Roboto, or system defaults. The serif/sans pairing is a deliberate editorial choice.

### Components

The page uses a small set of repeating patterns:
- **Collapsible card** — white surface, 10px radius, 1px border, subtle shadow, animated expand/collapse
- **Type badge** — pill-shaped, color-coded by source type family (7 families)
- **Source row** — grid layout, hover state, link with external icon, description
- **Lecture sub-header** — tinted background row within a card
- **Day badge** — monospace label in a rounded square

### Accessibility

This is an accessibility course's own website. It must be exemplary:
- All color contrast ≥ 4.5:1 (WCAG AA)
- Focus-visible outlines on all interactive elements (2px solid accent-light, 2px offset)
- Semantic HTML — buttons for triggers (not divs), proper heading hierarchy
- `aria-expanded` on all collapsible triggers
- External links marked with `rel="noopener noreferrer"`
- Motion: transitions ≤ 250ms, ease timing

### Layout

- Max content width: 820px, centered
- Responsive breakpoint at 640px (reduce padding, simplify grids)

---

## Future Pages

Content ready for conversion to web pages:

1. **Course Introduction** (`content/course-introduction.md`) — student-facing overview with learning outcomes, schedule, assessment details
2. **Module Plan** (`content/accessibility-module-plan.md`) — full curriculum with day-by-day breakdown, readings, exercises

When adding pages, consider adding `react-router-dom` for client-side routing with a simple nav header linking the pages.

---

## What NOT to Change

- The data structure in `source-compendium.jsx` — this matches the curated `sources.md` exactly
- The color palette — it's coordinated with the slide deck
- The font pairing — it's a deliberate design choice documented in the design system
- The accessibility patterns — focus rings, ARIA attributes, contrast ratios
