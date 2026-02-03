import { useState, useRef, useEffect } from "react";

const COLORS = {
  bg: "#FAFAF9",
  surface: "#FFFFFF",
  surfaceHover: "#F7F7F5",
  border: "#E8E5E0",
  borderLight: "#F0EDE8",
  text: "#1C1917",
  textSecondary: "#57534E",
  textTertiary: "#A8A29E",
  accent: "#1a365d",
  accentLight: "#2b6cb0",
  accentSubtle: "#EBF0F7",
  link: "#2b6cb0",
  linkHover: "#1a365d",
  tagStandard: "#FEF3C7",
  tagStandardText: "#92400E",
  tagLegislation: "#FCE7F3",
  tagLegislationText: "#9D174D",
  tagGuide: "#DBEAFE",
  tagGuideText: "#1E40AF",
  tagTool: "#D1FAE5",
  tagToolText: "#065F46",
  tagBook: "#F3E8FF",
  tagBookText: "#6B21A8",
  tagArticle: "#FEE2E2",
  tagArticleText: "#991B1B",
  tagOther: "#F1F5F9",
  tagOtherText: "#475569",
};

const TYPE_COLORS = {
  Standard: { bg: COLORS.tagStandard, text: COLORS.tagStandardText },
  Legislation: { bg: COLORS.tagLegislation, text: COLORS.tagLegislationText },
  Guide: { bg: COLORS.tagGuide, text: COLORS.tagGuideText },
  Tool: { bg: COLORS.tagTool, text: COLORS.tagToolText },
  Toolkit: { bg: COLORS.tagTool, text: COLORS.tagToolText },
  Book: { bg: COLORS.tagBook, text: COLORS.tagBookText },
  "Book/Blog": { bg: COLORS.tagBook, text: COLORS.tagBookText },
  Article: { bg: COLORS.tagArticle, text: COLORS.tagArticleText },
  Reference: { bg: COLORS.tagGuide, text: COLORS.tagGuideText },
  Checklist: { bg: COLORS.tagTool, text: COLORS.tagToolText },
  Tutorial: { bg: COLORS.tagGuide, text: COLORS.tagGuideText },
  Overview: { bg: COLORS.tagOther, text: COLORS.tagOtherText },
  Framework: { bg: COLORS.tagStandard, text: COLORS.tagStandardText },
  Introduction: { bg: COLORS.tagOther, text: COLORS.tagOtherText },
  Official: { bg: COLORS.tagLegislation, text: COLORS.tagLegislationText },
  FAQ: { bg: COLORS.tagOther, text: COLORS.tagOtherText },
  Survey: { bg: COLORS.tagArticle, text: COLORS.tagArticleText },
  Documentation: { bg: COLORS.tagGuide, text: COLORS.tagGuideText },
  Draft: { bg: COLORS.tagStandard, text: COLORS.tagStandardText },
  Patterns: { bg: COLORS.tagTool, text: COLORS.tagToolText },
  Catalog: { bg: COLORS.tagArticle, text: COLORS.tagArticleText },
  Guidelines: { bg: COLORS.tagLegislation, text: COLORS.tagLegislationText },
  Guidance: { bg: COLORS.tagOther, text: COLORS.tagOtherText },
  Research: { bg: COLORS.tagArticle, text: COLORS.tagArticleText },
  Summary: { bg: COLORS.tagOther, text: COLORS.tagOtherText },
  Analysis: { bg: COLORS.tagArticle, text: COLORS.tagArticleText },
  History: { bg: COLORS.tagOther, text: COLORS.tagOtherText },
  Podcast: { bg: COLORS.tagArticle, text: COLORS.tagArticleText },
  Video: { bg: COLORS.tagArticle, text: COLORS.tagArticleText },
  Testing: { bg: COLORS.tagTool, text: COLORS.tagToolText },
  Template: { bg: COLORS.tagTool, text: COLORS.tagToolText },
};

