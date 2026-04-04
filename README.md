# WordPress Theme Migration Starter

This repository is the starting point for converting existing React page builds into a lightweight custom WordPress theme.

## Project objectives
- Convert current page builds into a performant WordPress theme.
- Standardize the site on **one global header** and **one global footer**.
- Reuse ready-made blocks and patterns where possible.
- Support two collections:
  - Blog
  - Case Studies
- Reuse the existing blog overview layout as an archive overview pattern for both collections.
- Prepare multilingual support with Polylang in 5 locales:
  - EN (default)
  - NL
  - DE
  - FR
  - ES

## Current repository contents
At this stage, the repo contains exported page packages (ZIP files), including:
- homepage
- about-us
- contact
- features
- industry-detail
- case-study-detail
- blog-overview

These serve as visual/structural references for the WordPress theme conversion.

## Delivery philosophy
- Keep the theme lean and maintainable.
- Prefer native WordPress capabilities (templates, blocks, patterns).
- Avoid heavy page builders.
- Use React only for isolated interactive components when necessary.

## Proposed implementation outline
1. **Theme foundation**
   - Create custom theme scaffold.
   - Define shared assets, design tokens, and base template structure.
2. **Shared layout**
   - Implement unified header/footer template parts.
3. **Content collections**
   - Register Blog and Case Study content types.
   - Build archive and single templates.
4. **Reusable blocks/patterns**
   - Curate editor blocks and reusable patterns for repeated page sections.
5. **Multilingual prep**
   - Configure Polylang and translation-ready strings.
6. **QA**
   - Validate responsive behavior, accessibility, and performance.

## Suggested next steps
- Unpack page ZIPs into a source/reference directory.
- Define final theme file structure.
- Decide whether Blog should be native `post` or a dedicated `blog` CPT.
- Build Milestone 1 (theme scaffold + global header/footer).

## Documentation
- `PROJECT_BRIEF.md`: High-level project brief, scope, and milestones.
- `TASK_OVERVIEW.md`: Step-by-step execution checklist to run the migration one task at a time.
- `AGENTS.md`: Collaboration and implementation rules for contributors/agents.
- `docs/editor-guidelines.md`: Allowed block list, reusable pattern inventory, and custom-block decision criteria.

---
If you want, the next step can be a concrete technical scaffold proposal (folders, templates, CPT registration approach, and rollout checklist).
