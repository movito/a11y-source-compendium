# Accessibility Agents & Sanity Integration

## Custom Agent Types for Accessibility

Building on the agentive-starter-kit's agent framework, we'll create specialized accessibility agents that run at different stages of the workflow.

---

## Agent Definitions

### 1. `a11y-auditor`
**Role:** Automated accessibility scanning
**When:** Pre-commit, CI, and on-demand
**Tools:** axe-core, Lighthouse, pa11y

```yaml
# .claude/agents/a11y-auditor.yaml
name: a11y-auditor
description: Runs automated WCAG 2.2 compliance checks
triggers:
  - pre-commit (on component changes)
  - pull-request
  - scheduled (weekly full audit)
tools:
  - axe-core
  - lighthouse-ci
  - pa11y
outputs:
  - WCAG violation report
  - Suggested fixes with code snippets
  - Severity classification (critical/serious/moderate/minor)
```

**Capabilities:**
- Scans all pages/components for WCAG 2.2 AA violations
- Generates fix suggestions with code examples
- Tracks accessibility debt over time
- Blocks PRs with critical violations

---

### 2. `wcag-reviewer`
**Role:** Human-readable WCAG compliance review
**When:** Code review phase
**Approach:** Adversarial multi-model evaluation

```yaml
# .claude/agents/wcag-reviewer.yaml
name: wcag-reviewer
description: Reviews components against WCAG 2.2 success criteria
mode: adversarial
evaluators:
  - claude-sonnet (primary)
  - gpt-4 (secondary reviewer)
focus_areas:
  - Semantic HTML structure
  - ARIA usage patterns
  - Keyboard interaction design
  - Focus management
  - Color and contrast
  - Motion and animation
```

**Capabilities:**
- Reviews new components for WCAG compliance
- Checks ARIA patterns against APG guidelines
- Validates heading hierarchy
- Suggests semantic HTML improvements
- Flags potential screen reader issues

---

### 3. `keyboard-navigator`
**Role:** Keyboard-only interaction testing
**When:** Integration tests, E2E tests

```yaml
# .claude/agents/keyboard-navigator.yaml
name: keyboard-navigator
description: Tests all interactions via keyboard-only paths
test_scenarios:
  - Tab through all interactive elements
  - Verify focus order matches visual order
  - Test Enter/Space activation
  - Test Escape to close modals
  - Test arrow keys in composite widgets
  - Verify no keyboard traps
```

**Capabilities:**
- Generates Playwright tests for keyboard flows
- Maps expected vs actual focus order
- Tests all interactive patterns (accordions, menus, modals)
- Documents keyboard shortcuts

---

### 4. `screen-reader-simulator`
**Role:** Predict screen reader output
**When:** Component development, content review

```yaml
# .claude/agents/screen-reader-simulator.yaml
name: screen-reader-simulator
description: Analyzes accessibility tree and predicts screen reader announcements
outputs:
  - Accessibility tree visualization
  - Predicted announcements (NVDA/VoiceOver style)
  - Role/name/state audit
  - Live region behavior analysis
```

**Capabilities:**
- Parses DOM and generates accessibility tree
- Predicts what screen readers will announce
- Identifies missing accessible names
- Validates live region implementations
- Suggests ARIA improvements

---

### 5. `content-a11y-reviewer`
**Role:** Content-level accessibility
**When:** Content creation in Sanity Studio
**Integration:** Sanity Content Agent

```yaml
# .claude/agents/content-a11y-reviewer.yaml
name: content-a11y-reviewer
description: Reviews content for accessibility (readability, alt text, structure)
checks:
  - Alt text quality (not just presence)
  - Reading level (target: Grade 8-9)
  - Link text clarity
  - Heading structure in rich text
  - Language identification
  - Abbreviation expansion
```

**Capabilities:**
- Scores alt text quality (descriptive vs decorative)
- Calculates reading level (Flesch-Kincaid)
- Flags generic link text ("click here", "read more")
- Validates content structure

---

## Sanity Content Agent Integration

### What Sanity Provides

From the [Sanity Agent Toolkit](https://github.com/sanity-io/agent-toolkit):

- **MCP Server** at `mcp.sanity.io` — direct access to content, schemas, datasets
- **Agent Skills** — best practices for content modeling, SEO/AEO
- **Content Agent** — natural language content operations (find, create, update)

### Integration Points

#### 1. Schema-Level Accessibility Rules

Add accessibility validation to Sanity schemas:

```ts
// sanity/schemas/source.ts
export default defineType({
  name: 'source',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    },
    {
      name: 'description',
      type: 'text',
      description: 'Describe the resource for screen reader users',
      validation: (Rule) => Rule.required().min(20).max(500),
    },
    {
      name: 'url',
      type: 'url',
      // Agent rule: validate link is accessible
    },
  ],
})
```

#### 2. Content Agent for Accessibility Audits

Use Sanity Content Agent to:

```
"Find all sources with descriptions shorter than 20 characters"
"List all sources missing URLs"
"Update sources where type is 'Book' to ensure they have ISBN in description"
"Find content with reading level above grade 10"
```

#### 3. Agent Actions for Accessibility Transforms

Configure [Agent Actions](https://www.sanity.io/learn/course/day-one-with-sanity-studio/ai-agent-actions) in Studio:

- **Generate alt text** for images
- **Simplify** complex text to lower reading level
- **Expand abbreviations** in content
- **Generate** accessible link text from URLs

#### 4. MCP Server Integration

Connect the Sanity MCP server to our agents:

```ts
// .serena/config.ts or agent config
mcpServers: [
  {
    name: 'sanity',
    url: 'https://mcp.sanity.io',
    auth: 'oauth', // Uses Sanity CLI credentials
  }
]
```

This allows our `content-a11y-reviewer` agent to:
- Query all content via GROQ
- Batch-check accessibility issues
- Stage fixes for review (not auto-publish)

---

## Workflow Integration

### Pre-commit
```
1. a11y-auditor → scans changed components
2. Blocks commit if critical violations
```

### Pull Request
```
1. a11y-auditor → full scan of affected pages
2. wcag-reviewer → adversarial review of new code
3. keyboard-navigator → generates/runs keyboard tests
4. Report posted to PR
```

### Content Publishing (Sanity)
```
1. content-a11y-reviewer → checks draft content
2. Agent Actions → suggests improvements
3. Content Agent → can batch-fix simple issues
4. Human reviews staged changes before publish
```

### Weekly Audit
```
1. a11y-auditor → full site scan
2. screen-reader-simulator → generates announcement report
3. Accessibility debt tracked in Linear
```

---

## Implementation Priority

| Agent | Priority | Complexity | Value |
|-------|----------|------------|-------|
| a11y-auditor | 1 | Low | High — catches 30-50% of issues |
| content-a11y-reviewer | 2 | Medium | High — content is often neglected |
| wcag-reviewer | 3 | Medium | Medium — catches design issues |
| keyboard-navigator | 4 | Medium | High — keyboard is critical |
| screen-reader-simulator | 5 | High | Medium — supplements manual testing |

---

## References

- [Sanity Agent Toolkit](https://github.com/sanity-io/agent-toolkit)
- [Sanity Content Agent Docs](https://www.sanity.io/docs/content-agent)
- [Agent Actions Tutorial](https://www.sanity.io/learn/course/day-one-with-sanity-studio/ai-agent-actions)
- [W3C ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
