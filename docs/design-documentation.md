# Source Compendium — Design Documentation

Reference documentation for the visual design system used in the Source Compendium page. Intended for reuse in other pages within the accessibility module (course introduction, module plan, assessment guide, etc.).

---

## Aesthetic Direction

**Editorial reference page.** The design draws from academic reference tools and documentation sites — clean, scannable, and typographically grounded. The warm neutral palette avoids the cold blue-grey of most developer docs while staying professional enough for a university context.

Key principles:
- **Warm neutrals** — stone/beige tones rather than blue-grey
- **Typographic hierarchy** — serif display headings, sans-serif body text
- **Density with clarity** — lots of content, but well-structured through collapsible sections and consistent row patterns
- **Accessibility first** — all contrast ratios exceed WCAG AA, proper focus indicators, semantic HTML, keyboard navigation

---

## Typography

### Font Stack

```
Display / Headings:  'Source Serif 4', Georgia, serif
Body / UI:           'Source Sans 3', 'Source Sans Pro', 'Segoe UI', system-ui, -apple-system, sans-serif
Monospace / Codes:   'JetBrains Mono', 'SF Mono', 'Cascadia Code', monospace
```

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:wght@600;700&display=swap
```

### Type Scale

| Role | Font | Size | Weight | Line Height | Usage |
|------|------|------|--------|-------------|-------|
| Page title | Source Serif 4 | 32px | 700 | 40px | Main page heading (h1) |
| Module label | Source Sans 3 | 11px | 700 | — | Uppercase label above page title |
| Group heading | Source Sans 3 | 16px | 600 | 24px | Collapsible section titles (day groups) |
| Section heading | Source Sans 3 | 15px | 600 | — | Supplementary section titles |
| Lecture label | Source Sans 3 | 11px | 700 | — | Uppercase lecture number (e.g. "LECTURE 4") |
| Lecture title | Source Sans 3 | 14px | 600 | — | Lecture topic name in sub-headers |
| Source name | Source Sans 3 | 14px | 500 | 22px | Clickable source title |
| Source description | Source Sans 3 | 13px | 400 | 20px | Secondary description text |
| Meta text | Source Sans 3 | 12px | 400 | — | Counts, dates, footer text |
| Type badge | Source Sans 3 | 11px | 600 | 20px | Uppercase pill labels |
| Day code | JetBrains Mono | 13px | 700 | — | Compact day identifier ("D1", "D2") |

### Letter Spacing

| Context | Value |
|---------|-------|
| Module label | 0.1em |
| Section label (uppercase) | 0.08em |
| Lecture label (uppercase) | 0.06em |
| Type badge (uppercase) | 0.03em |

---

## Color System

### Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#FAFAF9` | Page background |
| `surface` | `#FFFFFF` | Card/panel background |
| `surfaceHover` | `#F7F7F5` | Row hover, sub-header background |
| `border` | `#E8E5E0` | Card borders, primary dividers |
| `borderLight` | `#F0EDE8` | Internal row dividers |
| `text` | `#1C1917` | Primary body text |
| `textSecondary` | `#57534E` | Descriptions, secondary content |
| `textTertiary` | `#A8A29E` | Counts, metadata, placeholders |
| `accent` | `#1a365d` | Page title, link hover, primary emphasis |
| `accentLight` | `#2b6cb0` | Links, module label, focus rings |
| `accentSubtle` | `#EBF0F7` | Day badge background |

These are drawn from the Tailwind Stone scale (neutrals) and the slide deck's own blue palette (`#1a365d` / `#2b6cb0`), creating continuity between the slides and the reference page.

### Link Colors

| State | Color |
|-------|-------|
| Default | `#2b6cb0` |
| Hover | `#1a365d` |

### Type Badge Colors

Badges map source types to semantic color families. Seven base color families, with multiple types aliased to each:

| Family | Background | Text | Types |
|--------|------------|------|-------|
| Standard (amber) | `#FEF3C7` | `#92400E` | Standard, Framework, Draft |
| Legislation (pink) | `#FCE7F3` | `#9D174D` | Legislation, Official, Guidelines |
| Guide (blue) | `#DBEAFE` | `#1E40AF` | Guide, Reference, Tutorial, Documentation, Checklist |
| Tool (green) | `#D1FAE5` | `#065F46` | Tool, Toolkit, Patterns, Testing, Template |
| Book (purple) | `#F3E8FF` | `#6B21A8` | Book, Book/Blog |
| Article (red) | `#FEE2E2` | `#991B1B` | Article, Research, Analysis, Survey, Catalog, Podcast, Video, History |
| Other (slate) | `#F1F5F9` | `#475569` | Overview, Introduction, FAQ, Guidance, Summary |

All badge text/background combinations exceed 4.5:1 contrast ratio.

---

## Layout

### Page Structure

