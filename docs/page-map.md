# Page-to-Template Mapping

This document maps extracted React reference pages to their planned WordPress template targets.

## Static pages
| Reference package | WordPress target | Notes |
|---|---|---|
| `homepage` | `front-page.php` (or `templates/home.html` if block theme) | Uses global header/footer template parts. |
| `about-us` | `page-about-us.php` (or page template) | Keep content sectionized for block pattern reuse. |
| `contact` | `page-contact.php` (or page template) | Preserve form semantics/accessibility labels. |
| `features` | `page-features.php` (or page template) | Candidate source for reusable feature-grid pattern. |
| `industry-detail` | `single-industry.php` + `single-industry.html` (hybrid) | Model as structured content via an `industry` CPT (with optional taxonomy in later phase). |

## Collections
| Reference package | WordPress target | Notes |
|---|---|---|
| `blog-overview` | `archive-blog.php` | Also reused as structural base for case-study archive. |
| `case-study-detail` | `single-case_study.php` | Backed by `case_study` custom post type. |

## Phase 0 decisions captured
- Content model: use explicit CPTs `blog`, `case_study`, and `industry` (for industry-detail as structured content).
- Template strategy: use a hybrid approach (classic PHP + block templates in `templates/*.html`).
- Locale set for Polylang prep: EN (default), NL, DE, FR, ES.
