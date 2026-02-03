# EU Accessibility and Digital Regulations Training Module
## Graduate-Level Design Education — Two-Week Module Plan

---

## Part 1: Revised Schedule with Lab Visit Integration

### Week 1: Foundations, WCAG Deep Dive, and Firsthand Experience

#### Day 1 (3 hrs): Why Accessibility Matters + Regulatory Landscape + WCAG Foundations

**Lecture 1: Understanding Disability and Why Accessibility Matters (50 min)**

*Part A: Models of Disability (20 min)*
- **Medical model**: Disability as individual deficit to be "fixed"
  - Strengths: Acknowledges biological reality, drives medical research
  - Limitations: Places burden on individual, ignores environmental barriers
- **Social model**: Disability created by barriers in society, not by impairments
  - Key insight: A wheelchair user isn't disabled by their legs — they're disabled by stairs
  - Digital parallel: A screen reader user isn't disabled by blindness — they're disabled by inaccessible websites
  - Strengths: Shifts responsibility to designers and society
  - Limitations: Can underemphasize real physical/cognitive differences
- **Biopsychosocial model**: Integration of biological, psychological, and social factors
  - WHO's International Classification of Functioning (ICF)
  - Recognizes both impairment and environmental context
- **Why this matters for designers**: The social model frames accessibility as *our* responsibility — we create the barriers, we can remove them

*Part B: Accessibility Benefits Everyone (30 min)*
- The curb cut effect: digital equivalents
- Situational impairments: bright sunlight, holding a baby, noisy environments
- The permanent–temporary–situational spectrum
- Aging populations and universal design
- Ethical and business case

**Lecture 2: The Regulatory Ecosystem (40 min)**
- Visual map: How WCAG, EN 301 549, EU Accessibility Act, and Norwegian law connect
- Norway's likestillings- og diskrimineringsloven and forskrift om universell utforming
- Public vs private sector requirements
- Enforcement landscape: uutilsynet's role

**Lecture 3: WCAG 2.2 Structure (45 min)**
- Four principles (POUR): Perceivable, Operable, Understandable, Robust
- Guidelines, success criteria, and conformance levels (A, AA, AAA)
- How to read the specification and "Understanding" documents
- Normative vs informative content

**Hands-on Exercise (45 min)**
- Evaluate a simple Norwegian website against 5–6 success criteria
- Introduce browser DevTools accessibility panel
- First exposure to manual testing workflow

---

#### Day 2 (3 hrs): WCAG Perceivable + Operable

**Lecture 4: Perceivable (45 min)**
- 1.1 Text Alternatives
- 1.2 Time-based Media (captions, audio descriptions)
- 1.3 Adaptable (info and relationships, meaningful sequence)
- 1.4 Distinguishable (contrast, resize text, spacing, images of text)
- Key AA success criteria designers must know

**Hands-on: Perceivable Audit (45 min)**
- Audit exercise: contrast checking, alt text review, semantic structure
- Tools: Colour Contrast Analyser, browser DevTools

**Lecture 5: Operable (45 min)**
- 2.1 Keyboard Accessible
- 2.2 Enough Time
- 2.3 Seizures and Physical Reactions
- 2.4 Navigable (skip links, focus order, link purpose)
- 2.5 Input Modalities (pointer cancellation, target size)

**Hands-on: Operable Testing (45 min)**
- Keyboard-only navigation exercise
- Tab order and focus visibility analysis
- Identifying keyboard traps

---

#### Day 3 (3 hrs): Accessibility Lab Visit + EN 301 549 + EU Accessibility Act

**Lab Visit (90 min)**
- Hands-on with screen readers (JAWS, NVDA, VoiceOver)
- Braille displays demonstration
- Switch devices and alternative input
- Magnification software
- Structured exploration with guiding questions:
  - What surprised you about how these tools work?
  - What design assumptions did you notice being challenged?
  - How would your current design projects perform with these tools?

**Debrief Discussion (30 min)**
- Group reflection on lab experience
- Connecting tool behavior to WCAG requirements