const DATA = [
  {
    day: "Day 1",
    title: "Understanding Disability and Why Accessibility Matters",
    sections: [
      {
        lecture: "Lecture 1A",
        title: "Models of Disability",
        sources: [
          { name: "Scope UK: Social Model of Disability", url: "https://www.scope.org.uk/about-us/social-model-of-disability/", type: "Introduction", desc: "Clear explanation of the social model from a leading UK disability charity. Good starting point for students new to disability theory." },
          { name: "IAAP CPACC Body of Knowledge, pp. 4–12", url: "https://www.accessibilityassociation.org/sfsites/c/resource/CPACCBoK", type: "Reference", desc: "Comprehensive comparison of medical, social, biopsychosocial, economic, and charity models. The professional certification standard." },
          { name: "WHO International Classification of Functioning (ICF)", url: "https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health", type: "Framework", desc: "The WHO's biopsychosocial framework integrating biological, individual, and social perspectives. Foundational for modern disability policy." },
          { name: "Kat Holmes: Mismatch", url: "https://mitpress.mit.edu/9780262539487/mismatch/", type: "Book", desc: "Inclusive design philosophy framing disability as a mismatch between person and environment. Author led Microsoft's inclusive design program. ISBN 978-0262539487." },
        ],
      },
      {
        lecture: "Lecture 1B",
        title: "Accessibility Benefits Everyone",
        sources: [
          { name: 'Angela Glover Blackwell: "The Curb-Cut Effect"', url: "https://ssir.org/articles/entry/the_curb_cut_effect", type: "Article", desc: "Definitive article on how accessibility innovations benefit everyone. Stanford Social Innovation Review, 2017. Essential reading." },
          { name: '99% Invisible: "Curb Cuts" (Episode 308)', url: "https://99percentinvisible.org/episode/curb-cuts/", type: "Podcast", desc: "Engaging 30-minute audio history of curb cuts and the disability rights movement. Suitable for student assignment or class listening." },
          { name: "Microsoft Inclusive Design Toolkit", url: "https://inclusive.microsoft.design/", type: "Toolkit", desc: 'The "permanent, temporary, situational" spectrum of disability. Includes practical exercises for design teams.' },
          { name: 'Smithsonian: "Smashing Barriers to Access"', url: "https://americanhistory.si.edu/explore/stories/smashing-barriers-access-disability-activism-and-curb-cuts", type: "History", desc: "Historical account of disability activism and curb cuts from the National Museum of American History." },
          { name: 'PBS American Experience: "The Curb Cut Effect"', url: "https://www.pbs.org/wgbh/americanexperience/features/they-took-sledgehammers-sidewalks-heres-why-curb-cut-effect/", type: "Video", desc: "Short documentary on the history and impact of curb cuts. Good visual supplement for lecture." },
        ],
      },
    ],
  },
  {
    day: "Day 1",
    title: "Regulatory Ecosystem",
    sections: [
      {
        lecture: "Lecture 2",
        title: "How WCAG, EN 301 549, EU Accessibility Act, and Norwegian Law Connect",
        sources: [
          { name: "uutilsynet.no: Regulations (English)", url: "https://www.uutilsynet.no/english/regulations/278", type: "Official", desc: "Norwegian Authority for Universal Design of ICT's explanation of the regulatory framework. Authoritative for Norwegian context." },
          { name: "ETSI EN 301 549 V3.2.1", url: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf", type: "Standard", desc: "Harmonized European standard for ICT accessibility. Extends WCAG to hardware, software, and documentation." },
          { name: "EU Directive 2019/882 — European Accessibility Act", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882", type: "Legislation", desc: "Full text. Covers products and services including e-commerce, banking, transport, e-books." },
          { name: "EU Directive 2016/2102 — Web Accessibility Directive", url: "https://eur-lex.europa.eu/eli/dir/2016/2102/oj", type: "Legislation", desc: "Public sector web accessibility directive. Basis for much of EN 301 549's scope." },
          { name: "Likestillings- og diskrimineringsloven § 17–18", url: "https://lovdata.no/dokument/NL/lov/2017-06-16-51", type: "Legislation", desc: "Norwegian Equality and Anti-Discrimination Act sections on universal design. The domestic legal basis." },
        ],
      },
    ],
  },
  {
    day: "Day 1",
    title: "WCAG 2.2 Structure",
    sections: [
      {
        lecture: "Lecture 3",
        title: "POUR Principles, Success Criteria, Conformance Levels",
        sources: [
          { name: "W3C WCAG 2.2 Specification", url: "https://www.w3.org/TR/WCAG22/", type: "Standard", desc: "The normative specification. Students should learn to navigate this document directly." },
          { name: "W3C Understanding WCAG 2.2", url: "https://www.w3.org/WAI/WCAG22/Understanding/", type: "Guide", desc: "Non-normative companion explaining intent and techniques for each success criterion. Essential for practical application." },
          { name: "W3C WCAG 2.2 Quick Reference", url: "https://www.w3.org/WAI/WCAG22/quickref/", type: "Reference", desc: "Filterable, customizable view of all success criteria. Best tool for day-to-day lookup." },
          { name: "uutilsynet.no: WCAG-standarden", url: "https://www.uutilsynet.no/wcag-standarden/wcag-standarden/86", type: "Reference", desc: "Norwegian Authority's overview of all WCAG criteria with public/private sector applicability. In Norwegian." },
          { name: "WebAIM: WCAG 2 Checklist", url: "https://webaim.org/standards/wcag/checklist", type: "Checklist", desc: "Practical checklist format. Good for audit exercises." },
        ],
      },
    ],
  },
  {
    day: "Day 2",
    title: "WCAG Perceivable + Operable",
    sections: [
      {
        lecture: "Lecture 4",
        title: "Perceivable (Guidelines 1.1–1.4)",
        sources: [
          { name: "W3C Understanding 1.1: Text Alternatives", url: "https://www.w3.org/WAI/WCAG22/Understanding/text-alternatives", type: "Guide", desc: "Deep dive into alt text requirements. Includes decision tree for when and how to provide alternatives." },
          { name: "W3C Understanding 1.4: Distinguishable", url: "https://www.w3.org/WAI/WCAG22/Understanding/distinguishable", type: "Guide", desc: "Covers contrast, resize text, images of text, reflow, text spacing. The most design-relevant perceivable guideline." },
          { name: "WebAIM: Contrast Checker", url: "https://webaim.org/resources/contrastchecker/", type: "Tool", desc: "Free online tool for checking color contrast against WCAG AA and AAA requirements." },
          { name: "uutilsynet.no: Løsningsforslag for 1.4.3 Kontrast", url: "https://www.uutilsynet.no/wcag-standarden/143-kontrast-minimum-niva-aa/121", type: "Guide", desc: "Norwegian Authority's solution examples for contrast requirements. In Norwegian." },
          { name: "W3C WAI Images Tutorial", url: "https://www.w3.org/WAI/tutorials/images/", type: "Tutorial", desc: "Comprehensive tutorial on accessible images, including complex images, groups of images, and image maps." },
        ],
      },
      {
        lecture: "Lecture 5",
        title: "Operable (Guidelines 2.1–2.5)",
        sources: [
          { name: "W3C Understanding 2.1: Keyboard Accessible", url: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard-accessible", type: "Guide", desc: "Keyboard accessibility requirements including keyboard traps, shortcuts, and character key shortcuts." },
          { name: "W3C Understanding 2.4: Navigable", url: "https://www.w3.org/WAI/WCAG22/Understanding/navigable", type: "Guide", desc: "Skip links, page titles, focus order, link purpose, headings and labels, focus visible. Core navigation accessibility." },
          { name: "WebAIM: Keyboard Accessibility", url: "https://webaim.org/techniques/keyboard/", type: "Guide", desc: "Practical guide to keyboard testing and common issues. Good for hands-on exercises." },
          { name: "Deque: Focus Management", url: "https://www.deque.com/blog/focus-management-accessibility-fundamentals/", type: "Article", desc: "Deep dive into focus management for single-page applications and dynamic content." },
          { name: "W3C Understanding 2.5.8: Target Size (Minimum)", url: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum", type: "Guide", desc: "New in WCAG 2.2. Minimum 24×24 CSS pixel target size. Highly relevant for mobile design." },
        ],
      },
    ],
  },
  {
    day: "Day 3",
    title: "Accessibility Lab + EN 301 549 + EU Accessibility Act",
    sections: [
      {
        lecture: null,
        title: "EN 301 549 and EU Accessibility Act",
        sources: [
          { name: "ETSI EN 301 549 V3.2.1 (Full Standard)", url: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf", type: "Standard", desc: "Complete European standard. Chapter 9 covers web, Chapter 11 software, Chapter 12 documentation." },
          { name: "European Commission: European Accessibility Act", url: "https://ec.europa.eu/social/main.jsp?catId=1202", type: "Overview", desc: "Official EU summary of EAA scope, timeline, and requirements. Good for lecture introduction." },
          { name: "European Disability Forum: EAA FAQ", url: "https://www.edf-feph.org/european-accessibility-act-eaa/", type: "FAQ", desc: "Practical FAQ on EAA implementation from a disability rights perspective." },
          { name: "Funka: EN 301 549 Explained", url: "https://www.funka.com/en/research-and-innovation/archive---research-projects/en-301-549/", type: "Guide", desc: "Accessible explanation of how EN 301 549 relates to WCAG and what it adds." },
        ],
      },
      {
        lecture: null,
        title: "Assistive Technology Background",
        sources: [
          { name: "WebAIM: Screen Reader User Survey #10", url: "https://webaim.org/projects/screenreadersurvey10/", type: "Survey", desc: "Latest survey of screen reader usage patterns, browser combinations, and user preferences." },
          { name: "Deque: Screen Readers and Browsers", url: "https://www.deque.com/blog/screen-readers-and-browsers/", type: "Reference", desc: "Which screen readers work with which browsers. Critical for testing setup." },
          { name: "Apple: VoiceOver User Guide", url: "https://support.apple.com/guide/voiceover/welcome/mac", type: "Documentation", desc: "Official Apple documentation for VoiceOver on Mac and iOS." },
          { name: "NVDA User Guide", url: "https://www.nvaccess.org/files/nvda/documentation/userGuide.html", type: "Documentation", desc: "Official documentation for NVDA, the most popular free Windows screen reader." },
        ],
      },
    ],
  },
  {
    day: "Day 4",
    title: "WCAG Understandable + Robust, WCAG 3.0, Design Patterns",
    sections: [
      {
        lecture: "Lecture 6",
        title: "Understandable (Guideline 3) + Robust (Guideline 4)",
        sources: [
          { name: "W3C Understanding 3.1: Readable", url: "https://www.w3.org/WAI/WCAG22/Understanding/readable", type: "Guide", desc: "Language of page, language of parts, unusual words, abbreviations, reading level." },
          { name: "W3C Understanding 3.2: Predictable", url: "https://www.w3.org/WAI/WCAG22/Understanding/predictable", type: "Guide", desc: "On focus, on input, consistent navigation, consistent identification. Key for interaction design." },
          { name: "W3C Understanding 3.3: Input Assistance", url: "https://www.w3.org/WAI/WCAG22/Understanding/input-assistance", type: "Guide", desc: "Error identification, labels/instructions, error suggestion, error prevention. Critical for form design." },
          { name: "W3C Understanding 4.1: Compatible", url: "https://www.w3.org/WAI/WCAG22/Understanding/compatible", type: "Guide", desc: "Name/role/value, status messages. Ensures assistive technology compatibility." },
        ],
      },
      {
        lecture: "Lecture 7",
        title: "WCAG 3.0 Preview",
        sources: [
          { name: "W3C WCAG 3.0 Introduction", url: "https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/", type: "Overview", desc: "Official W3C introduction to WCAG 3.0 goals, structure, and timeline." },
          { name: "W3C WCAG 3.0 Working Draft", url: "https://www.w3.org/TR/wcag-3.0/", type: "Draft", desc: "Current working draft. Not stable — will change significantly." },
          { name: "TPGi: WCAG 3.0 Explainer", url: "https://www.tpgi.com/wcag-3-0-what-you-need-to-know/", type: "Article", desc: "What's different in WCAG 3.0: outcomes vs. success criteria, scoring, broader scope." },
          { name: "Deque: WCAG 3.0 Overview", url: "https://www.deque.com/blog/wcag-3-0-is-years-away-lets-break-down-whats-coming/", type: "Article", desc: "Practical overview of WCAG 3.0 changes from an accessibility consultancy perspective." },
        ],
      },
      {
        lecture: "Lecture 8",
        title: "Accessible Design Patterns",
        sources: [
          { name: "W3C ARIA Authoring Practices Guide (APG)", url: "https://www.w3.org/WAI/ARIA/apg/", type: "Patterns", desc: "The definitive resource for accessible widget patterns. Working examples for tabs, modals, menus, carousels, and more." },
          { name: "W3C APG: Patterns Index", url: "https://www.w3.org/WAI/ARIA/apg/patterns/", type: "Reference", desc: "All design patterns with keyboard interaction requirements and code examples." },
          { name: "WAI-ARIA 1.2 Specification", url: "https://www.w3.org/TR/wai-aria-1.2/", type: "Standard", desc: "The ARIA specification. Reference for roles, states, and properties." },
          { name: "MDN: WAI-ARIA Basics", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics", type: "Tutorial", desc: "Mozilla's practical introduction to ARIA. Good for designers needing ARIA concepts without deep coding." },
          { name: "Inclusive Components — Heydon Pickering", url: "https://inclusive-components.design/", type: "Book/Blog", desc: "Practical patterns for inclusive web interfaces. More design-focused than APG." },
        ],
      },
    ],
  },
  {
    day: "Day 5",
    title: "Adjacent Regulations",
    sections: [
      {
        lecture: "Lecture 11",
        title: "Dark Patterns",
        sources: [
          { name: "deceptive.design — Harry Brignull", url: "https://www.deceptive.design/", type: "Catalog", desc: "The original dark patterns catalog. Comprehensive taxonomy with examples." },
          { name: "Digital Services Act, Article 25", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022R2065", type: "Legislation", desc: "EU prohibition on dark patterns in online platforms. Bans manipulative design that distorts user decisions." },
          { name: "EDPB Guidelines 3/2022 on Dark Patterns", url: "https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-32022-dark-patterns-social-media-platform_en", type: "Guidelines", desc: "European Data Protection Board guidance on dark patterns in social media interfaces. GDPR enforcement perspective." },
          { name: "Forbrukertilsynet: Villedende handelspraksis", url: "https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-om-villedende-handelspraksis", type: "Guidance", desc: "Norwegian Consumer Authority guidance on misleading commercial practices. Norwegian context." },
          { name: "ACM: Dark Patterns at Scale", url: "https://dl.acm.org/doi/10.1145/3274448", type: "Research", desc: "Academic study of dark pattern prevalence. Good for evidence-based discussion." },
        ],
      },
      {
        lecture: "Lecture 12",
        title: "GDPR for Designers",
        sources: [
          { name: "GDPR Article 25: Data Protection by Design and by Default", url: "https://gdpr-info.eu/art-25-gdpr/", type: "Legislation", desc: "The legal basis for Privacy by Design requirements." },
          { name: "Ann Cavoukian: Privacy by Design — 7 Foundational Principles", url: "https://www.ipc.on.ca/wp-content/uploads/resources/7foundationalprinciples.pdf", type: "Framework", desc: "The original Privacy by Design framework. Predates GDPR but forms its conceptual basis." },
          { name: "Smashing Magazine: Privacy UX", url: "https://www.smashingmagazine.com/2019/04/privacy-ux-better-notifications/", type: "Guide", desc: "Practical design patterns for privacy-respecting interfaces. Excellent for interaction designers." },
          { name: "ICO: Privacy by Design Guidance", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/guide-to-accountability-and-governance/accountability-and-governance/data-protection-by-design-and-default/", type: "Guidance", desc: "UK Information Commissioner's Office guidance. Practical implementation advice." },
          { name: "CNIL: GDPR Developer Guide", url: "https://www.cnil.fr/en/cnil-publishes-gdpr-guide-developers", type: "Guide", desc: "French data protection authority's guide for developers. Includes UI/UX considerations." },
        ],
      },
      {
        lecture: "Lecture 13",
        title: "AI Act",
        sources: [
          { name: "European Commission: AI Act Overview", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai", type: "Overview", desc: "Official EU introduction to the AI Act's risk-based approach." },
          { name: "EU AI Act — Full Text (Regulation 2024/1689)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689", type: "Legislation", desc: "Complete text of the regulation." },
          { name: "Future of Life Institute: AI Act Summary", url: "https://artificialintelligenceact.eu/", type: "Summary", desc: "Clear summary of risk categories, prohibited practices, and high-risk system requirements." },
          { name: "Stanford HAI: AI Act Analysis", url: "https://hai.stanford.edu/policy/ai-index/eu-ai-act", type: "Analysis", desc: "Academic analysis of the AI Act's implications for AI development." },
          { name: "AI Act Compliance Checker", url: "https://artificialintelligenceact.eu/ai-act-compliance-checker/", type: "Tool", desc: "Interactive tool to determine if an AI system is in scope and what category it falls under." },
        ],
      },
      {
        lecture: "Lecture 14",
        title: "Digital Markets Act",
        sources: [
          { name: "European Commission: Digital Markets Act", url: "https://digital-strategy.ec.europa.eu/en/policies/digital-markets-act", type: "Overview", desc: "Official EU summary of DMA goals, gatekeeper designation, and obligations." },
          { name: "DMA — Full Text (Regulation 2022/1925)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022R1925", type: "Legislation", desc: "Complete text of the regulation." },
          { name: "Usercentrics: DMA Summary", url: "https://usercentrics.com/knowledge-hub/digital-markets-act-dma/", type: "Summary", desc: "Practical summary of gatekeeper obligations relevant to choice architecture and interoperability." },
          { name: "Stratechery: DMA Analysis", url: "https://stratechery.com/tag/digital-markets-act/", type: "Analysis", desc: "Tech industry perspective on DMA implications. Good for understanding business impact." },
        ],
      },
    ],
  },
];

const SUPPLEMENTARY = [
  {
    title: "Browser-Based Testing Tools",
    sources: [
      { name: "axe DevTools", url: "https://www.deque.com/axe/devtools/", type: "Tool", desc: "Industry-standard browser extension for automated accessibility testing. Free version available. Published by Deque." },
      { name: "WAVE", url: "https://wave.webaim.org/", type: "Tool", desc: "Free web accessibility evaluation tool. Shows errors inline on the page. Published by WebAIM." },
      { name: "Accessibility Insights", url: "https://accessibilityinsights.io/", type: "Tool", desc: "Free browser extension with automated checks and guided manual testing. Published by Microsoft." },
      { name: "Colour Contrast Analyser", url: "https://www.tpgi.com/color-contrast-checker/", type: "Tool", desc: "Desktop application for checking color contrast. Works with any application, not just web. Published by TPGi." },
    ],
  },
  {
    title: "Norwegian-Specific Resources",
    sources: [
      { name: "uutilsynet.no: Testregler", url: "https://www.uutilsynet.no/wcag-standarden/wcag-standarden/86", type: "Testing", desc: "Norwegian Authority's test rules for each WCAG criterion. Authoritative for compliance." },
      { name: "uutilsynet.no: Verktøy for testing", url: "https://www.uutilsynet.no/veiledning/verktoy-testing/215", type: "Guide", desc: "Norwegian Authority's guide to testing tools." },
      { name: "uutilsynet.no: Slik sjekker du nettstedet selv", url: "https://www.uutilsynet.no/veiledning/slik-sjekker-du-nettstedet-selv/227", type: "Guide", desc: "Self-check guide for websites. In Norwegian." },
      { name: "uutilsynet.no: Tilgjengelighetserklæring", url: "https://www.uutilsynet.no/tilgjengelighetserklaring/tilgjengelighetserklaring/1169", type: "Template", desc: "Accessibility statement requirements and template for Norwegian organizations." },
    ],
  },
  {
    title: "Books for Deeper Study",
    sources: [
      { name: "A Web for Everyone", url: "https://rosenfeldmedia.com/books/a-web-for-everyone/", type: "Book", desc: "Sarah Horton & Whitney Quesenbery. Comprehensive guide to accessible web design covering both principles and practices." },
      { name: "Inclusive Design Patterns", url: "https://www.smashingmagazine.com/printed-books/inclusive-front-end-design-patterns/", type: "Book", desc: "Heydon Pickering. Practical patterns for building inclusive interfaces. Code-focused but design-relevant." },
      { name: "Mismatch: How Inclusion Shapes Design", url: "https://mitpress.mit.edu/9780262539487/mismatch/", type: "Book", desc: "Kat Holmes. Philosophical foundation for inclusive design. Based on work at Microsoft." },
      { name: "Accessibility for Everyone", url: "https://abookapart.com/products/accessibility-for-everyone", type: "Book", desc: "Laura Kalbag. Accessible introduction to web accessibility for non-specialists. Good starter text." },
      { name: "Form Design Patterns", url: "https://www.smashingmagazine.com/printed-books/form-design-patterns/", type: "Book", desc: "Adam Silver. Deep dive into accessible form design. Highly practical for interaction designers." },
    ],
  },
  {
    title: "Professional Certification Resources",
    sources: [
      { name: "IAAP CPACC Body of Knowledge", url: "https://www.accessibilityassociation.org/sfsites/c/resource/CPACCBoK", type: "Reference", desc: "Comprehensive reference for foundational accessibility certification. Covers disability models, laws, and management strategies." },
      { name: "IAAP WAS Body of Knowledge", url: "https://www.accessibilityassociation.org/sfsites/c/resource/WASBoK_PDF", type: "Reference", desc: "Technical certification reference. Covers WCAG implementation, testing, and remediation." },
      { name: "Deque University", url: "https://dequeuniversity.com/", type: "Tool", desc: "Comprehensive online training for IAAP certifications and accessibility skills." },
    ],
  },
];

function TypeBadge({ type }) {
  const colors = TYPE_COLORS[type] || { bg: COLORS.tagOther, text: COLORS.tagOtherText };
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: "100px",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      backgroundColor: colors.bg,
      color: colors.text,
      whiteSpace: "nowrap",
      lineHeight: "20px",
    }}>
      {type}
    </span>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 4, flexShrink: 0, opacity: 0.5 }}>
      <path d="M3.5 1.5H1.5V10.5H10.5V8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6L10.5 1.5M10.5 1.5H7.5M10.5 1.5V4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{
      transition: "transform 200ms ease",
      transform: open ? "rotate(0deg)" : "rotate(-90deg)",
      flexShrink: 0,
    }}>
      <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SourceRow({ source, isLast }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "12px",
        padding: "14px 20px 14px 70px",
        borderBottom: isLast ? "none" : `1px solid ${COLORS.borderLight}`,
        backgroundColor: hovered ? COLORS.surfaceHover : "transparent",
        transition: "background-color 150ms ease",
        alignItems: "start",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
          {source.url ? (
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: COLORS.link,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "22px",
                display: "inline-flex",
                alignItems: "center",
              }}
              onMouseEnter={e => e.currentTarget.style.color = COLORS.linkHover}
              onMouseLeave={e => e.currentTarget.style.color = COLORS.link}
            >
              {source.name}
              <ExternalIcon />
            </a>
          ) : (
            <span style={{ fontWeight: 500, fontSize: "14px", lineHeight: "22px", color: COLORS.text }}>
              {source.name}
            </span>
          )}
          <TypeBadge type={source.type} />
        </div>
        <p style={{
          margin: 0,
          fontSize: "13px",
          lineHeight: "20px",
          color: COLORS.textSecondary,
          maxWidth: "680px",
        }}>
          {source.desc}
        </p>
      </div>
    </div>
  );
}

function LectureSection({ section }) {
  return (
    <div style={{ marginBottom: 0 }}>
      <div style={{
        padding: "10px 20px",
        backgroundColor: COLORS.surfaceHover,
        borderBottom: `1px solid ${COLORS.borderLight}`,
        display: "flex",
        alignItems: "baseline",
        gap: 10,
      }}>
        {section.lecture && (
          <span style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: COLORS.textTertiary,
            flexShrink: 0,
          }}>
            {section.lecture}
          </span>
        )}
        <span style={{
          fontSize: "14px",
          fontWeight: 600,
          color: COLORS.text,
        }}>
          {section.title}
        </span>
        <span style={{
          fontSize: "12px",
          color: COLORS.textTertiary,
          marginLeft: "auto",
          flexShrink: 0,
        }}>
          {section.sources.length} sources
        </span>
      </div>
      {section.sources.map((s, i) => (
        <SourceRow key={i} source={s} isLast={i === section.sources.length - 1} />
      ))}
    </div>
  );
}