```
┌─────────────────────────────────────────────┐
│  Header (surface bg, bottom border)         │
│  ┌───────────────────────────────────────┐  │
│  │  max-width: 820px, centered           │  │
│  │  Module label                         │  │
│  │  Page title (h1)                      │  │
│  │  Description                          │  │
│  │  Last updated                         │  │
│  └───────────────────────────────────────┘  │
├─────────────────────────────────────────────┤
│  Main (bg)                                  │
│  ┌───────────────────────────────────────┐  │
│  │  max-width: 820px, centered           │  │
│  │                                       │  │
│  │  [Day Group Card] ← collapsible       │  │
│  │  [Day Group Card]                     │  │
│  │  [Day Group Card]                     │  │
│  │  ...                                  │  │
│  │                                       │  │
│  │  ── Supplementary Resources ──        │  │
│  │                                       │  │
│  │  [Supplementary Card] ← collapsible   │  │
│  │  [Supplementary Card]                 │  │
│  │  ...                                  │  │
│  │                                       │  │
│  │  ── Footer ──                         │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

### Spacing

| Element | Value |
|---------|-------|
| Page max-width | 820px |
| Header padding | 48px top, 40px bottom, 24px sides |
| Main padding | 32px top, 80px bottom, 24px sides |
| Gap between day groups | 16px |
| Gap between supplementary cards | 12px |
| Supplementary section margin-top | 48px |
| Footer margin-top | 56px |

### Card Anatomy

```
┌──────────────────────────────────────────────┐
│  [D1]  Title of Day Group           ▾        │  ← Trigger button
│         2 sections · 9 sources               │
├──────────────────────────────────────────────┤
│  LECTURE 1A   Lecture Title       4 sources   │  ← Sub-header
├──────────────────────────────────────────────┤
│  Source Name ↗  [TYPE BADGE]                  │  ← Source row
│  Description text goes here...                │
├ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│  Source Name ↗  [TYPE BADGE]                  │
│  Description text goes here...                │
└──────────────────────────────────────────────┘
```

### Card Styling

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | 1px solid `#E8E5E0` |
| Border radius | 10px |
| Box shadow | `0 1px 3px rgba(0,0,0,0.04)` |

---

## Components

### Day Badge

A compact monospace label inside the collapsible trigger.

| Property | Value |
|----------|-------|
| Size | 36×36px |
| Border radius | 8px |
| Background | `#EBF0F7` |
| Text color | `#1a365d` |
| Font | JetBrains Mono, 13px, 700 |
| Format | "D1", "D2", etc. |

### Type Badge (Pill)

| Property | Value |
|----------|-------|
| Padding | 2px 10px |
| Border radius | 100px (full pill) |
| Font size | 11px |
| Font weight | 600 |
| Text transform | uppercase |
| Letter spacing | 0.03em |
| Line height | 20px |

### Collapsible Section

Animated expand/collapse using `scrollHeight` measurement and CSS `height` transition.

| Property | Value |
|----------|-------|
| Transition | height 250ms ease |
| Chevron rotation | 0deg (open) → -90deg (closed), 200ms ease |
| Default state | First group open, rest closed |

### Source Row

| Property | Value |
|----------|-------|
| Padding | 14px 20px |
| Internal divider | 1px solid `#F0EDE8` (none on last row) |
| Hover background | `#F7F7F5`, 150ms ease |
| Description max-width | 680px |
| Layout | CSS Grid, `1fr auto` |

### External Link Icon

12×12px SVG inline with link text. Arrow pointing to upper-right corner with a partial box. Opacity 0.5 to keep it subtle.

```svg
<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M3.5 1.5H1.5V10.5H10.5V8.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 6L10.5 1.5M10.5 1.5H7.5M10.5 1.5V4.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## Accessibility

| Feature | Implementation |
|---------|---------------|
| Focus indicators | 2px solid `#2b6cb0`, 2px offset, on buttons and links via `:focus-visible` |
| Keyboard navigation | All collapsible sections use `<button>` elements with `aria-expanded` |
| Color contrast | All text exceeds WCAG AA (4.5:1). Badge text tested against badge backgrounds. |
| Link targets | External links use `target="_blank"` with `rel="noopener noreferrer"` |
| Font smoothing | `-webkit-font-smoothing: antialiased` |
| Motion | Collapse animations are brief (250ms) and use `ease` timing |

---

## Reuse Notes

### Adapting for Other Pages

To reuse this design for other module pages (course introduction, module plan, assessment):

1. **Keep the header pattern** — module label, serif title, description, metadata line
2. **Keep the card pattern** — collapsible groups with internal sub-sections and rows
3. **Adjust the data structure** — the component is data-driven; swap the `DATA` and `SUPPLEMENTARY` arrays
4. **Adjust badge types** — add new type/color mappings to `TYPE_COLORS` as needed

### What to Preserve Across Pages

- Font stack and type scale
- Color palette (especially the neutral tones and accent blues)
- Card styling (border, radius, shadow)
- Collapsible interaction pattern
- Badge pill styling
- Focus indicator styling
- Max-width (820px) and spacing rhythm

### What to Vary Per Page

- Page title and description
- Data structure and content
- Which sections default to open
- Whether badges are needed (they suit reference pages; a course intro might not need them)
- Footer content