**Lecture 6: EN 301 549 — Beyond WCAG (30 min)**
- What EN 301 549 adds: functional performance statements
- Hardware and software beyond web
- Documentation and support requirements
- Annex A mapping to WCAG
- When to reference EN 301 549 vs WCAG directly

**Lecture 7: EU Accessibility Act + Norwegian Implementation (30 min)**
- Products and services in scope
- Key dates and transition periods (2025 and beyond)
- Norwegian adoption through existing accessibility law
- What "accessibility requirements" means in practice
- Private sector obligations

---

### Week 2: Practice, Mobile Accessibility, Adjacent Regulations, Synthesis

#### Day 4 (3 hrs): WCAG Understandable + Robust, Mobile Screen Readers, Design Patterns

**Lecture 8: Understandable and Robust (30 min)**
- 3.1 Readable (language identification)
- 3.2 Predictable (consistent navigation, identification)
- 3.3 Input Assistance (error identification, labels, prevention)
- 4.1 Compatible (parsing, name-role-value, status messages)
- Common failures and how to avoid them

**Lecture 9: WCAG 3.0 Preview (30 min)**
- Why a new version: addressing gaps in 2.x
- Structural differences: outcomes vs success criteria
- Scoring model: Bronze/Silver/Gold (replacing A/AA/AAA)
- Broader scope: mobile, wearables, XR, voice
- Timeline: still years away from recommendation
- What it means: continue with 2.2, prepare for 3.0 concepts

**Hands-on Workshop: VoiceOver/TalkBack (60 min)**
- Paired exercise: one student navigates eyes-closed, partner observes
- Tasks:
  1. Navigate to NRK.no, find today's headlines
  2. Find tomorrow's weather on yr.no
  3. Fill out a simple search form
  4. Navigate a service menu
- Switch roles
- Document: what worked, where you got stuck, what you would change

**Lecture 10: Accessible Design Patterns (30 min)**
- Forms: labels, grouping, error handling
- Navigation: landmarks, skip links, breadcrumbs
- Modals and dialogs: focus management
- Dynamic content: ARIA live regions
- ARIA: when to use, when not to use, common pitfalls

**Workshop: Redesign Exercise (30 min)**
- Groups receive an inaccessible component
- Begin redesign work, documenting decisions against WCAG criteria

---

#### Day 5 (3 hrs): Adjacent Regulations + Synthesis

