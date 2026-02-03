# Migration Plan: Agentive Starter Kit + Sanity + Next.js

## Overview

Build the Source Compendium as a new project based on the **agentive-starter-kit**, adding Next.js + Sanity CMS. This gives us:

- **Serena** for TypeScript semantic navigation
- **Adversarial testing workflow** with multi-model evaluation
- **Task management** via Linear-compatible folder structure
- **Documentation-as-infrastructure** approach
- **Pre-commit hooks** and quality gates

---

## Project Structure

```
a11y-source-compendium/
├── .claude/agents/              # Agent definitions (from starter kit)
├── .agent-context/              # Agent coordination state
├── .serena/                     # TypeScript semantic navigation config
├── .adversarial/                # Multi-model evaluation framework
├── delegation/tasks/            # Task workflow (9 stages)
│
├── src/                         # Next.js App Router
│   ├── app/
│   │   ├── page.tsx             # Source Compendium
│   │   ├── layout.tsx           # Root layout with landmarks
│   │   └── studio/[[...index]]/page.tsx  # Sanity Studio at /studio
│   ├── components/
│   │   ├── DayGroup.tsx
│   │   ├── LectureSection.tsx
│   │   ├── SourceRow.tsx
│   │   ├── TypeBadge.tsx
│   │   └── SkipLink.tsx         # WCAG: skip to main content
│   └── lib/
│       ├── sanity.client.ts
│       └── queries.ts           # GROQ queries
│
├── sanity/                      # Sanity configuration
│   ├── schemas/
│   │   ├── source.ts
│   │   ├── lecture.ts
│   │   ├── day.ts
│   │   └── supplementary.ts
│   ├── lib/
│   │   └── client.ts
│   └── sanity.config.ts
│
├── tests/                       # Test suite
│   ├── unit/                    # Vitest unit tests
│   ├── integration/             # Component integration tests
│   ├── e2e/                     # Playwright E2E tests
│   └── a11y/                    # axe-core accessibility tests
│
├── scripts/
│   └── migrate-data.ts          # Import existing sources to Sanity
│
├── docs/
│   ├── architecture/            # ADRs
│   ├── product/                 # PRD, requirements
│   └── guides/                  # Content editor guides
│
└── content/                     # Non-CMS markdown (course intro, etc.)
```

---

## Sanity Configuration

### Connect to IxDA Oslo account

```ts
// sanity.config.ts
export default defineConfig({
  projectId: 'YOUR_IXDA_PROJECT_ID',  // from IxDA Oslo account
  dataset: 'a11y-compendium',          // new dataset
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})
```

### Schemas (unchanged from previous plan)

- **source**: name, url, type, description
- **lecture**: code, title, sources[], day reference, order
- **day**: number, title, order
- **supplementarySection**: title, sources[]

---

## Testing Strategy

### 1. Unit Tests (Vitest)
- Component rendering
- GROQ query helpers
- Utility functions

### 2. Integration Tests (Vitest + Testing Library)
- Component interactions (expand/collapse)
- Keyboard navigation
- Focus management

### 3. E2E Tests (Playwright)
- Full page load and navigation
- Cross-browser testing
- Visual regression (optional)

### 4. Accessibility Tests (axe-core + Playwright)
- Automated WCAG 2.2 AA checks on every page
- Color contrast validation
- Landmark and heading structure
- Keyboard-only navigation flows

### Pre-commit Hooks
```yaml
# .pre-commit-config.yaml (extend starter kit)
- repo: local
  hooks:
    - id: vitest
      name: Run Vitest
      entry: npm run test:unit
      language: system
    - id: a11y-check
      name: Accessibility check
      entry: npm run test:a11y
      language: system
```

---

## Migration Phases

### Phase 1: Project Setup (2-3 hours)
1. Clone agentive-starter-kit
2. Add Next.js 14 with App Router
3. Configure Serena for TypeScript
4. Install Sanity and create dataset in IxDA Oslo account
5. Set up Sanity Studio at `/studio`
6. Configure Vercel deployment

### Phase 2: Sanity Schemas + Data Import (1-2 hours)
1. Define schemas (source, lecture, day, supplementary)
2. Create `scripts/migrate-data.ts` to import existing content
3. Run migration, verify in Studio
4. Set up GROQ queries

### Phase 3: Port Frontend (2-3 hours)
1. Convert components to TypeScript
2. Add proper landmarks (`<main>`, `<nav>`, `<header>`)
3. Add skip link component
4. Implement data fetching with SSG
5. Add preview mode for draft content

### Phase 4: Testing Infrastructure (2-3 hours)
1. Set up Vitest + Testing Library
2. Set up Playwright
3. Add axe-core accessibility tests
4. Configure pre-commit hooks
5. Add GitHub Actions CI workflow

### Phase 5: WCAG 2.2 Compliance Audit (1-2 hours)
1. Run axe-core full audit
2. Manual keyboard testing
3. Screen reader testing (VoiceOver, NVDA)
4. Fix any issues found
5. Create accessibility statement page

### Phase 6: Documentation (1 hour)
1. Update README with setup instructions
2. Create content editor guide for Sanity Studio
3. Document component architecture
4. Add ADR for key decisions

---

## WCAG 2.2 Checklist (Key Items)

| Criterion | Status | Implementation |
|-----------|--------|----------------|
| 1.3.1 Info and Relationships | 🔲 | Semantic HTML, landmarks |
| 1.4.3 Contrast (Minimum) | ✅ | Already meets 4.5:1 |
| 2.1.1 Keyboard | 🔲 | Test all interactions |
| 2.4.1 Bypass Blocks | 🔲 | Add skip link |
| 2.4.2 Page Titled | ✅ | Already set |
| 2.4.3 Focus Order | 🔲 | Audit tab order |
| 2.4.6 Headings and Labels | 🔲 | Audit h1-h6 hierarchy |
| 2.4.7 Focus Visible | ✅ | Already styled |
| 2.5.8 Target Size | 🔲 | Verify 24×24px minimum |
| 4.1.2 Name, Role, Value | ✅ | aria-expanded on buttons |

---

## Estimated Timeline

| Phase | Hours |
|-------|-------|
| 1. Project Setup | 2-3 |
| 2. Schemas + Import | 1-2 |
| 3. Port Frontend | 2-3 |
| 4. Testing Infrastructure | 2-3 |
| 5. WCAG Audit | 1-2 |
| 6. Documentation | 1 |
| **Total** | **9-14 hours** |

---

## Next Steps

1. Clone agentive-starter-kit to new repo
2. Set up Next.js + Sanity
3. Create dataset in IxDA Oslo Sanity account

Ready to start when you are.