function DayGroup({ group, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(defaultOpen ? "auto" : "0px");

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight + "px");
      const t = setTimeout(() => setHeight("auto"), 250);
      return () => clearTimeout(t);
    } else {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight + "px");
        requestAnimationFrame(() => setHeight("0px"));
      }
    }
  }, [open]);

  const totalSources = group.sections.reduce((sum, s) => sum + s.sources.length, 0);

  return (
    <div style={{
      backgroundColor: COLORS.surface,
      borderRadius: "10px",
      border: `1px solid ${COLORS.border}`,
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "18px 20px",
          border: "none",
          background: "none",
          cursor: "pointer",
          textAlign: "left",
          borderBottom: open ? `1px solid ${COLORS.border}` : "1px solid transparent",
          transition: "border-color 200ms ease",
        }}
      >
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: "8px",
          backgroundColor: COLORS.accentSubtle,
          color: COLORS.accent,
          fontSize: "13px",
          fontWeight: 700,
          flexShrink: 0,
          fontFamily: "'JetBrains Mono', 'SF Mono', 'Cascadia Code', monospace",
        }}>
          {group.day.replace("Day ", "D")}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "16px", fontWeight: 600, color: COLORS.text, lineHeight: "24px" }}>
            {group.title}
          </div>
          <div style={{ fontSize: "12px", color: COLORS.textTertiary, marginTop: 1 }}>
            {group.sections.length} {group.sections.length === 1 ? "section" : "sections"} · {totalSources} sources
          </div>
        </div>
        <ChevronIcon open={open} />
      </button>
      <div
        ref={contentRef}
        style={{
          height,
          overflow: "hidden",
          transition: "height 250ms ease",
        }}
      >
        {group.sections.map((section, i) => (
          <LectureSection key={i} section={section} />
        ))}
      </div>
    </div>
  );
}