**Lecture 11: Deceptive/Manipulative Design — Dark Patterns (30 min)**
- Definition and common taxonomy (Brignull's patterns)
- Regulatory responses:
  - Digital Services Act Article 25
  - Unfair Commercial Practices Directive
  - Consumer Rights Directive
  - Norwegian markedsføringsloven §§ 6, 7, 8
- Examples designers should recognize and avoid
- Designer responsibility and professional ethics

**Lecture 12: GDPR Essentials for Designers (30 min)**
- Core principles: lawful basis, consent, transparency
- Privacy by Design (Article 25) — embedding privacy from the start
- Privacy by Default — most protective settings as default
- Just-in-time consent and layered notices
- Where GDPR intersects with accessibility (consent interfaces, privacy notices)
- Dark patterns in consent flows: what the EDPB says

**Lecture 13: EU AI Act Overview (30 min)**
- Risk-based framework: unacceptable, high-risk, limited, minimal
- High-risk AI: what qualifies, obligations for providers
- Transparency requirements: chatbots, deepfakes, AI-generated content
- Human oversight requirements
- Where interaction designers fit: designing for transparency and control
- Timeline: in force August 2024, full application August 2026

**Lecture 14: Digital Markets Act — Why Designers Should Care (30 min)**
- Gatekeepers: who they are, what core platform services they provide
- Key obligations:
  - Interoperability for messaging
  - User choice for defaults and pre-installed apps
  - Data portability
  - No self-preferencing
- Choice architecture implications
- Design opportunities: alternative app stores, default selection screens

**Synthesis Exercise (60 min)**
- Case study: An AI-powered public service with consent flows
- Groups map which regulations apply where
- Identify accessibility, privacy, and fairness requirements
- Brief presentations

**Wrap-up (20 min)**
- Groups share Day 4 redesign work
- Peer feedback

---

#### Day 6 (3 hrs): Review + Assessment

**Review Session (60 min)**
- Structured walkthrough of key concepts
- Disability models: social model framing, why it matters for design
- WCAG: principles, most important success criteria, testing approach
- Regulatory ecosystem: which regulation covers what
- Norwegian context: uutilsynet, tilgjengelighetserklæring
- Student questions

**Buffer/Clarification (15 min)**
- Final questions before assessment

**Assessment (90 min)**
- Written assessment (see Part 4 below)

**Debrief (15 min)**
- How this connects to upcoming project work
- Resources for continued learning

---

### Self-Study Structure

**Week 1 Self-Study (20 hrs)**
- Read assigned WCAG 2.2 success criteria with "Understanding" documents (4 hrs)
- Complete structured VoiceOver/TalkBack tutorial at home (3 hrs)
- Conduct structured audit of a self-selected Norwegian public service website (6 hrs)
- Read WCAG 3.0 introduction and explainer (2 hrs)
- Explore uutilsynet.no resources (3 hrs)
- Reflection writing on lab visit (2 hrs)

**Week 2 Self-Study (20 hrs)**
- Prepare group work from Day 4/5 exercises (8 hrs)
- Read curated articles on GDPR, AI Act, DMA (4 hrs)
- Assessment preparation (6 hrs)
- Optional: deeper exploration of areas of interest (2 hrs)

---

## Part 2: Curated Reading List

### Disability Models and Foundations

**Essential Background**
1. **Social Model of Disability** — Scope UK
   https://www.scope.org.uk/about-us/social-model-of-disability/
   *Clear introduction to the social model*

2. **Models of Disability** — CPACC Body of Knowledge excerpt
   https://www.accessibilityassociation.org/sfsites/c/resource/CPACCBoK
   *Pages 4-12 cover medical, social, biopsychosocial, and other models*

3. **WHO International Classification of Functioning, Disability and Health (ICF)**
   https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health
   *Framework integrating biological and social perspectives*

### Core WCAG Resources

**Primary Sources**
1. **WCAG 2.2 Specification** — W3C Recommendation
   https://www.w3.org/TR/WCAG22/
   *Focus on: Success criteria at levels A and AA*

2. **Understanding WCAG 2.2** — W3C
   https://www.w3.org/WAI/WCAG22/Understanding/
   *Read the Understanding documents for assigned success criteria*

3. **WCAG 3 Introduction** — W3C WAI
   https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/
   *Orientation to upcoming changes*

**Norwegian Resources (uutilsynet.no)**
4. **WCAG-standarden** — Oversikt og krav
   https://www.uutilsynet.no/wcag-standarden/wcag-standarden/86
   *Norwegian interpretation of WCAG requirements*

5. **Oppbygging av WCAG 2.1** — Struktur forklart
   https://www.uutilsynet.no/wcag-standarden/oppbygging-av-wcag-21/139
   *Clear explanation of WCAG structure in Norwegian*

6. **Løsningsforslag per krav** — Praktiske eksempler
   https://www.uutilsynet.no/veiledning/losningsforslag-krav/1366
   *Solution examples for each requirement*

7. **Oversikt over testregler for nettsteder**
   https://www.uutilsynet.no/regelverk/oversikt-over-testregler-nettsteder/709
   *Testing rules used in official supervision*

8. **Verktøy for uu-testing av nettstaden din**
   https://www.uutilsynet.no/veiledning/verktoy-uu-testing-av-nettstaden-din/1377
   *Testing tools and techniques*

9. **Sjekk nettstedet ditt selv** — Enkel veiledning
   https://www.uutilsynet.no/regelverk/sjekk-nettstedet-ditt-selv/708
   *Self-check guide for websites*

10. **Universell utforming av apper**
    https://www.uutilsynet.no/regelverk/universell-utforming-av-apper/230
    *Accessibility requirements for mobile apps*

### EN 301 549 and EU Accessibility Act

11. **EN 301 549 V3.2.1** — Accessibility requirements for ICT products and services
    https://www.etsi.org/deliver/etsi_en/301500_301599/301549/
    *European standard harmonized with WCAG*

12. **European Accessibility Act** — Directive (EU) 2019/882
    https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882
    *EU directive on accessibility requirements for products and services*

### Deceptive Design / Dark Patterns

13. **Harry Brignull's Deceptive Design** — Pattern catalog
    https://www.deceptive.design/
    *Original taxonomy and examples*

14. **Digital Services Act Article 25** — Online interface design
    https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022R2065
    *EU prohibition on deceptive design*

15. **EDPB Guidelines 3/2022** — Dark patterns in social media platforms
    https://edpb.europa.eu/our-work-tools/documents/public-consultations/2022/guidelines-32022-dark-patterns-social-media_en
    *Data protection perspective on manipulative design*

16. **Forbrukertilsynet: Villedende handelspraksis** (Norwegian)
    https://www.forbrukertilsynet.no/veileder-om-de-generelle-kravene-i-markedsforingsloven/markedsforingsloven-forbudet-mot-villedende-handlinger
    *Norwegian consumer protection rules against misleading practices*

### GDPR for Designers

17. **GDPR Article 25** — Data protection by design and by default
    https://gdpr-info.eu/art-25-gdpr/
    *Legal text with commentary*

18. **Privacy by Design Framework** — Ann Cavoukian (foundational paper)
    https://www.ipc.on.ca/wp-content/uploads/resources/7foundationalprinciples.pdf
    *Seven principles of Privacy by Design*

19. **Smashing Magazine: Privacy UX** — Practical design guidance
    https://www.smashingmagazine.com/2019/04/privacy-ux-aware-design-framework/
    *Design-focused privacy implementation*

### EU AI Act

20. **AI Act Introduction** — European Commission
    https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
    *Official overview of the AI Act*

21. **AI Act High-Level Summary** — Future of Life Institute
    https://artificialintelligenceact.eu/high-level-summary/
    *Accessible summary with risk categories explained*

22. **AI Act Compliance Checker** — Interactive tool
    https://artificialintelligenceact.eu/assessment/eu-ai-act-compliance-checker/
    *Determine obligations for specific AI systems*

### Digital Markets Act

23. **Digital Markets Act** — About the DMA
    https://digital-markets-act.ec.europa.eu/about-dma_en
    *Official European Commission overview*

24. **DMA Gatekeepers and Obligations** — Summary
    https://usercentrics.com/knowledge-hub/digital-markets-act-dma-impacts-user-privacy-and-consent-management/
    *Practical summary of gatekeeper obligations*

### Additional Recommended Reading

25. **A Web for Everyone** — Sarah Horton and Whitney Quesenbery
    *Excellent introduction to inclusive design principles*

26. **Inclusive Design Patterns** — Heydon Pickering
    *Practical component patterns for accessibility*

27. **Mismatch: How Inclusion Shapes Design** — Kat Holmes
    *Design philosophy around inclusive thinking*

---

## Part 3: Screen Reader Exercise Materials

### VoiceOver (macOS/iOS) Setup and Exercise

**Setup Instructions**
1. **Mac**: System Settings → Accessibility → VoiceOver → Enable
   - Shortcut: Command + F5
   - Basic navigation: VO (Control + Option) + arrow keys
2. **iPhone/iPad**: Settings → Accessibility → VoiceOver → Enable
   - Shortcut: Triple-click home/side button (if configured)
   - Gestures: Swipe right (next), swipe left (previous), double-tap (activate)

**Practice Tasks**
Complete these tasks and document your experience:

1. **News Navigation**
   - Navigate to nrk.no
   - Find today's top headline
   - Read the first paragraph of the top story
   - Questions: How did you identify the headline? What told you it was the main story?

2. **Weather Lookup**
   - Navigate to yr.no
   - Find tomorrow's weather for Oslo
   - Questions: Could you easily locate the day selector? Was the temperature clearly announced?

3. **Form Completion**
   - Go to a search engine
   - Type a search query and submit
   - Questions: Was the search field easy to find? Did you know when results appeared?

4. **Service Navigation**
   - Open Ruter's app or website
   - Try to plan a trip from Nationaltheatret to Grünerløkka
   - Questions: Could you identify departure and arrival fields? How was the journey displayed?

**Documentation Template**
For each task, record:
- Task completion: Yes / Partially / No
- Time taken: ___ minutes
- Main obstacles encountered
- What worked well in the design
- One specific change you would make

### TalkBack (Android) Setup and Exercise

**Setup Instructions**
1. Settings → Accessibility → TalkBack → Enable
2. Complete the built-in tutorial (recommended)
3. Basic gestures:
   - Swipe right: next item
   - Swipe left: previous item
   - Double-tap: activate
   - Two-finger swipe up: home screen

**Practice Tasks**
Same tasks as VoiceOver exercise, adapted for Android apps where relevant.

### In-Class Paired Exercise (Day 4)

**Format**: 60 minutes total, pairs of students

**Round 1 (25 min)**
- Student A: Uses phone with screen off, navigates using VoiceOver or TalkBack
- Student B: Observes, takes notes, does NOT help unless completely stuck (2+ min)
- Tasks: Complete 2 of the practice tasks above

**Round 2 (25 min)**
- Switch roles
- Complete 2 different tasks

**Group Discussion (10 min)**
- What was most surprising?
- What barriers did you encounter that WCAG success criteria address?
- How will this change how you approach your design work?

---

## Part 4: Assessment Design

### Assessment Overview
- **Format**: Written, in-class
- **Duration**: 90 minutes
- **Grading**: Pass/fail
- **Pass threshold**: Demonstrate competent understanding of WCAG structure and application; show awareness of adjacent regulations

### Part A: Knowledge Check (35-40 minutes, 40% of total)

#### Section A1: Multiple Choice (15 questions, 1 point each)

*Sample questions:*

1. The social model of disability suggests that:
   - a) Disability is primarily a medical condition requiring treatment
   - b) Disability is created by barriers in society and the environment ✓
   - c) Disability affects only a small percentage of the population
   - d) Disability can be eliminated through assistive technology alone

