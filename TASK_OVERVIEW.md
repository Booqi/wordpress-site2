# WordPress Migration Task Overview

Use this as a step-by-step execution checklist. Complete top to bottom.

## 0) Project setup and alignment
- [x] Create a working branch for migration work.
- [x] Unzip all page packages into `reference-pages/`.
- [x] Verify available pages and assets:
  - [x] homepage
  - [x] about-us
  - [x] contact
  - [x] features
  - [x] industry-detail
  - [x] case-study-detail
  - [x] blog-overview
- [x] Create a page-to-template mapping document (`docs/page-map.md`).
- [x] Confirm content modeling decision:
  - [x] `blog` CPT (recommended) (selected)
  - [x] `case_study` CPT
  - [x] `industry` CPT for industry-detail
- [x] Confirm multilingual locales and naming:
  - [x] EN (default), NL, DE, FR, ES
- [x] Confirm template strategy baseline: hybrid classic PHP + block templates (`templates/*.html`).

## 1) Theme foundation
- [x] Scaffold custom theme structure:
  - [x] `style.css`
  - [x] `functions.php`
  - [x] `theme.json`
  - [x] `templates/`
  - [x] `template-parts/`
  - [x] `assets/css`, `assets/js`, `assets/img`
- [x] Add theme supports (title-tag, post-thumbnails, menus, etc.).
- [x] Register primary navigation location.
- [x] Add base global styles and tokens in `theme.json`.
- [x] Configure consistent container/grid utilities.

## 2) Global layout unification
- [x] Build one shared `header` template part.
- [x] Build one shared `footer` template part.
- [x] Remove per-page header/footer logic from migrated templates.
- [x] Ensure header/footer are included in all page templates.
- [x] Add language switcher slot in header (for future Polylang integration).

## 3) Content model and routing
- [ ] Register `blog` content type (or confirm native posts alternative).
- [ ] Register `case_study` content type.
- [ ] Register needed taxonomies:
  - [ ] categories and/or tags for blog
  - [ ] categories and/or tags for case studies
- [ ] Configure permalink slugs and archive behavior.
- [ ] Add CPT labels and admin menu icons.

## 4) Template implementation
- [ ] Build/convert core templates:
  - [ ] Home
  - [ ] About Us
  - [ ] Contact
  - [ ] Features
  - [ ] Industry Detail
- [ ] Build collection templates:
  - [ ] Blog archive
  - [ ] Blog single
  - [ ] Case Study archive
  - [ ] Case Study single
- [ ] Reuse blog-overview layout pattern for both archive pages.
- [ ] Add fallback/empty-state templates for archives.

## 5) Reusable blocks and editor experience
- [ ] Define allowed core block set.
- [ ] Create reusable block patterns:
  - [ ] Hero
  - [ ] Feature grid
  - [ ] CTA section
  - [ ] Testimonial section
  - [ ] Related content block
- [ ] Add editor style parity for backend preview.
- [ ] Document when custom blocks are allowed (only for true gaps).

## 6) Multilingual setup (Polylang)
- [ ] Install and activate Polylang.
- [ ] Add languages:
  - [ ] English (EN) as default
  - [ ] Dutch (NL)
  - [ ] German (DE)
  - [ ] French (FR)
  - [ ] Spanish (ES)
- [ ] Ensure all theme strings are translation-ready.
- [ ] Add language switcher to global header.
- [ ] Validate translated archives/singles resolve correctly.

## 7) QA and performance
- [ ] Responsive QA (mobile/tablet/desktop).
- [ ] Accessibility checks:
  - [ ] heading hierarchy
  - [ ] keyboard navigation
  - [ ] form labels
  - [ ] contrast
- [ ] Performance checks:
  - [ ] remove unused CSS/JS
  - [ ] optimize image handling
  - [ ] verify minimal frontend JS
- [ ] SEO checks:
  - [ ] semantic headings
  - [ ] title/meta compatibility
  - [ ] clean permalink structure

## 8) Content and launch readiness
- [ ] Create sample entries for Blog and Case Studies.
- [ ] Validate archive listing and single-page rendering with real content.
- [ ] Prepare editor handoff notes (how to create pages/posts/pattern usage).
- [ ] Prepare deployment checklist.
- [ ] Final sign-off with stakeholder review.

---

## Recommended execution order (quick start)
If you want to start immediately, do these first:
1. Unzip assets + create page map.
2. Scaffold theme + global header/footer.
3. Register CPTs and build archive/single templates.
4. Add reusable patterns.
5. Configure Polylang and run QA.