function SupplementarySection({ section }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight + "px");
      const t = setTimeout(() => setHeight("auto"), 250);
      return () => clearTimeout(t);
    } else {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight + "px");
        requestAnimationFrame(() => setHeight("0px"));
      }
    }
  }, [open]);

  return (
    <div style={{
      backgroundColor: COLORS.surface,
      borderRadius: "10px",
      border: `1px solid ${COLORS.border}`,
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "16px 20px",
          border: "none",
          background: "none",
          cursor: "pointer",
          textAlign: "left",
          borderBottom: open ? `1px solid ${COLORS.border}` : "1px solid transparent",
          transition: "border-color 200ms ease",
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "15px", fontWeight: 600, color: COLORS.text }}>
            {section.title}
          </div>
        </div>
        <span style={{ fontSize: "12px", color: COLORS.textTertiary, marginRight: 4 }}>
          {section.sources.length}
        </span>
        <ChevronIcon open={open} />
      </button>
      <div ref={contentRef} style={{ height, overflow: "hidden", transition: "height 250ms ease" }}>
        {section.sources.map((s, i) => (
          <SourceRow key={i} source={s} isLast={i === section.sources.length - 1} />
        ))}
      </div>
    </div>
  );
}

// Merge day groups that share the same day
function mergeDayGroups(data) {
  const merged = [];
  data.forEach(item => {
    const existing = merged.find(m => m.day === item.day);
    if (existing) {
      existing.sections = [...existing.sections, ...item.sections];
      existing.title = existing.title;
    } else {
      merged.push({ ...item, sections: [...item.sections] });
    }
  });
  // Update titles for merged groups
  merged.forEach(m => {
    const items = data.filter(d => d.day === m.day);
    if (items.length > 1) {
      m.title = items.map(i => i.title).join(" · ");
    }
  });
  return merged;
}