2. What are the four principles of WCAG 2.2?
   - a) Perceivable, Operable, Understandable, Reliable
   - b) Perceivable, Operable, Usable, Robust
   - c) Perceivable, Operable, Understandable, Robust ✓
   - d) Perceivable, Observable, Understandable, Robust

3. Which conformance level is typically required by Norwegian accessibility regulations?
   - a) Level A only
   - b) Level AA ✓
   - c) Level AAA
   - d) Levels A, AA, and AAA equally

4. A user cannot complete a form because error messages only use color to indicate problems. Which WCAG principle is violated?
   - a) Operable
   - b) Perceivable ✓
   - c) Understandable
   - d) Robust

5. EN 301 549 differs from WCAG primarily by:
   - a) Having more success criteria at Level AA
   - b) Including requirements for hardware and documentation ✓
   - c) Requiring Level AAA conformance
   - d) Applying only to government websites

6. The EU Accessibility Act primarily applies to:
   - a) Only public sector websites
   - b) Only mobile applications
   - c) Products and services including e-commerce and banking ✓
   - d) Only assistive technology devices

7. Which of the following is a "dark pattern"?
   - a) Using clear labels on form fields
   - b) Showing a countdown timer that restarts when it ends ✓
   - c) Providing a skip navigation link
   - d) Using high-contrast color schemes

