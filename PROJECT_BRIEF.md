# Project Brief: React-to-WordPress Theme Migration

## 1) Project context
This repository contains page implementations currently delivered as React-based web pages. The next project phase is to convert these pages into a lightweight, maintainable WordPress theme while preserving the existing design and UX.

## 2) Project goals
1. Build a lightweight custom WordPress theme from the current pages in this repository.
2. Reuse ready-made WordPress blocks where practical, without introducing a heavy page-builder dependency.
3. Add two content collections:
   - Blog
   - Case Studies
4. Use one shared global header and one shared global footer across all pages.
5. Prepare the project for multilingual rollout in 5 locales:
   - EN (default/base)
   - NL
   - DE
   - FR
   - ES (Spanish)
6. Use Polylang for multilingual support.

## 3) Scope (Phase 1)
### In scope
- Define theme architecture and development standards.
- Convert existing page templates into WordPress theme templates.
- Implement a shared header/footer system.
- Register custom post types for Blog and Case Studies.
- Use existing “blog overview” layout as the archive overview pattern for both content collections.
- Implement single templates for blog and case-study detail pages.
- Enable basic block-based editing with curated reusable block patterns.
- Add Polylang configuration foundation (locale registration and translation-ready theme setup).
- Produce initial project documentation and team workflow guidance.

### Out of scope (for this phase)
- Advanced visual page builder setup.
- Complex custom block development unless needed for parity.
- Full content migration/import from legacy CMS sources.
- Full multilingual content translation (only framework/setup in Phase 1).

## 4) Content model
### Custom post types
- `post` (existing WP posts) can be used for Blog, OR a dedicated `blog` CPT can be introduced if stricter separation is needed.
- `case_study` CPT for Case Studies.

### Recommendation
For long-term editorial clarity, use two explicit CPTs:
- `blog`
- `case_study`

This makes archive routing, labels, permissions, and future filtering more predictable.

## 5) Technical approach
### Theme strategy
- Start from a minimal custom theme (no heavy framework).
- Use native WordPress templating and `theme.json` for design tokens where possible.
- Keep CSS and JS modular and page-agnostic.
- Prefer server-rendered templates for core pages; hydrate React only where interactivity requires it.

### Reusable UI
- Use Gutenberg core blocks first.
- Add curated block patterns for repeated sections (hero, feature grids, CTAs, testimonials, related content).
- Add only minimal custom blocks if a section cannot be represented with core blocks/patterns.

### Header/Footer unification
- Implement a single global header and footer in shared template parts.
- Remove per-page header/footer variants and consolidate navigation and contact elements.

### Collections and templates
- `archive-blog.php` and `single-blog.php` (or equivalent template hierarchy output).
- `archive-case_study.php` and `single-case_study.php`.
- Reuse the existing blog overview structure for both archives with configurable labels and query source.

### Multilingual
- Integrate Polylang.
- Ensure strings are translation-ready using WordPress i18n functions.
- Configure locales: EN, NL, DE, FR, ES.
- Ensure language switcher placement is included in global header.

## 6) Non-functional requirements
- Performance-first (minimal dependencies, optimized assets, no unnecessary JS).
- Accessibility baseline (semantic structure, heading order, keyboard nav, alt text support).
- SEO baseline (proper title/meta support, semantic templates, clean URLs).
- Maintainability (clear file structure, coding standards, reusable components/patterns).

## 7) Proposed delivery plan
### Milestone 1: Foundation
- Theme scaffold
- Global styles and tokens
- Shared header/footer
- Base page templates

### Milestone 2: Content types and templates
- Blog + Case Study CPTs
- Archive + single templates
- Shared archive overview component/pattern

### Milestone 3: Blocks and editorial UX
- Curated reusable block patterns
- Editor constraints and allowed blocks

### Milestone 4: Multilingual foundation
- Polylang installation/config
- Locale setup and translation-ready strings
- Language switcher integration

### Milestone 5: QA and launch prep
- Cross-browser/device QA
- Performance/accessibility checks
- Content entry guide and handover

## 8) Risks and mitigations
- **Risk:** React-only sections do not map cleanly to native blocks.  
  **Mitigation:** Introduce minimal custom blocks only for true gaps.
- **Risk:** Inconsistent styling across migrated templates.  
  **Mitigation:** Centralize tokens and shared components before full migration.
- **Risk:** Multilingual edge cases in custom templates.  
  **Mitigation:** Make all labels/strings translatable from day one and validate with Polylang early.

## 9) Definition of done (Phase 1)
- Lightweight WordPress theme scaffolded and running.
- Existing key pages migrated as theme templates.
- One global header and one global footer in use across the site.
- Blog and Case Study collections working with archive/detail pages.
- Reusable block patterns available for editors.
- Polylang configured for EN/NL/DE/FR/ES with translation-ready templates.
- Documentation established (`README.md`, `AGENTS.md`, and this brief).