export default function SourceCompendium() {
  const merged = mergeDayGroups(DATA);
  const totalSources = DATA.reduce((sum, g) => sum + g.sections.reduce((s2, sec) => s2 + sec.sources.length, 0), 0) +
    SUPPLEMENTARY.reduce((sum, s) => sum + s.sources.length, 0);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: COLORS.bg,
      fontFamily: "'Source Sans 3', 'Source Sans Pro', 'Segoe UI', system-ui, -apple-system, sans-serif",
      color: COLORS.text,
      WebkitFontSmoothing: "antialiased",
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:focus-visible { outline: 2px solid ${COLORS.accentLight}; outline-offset: 2px; border-radius: 4px; }
        a:focus-visible { outline: 2px solid ${COLORS.accentLight}; outline-offset: 2px; border-radius: 2px; }
      `}</style>

      {/* Header */}
      <header style={{
        borderBottom: `1px solid ${COLORS.border}`,
        backgroundColor: COLORS.surface,
      }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "48px 24px 40px" }}>
          <div style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: COLORS.accentLight,
            marginBottom: 12,
          }}>
            EU Accessibility and Digital Regulations
          </div>
          <h1 style={{
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "40px",
            color: COLORS.accent,
            marginBottom: 12,
            fontFamily: "'Source Serif 4', 'Georgia', serif",
          }}>
            Source Compendium
          </h1>
          <p style={{
            fontSize: "16px",
            lineHeight: "26px",
            color: COLORS.textSecondary,
            maxWidth: 560,
          }}>
            A curated collection of {totalSources} authoritative sources organized by lecture topic — for lecture preparation, student reading, and further exploration.
          </p>
          <div style={{
            marginTop: 20,
            fontSize: "12px",
            color: COLORS.textTertiary,
          }}>
            Last updated January 2026
          </div>
        </div>
      </header>

      {/* Main content */}
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 24px 80px" }}>
        {/* Day sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {merged.map((group, i) => (
            <DayGroup key={i} group={group} defaultOpen={i === 0} />
          ))}
        </div>

        {/* Supplementary */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{
            fontSize: "13px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: COLORS.textTertiary,
            marginBottom: 16,
            paddingLeft: 4,
          }}>
            Supplementary Resources
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {SUPPLEMENTARY.map((section, i) => (
              <SupplementarySection key={i} section={section} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: 56,
          paddingTop: 24,
          borderTop: `1px solid ${COLORS.border}`,
          fontSize: "12px",
          color: COLORS.textTertiary,
          lineHeight: "20px",
        }}>
          Source compendium compiled for the EU Accessibility and Digital Regulations training module.
          All links verified as of January 2026.
        </footer>
      </main>
    </div>
  );
}