8. Under GDPR's Privacy by Design principle, privacy should be:
   - a) Added after user testing is complete
   - b) Embedded from the initial design stage ✓
   - c) Only considered for European users
   - d) Optional for small organizations

9. The EU AI Act classifies AI systems as "high-risk" when they:
   - a) Use machine learning algorithms
   - b) Are used in areas like employment, education, or law enforcement ✓
   - c) Process more than 1000 users per day
   - d) Are developed outside the EU

10. Which regulation requires gatekeepers to allow interoperability of messaging services?
    - a) GDPR
    - b) AI Act
    - c) Digital Markets Act ✓
    - d) Digital Services Act

11. A text link that says "Click here" violates which success criterion?
    - a) 1.1.1 Non-text Content
    - b) 2.4.4 Link Purpose (In Context) ✓
    - c) 3.2.3 Consistent Navigation
    - d) 4.1.2 Name, Role, Value

#### Section A2: Short Answer (5 questions, 3 points each)

1. Briefly explain the difference between the medical model and the social model of disability. Why does the social model matter for interaction designers? (3 points)

2. Name the four WCAG principles and briefly describe what one of them means. (3 points)

3. A user reports they cannot use keyboard navigation on your website. Which WCAG principle and guideline would you investigate? Explain briefly. (3 points)

