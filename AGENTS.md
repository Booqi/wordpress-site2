# AGENTS.md

## Purpose
This document defines collaboration rules for humans and AI coding agents working in this repository while migrating React page builds into a lightweight WordPress theme.

## Project direction (authoritative)
1. Build a lightweight custom WordPress theme from existing page implementations.
2. Reuse ready-made WordPress blocks/patterns whenever possible.
3. Implement two collections:
   - Blog
   - Case Studies
4. Reuse the blog overview structure as archive overview for both collections.
5. Standardize all pages on one global header and one global footer.
6. Prepare multilingual support using Polylang for:
   - EN (base)
   - NL
   - DE
   - FR
   - ES
7. Avoid introducing a heavy page-builder dependency.

## Working principles
- Keep architecture simple, modular, and performance-first.
- Prefer native WordPress theme features over custom frameworks.
- Add custom blocks only when core blocks/patterns cannot satisfy requirements.
- Keep front-end assets minimal and cache-friendly.
- Maintain accessibility and semantic HTML standards.

## Technical conventions
- Use WordPress coding standards for PHP.
- Use `theme.json` for design tokens/settings where practical.
- Keep shared layout in reusable template parts (`header`, `footer`, common sections).
- Keep archive/detail templates for each collection clearly separated.
- Ensure all UI strings are translation-ready (`__()`, `_e()`, etc.).

## Content model guidance
- Preferred approach: explicit custom post types
  - `blog`
  - `case_study`
- If project constraints require native posts for Blog, document that decision in the README before implementation.

## Definition of done for major tasks
A task should be considered complete only when:
1. Code is implemented and lint/quality checks pass (when available).
2. Documentation is updated if behavior/structure changes.
3. Header/footer consistency is preserved.
4. Translation readiness is maintained.
5. No unnecessary dependency bloat is introduced.

## Commit guidance
- Use clear, scoped commit messages.
- Prefer small, reviewable commits aligned to one concern.
- Mention affected area, e.g.:
  - `docs: add migration project brief and contributor guide`
  - `theme: add global header/footer template parts`

## PR guidance
Each PR should include:
- What changed.
- Why it changed.
- Any architectural decisions made.
- Follow-up items and known limitations.

## Notes for future agents
- Start by reading `README.md` and `PROJECT_BRIEF.md` before implementing new work.
- If unsure between multiple implementation paths, choose the one with lower complexity and better maintainability.