4. What is the purpose of a tilgjengelighetserklæring (accessibility statement), and who is required to publish one in Norway? (3 points)

5. Name two things that the Digital Services Act prohibits in terms of interface design. (3 points)

---

### Part B: Applied Analysis (45-50 minutes, 60% of total)

**Instructions**: You will receive a screenshot and description of a Norwegian digital service interface. Answer all questions using specific references to WCAG success criteria and design principles.

---

### Scenario A: Lånekassen — Student Loan Application

**Context**: A student is applying for their first student loan through Lånekassen's online portal. The screenshot shows a multi-step form where users enter personal and financial information.

**Observed Issues in the Interface:**
- Form labels are positioned below input fields
- Required fields are indicated only with a red asterisk (*)
- Error messages appear in a modal overlay that disappears after 3 seconds
- The current step indicator uses only color (green = complete, gray = incomplete)
- Help text appears on hover only
- The "Neste" (Next) button has low contrast (light gray text on white)
- No skip navigation link to main content
- Tab order jumps from header navigation to footer, skipping the form

**Questions:**

1. **Identify and Cite (20 points)**
   Identify FOUR accessibility issues in this interface. For each issue:
   - Describe the problem
   - Cite the relevant WCAG 2.2 success criterion (e.g., "1.4.3 Contrast (Minimum)")
   - State the conformance level (A, AA, or AAA)

2. **Impact Analysis (15 points)**
   Choose TWO of the issues you identified. For each:
   - Explain the barrier it creates for users
   - Identify who is affected (consider both permanent disabilities and situational impairments)
   - Explain why this matters for a student loan service specifically

3. **Design Solutions (20 points)**
   Propose specific design changes to fix each of the FOUR issues. Be concrete:
   - Describe exactly what the improved design would look like or how it would behave
   - Reference any WCAG techniques that inform your solution

4. **Adjacent Regulations (5 points)**
   Review the interface for potential dark patterns or GDPR concerns:
   - Are there any manipulative design elements?
   - Are there any privacy concerns with how information is collected or presented?
   - If no issues exist, explain why the design appears acceptable

---

### Scenario B: Entur — Travel Planning

**Context**: A user is planning a train journey from Oslo to Bergen using Entur's travel planner. The screenshot shows the search results page with multiple journey options.

**Observed Issues in the Interface:**
- Journey times are displayed only visually in a timeline diagram without text equivalents
- "Best price" tags use green text on a light green background
- The "Kjøp billett" (Buy ticket) buttons use custom styling that doesn't receive visible focus
- Platform information uses abbreviations without expansion (e.g., "Sp. 5")
- Price comparison requires horizontal scrolling on mobile, but scroll indicators are not visible
- Alternative routes are collapsed by default with no indication of how many alternatives exist
- Real-time delay information appears in red text only
- The departure time filter uses a custom slider without keyboard accessibility

**Questions:**
Same four-question format as Scenario A.

---

### Scenario C: UDI — Immigration Application

**Context**: A person is applying for a residence permit through UDI's application portal. The screenshot shows a document upload step where applicants must submit identification documents.

**Observed Issues in the Interface:**
- File upload accepts only specific formats but requirements are listed in a tooltip
- Maximum file size (5MB) is mentioned only after upload fails
- Progress indicator during upload shows only a spinning animation
- "Delete uploaded file" is a small trash icon with no text label
- Instructions are in Norwegian only, despite UDI serving international applicants
- The page times out after 15 minutes with no warning, losing all entered data
- Error messages use technical language ("FileSizeException: Payload exceeded")
- Supporting document checklist uses checkboxes that aren't properly associated with labels
- "Mandatory" vs "optional" documents are distinguished only by bold text

**Questions:**
Same four-question format as Scenario A.

---

### Grading Rubric for Part B

**Issue Identification and Citation (20 points)**
- 5 points each for correctly identifying 4 distinct issues
- Must include specific WCAG success criterion number
- Must indicate conformance level
- Partial credit for correct identification with incomplete citation

**Impact Analysis (15 points)**
- Clear explanation of barrier created (3 points each)
- Appropriate identification of affected users (3 points each)
- Connection to service context (1.5 points each)

**Design Solutions (20 points)**
- Concrete, implementable solutions (3 points each)
- Reference to WCAG techniques or best practices (2 points each)

**Adjacent Regulations (5 points)**
- Correct identification of dark patterns or privacy issues, OR
- Well-reasoned explanation of why design is acceptable
- Reference to relevant regulation (DSA, GDPR, markedsføringsloven)

**Pass Criteria**
To pass, students must:
- Correctly identify at least 3 of 4 issues with proper WCAG citations
- Demonstrate understanding of user impact for at least one issue
- Propose at least 2 feasible design solutions
- Show awareness of at least one adjacent regulation

---

## Part 5: Format Recommendations

### Lectures
- Use visual diagrams showing regulatory relationships
- Include screenshots of real Norwegian services (good and bad examples)
- Incorporate short video clips of assistive technology in use
- Keep slides text-light; provide detailed handouts separately

### Hands-on Exercises
- Provide structured worksheets with clear success criteria
- Use real Norwegian public services as test subjects
- Include both automated tool checks and manual testing
- Pair students for peer learning

### Group Work
- Mix students with different technical backgrounds
- Assign clear roles (facilitator, note-taker, presenter)
- Provide templates for documenting audit findings
- Build in presentation time for cross-group learning

### Assessment
- Make scenarios realistic and relevant to Norwegian context
- Provide sufficient time (90 min) for thoughtful responses
- Include clear point allocations to guide depth of answers
- Allow reference to WCAG quick reference card during exam

---

## Part 6: Materials to Develop (for Claude Code Phase)

### Priority 1: Core Lecture Materials
- [ ] Day 1 slides: "Understanding Disability" — models of disability with examples
- [ ] Day 1 slides: "Why Accessibility Matters" with Norwegian examples
- [ ] Day 1 slides: "Regulatory Ecosystem" visual map
- [ ] Day 2 slides: "Perceivable and Operable" with component examples
- [ ] Day 3 slides: "EN 301 549 and EU Accessibility Act"
- [ ] Day 4 slides: "WCAG 3.0 Preview" and "Accessible Design Patterns"
- [ ] Day 5 slides: Adjacent regulations overview (4 short modules)

### Priority 2: Exercise Materials
- [ ] Hands-on audit worksheet template
- [ ] Screen reader exercise instruction sheet (VoiceOver + TalkBack)
- [ ] Lab visit reflection prompts
- [ ] Component redesign exercise brief
- [ ] Day 5 synthesis case study materials

### Priority 3: Assessment Materials
- [ ] Final assessment document with all three scenarios
- [ ] Grading rubric and answer key
- [ ] WCAG quick reference card (permitted during exam)

### Priority 4: Student Reference Materials
- [ ] Regulatory relationship diagram (printable)
- [ ] WCAG 2.2 success criteria summary (designer-focused)
- [ ] Norwegian accessibility law quick reference
- [ ] Reading list as formatted handout

---

*Module developed for graduate-level interaction design education*
*Jurisdiction: Norway (EEA context)*
*Last updated: January 2026*
