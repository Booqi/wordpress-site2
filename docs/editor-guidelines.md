# Editor Block & Pattern Guidelines

## Allowed core block set
The theme restricts the editor to a curated core block set through `allowed_block_types_all` in `theme/functions.php`. This keeps authoring simple, consistent, and performance-focused.

Allowed block families include:
- Text/content: paragraph, heading, list, quote, pullquote, table
- Media: image, gallery, video, embed, file, media-text
- Layout: group, columns/column, spacer, separator, cover
- Actions/navigation: buttons/button, navigation, template-part, social links
- Query/post template blocks used by archive and related-content sections
- Escape hatches for controlled cases: HTML and shortcode

## Reusable patterns
The theme registers one dedicated pattern category: **WP Site2 Sections**.

Included reusable patterns:
1. Hero
2. Feature Grid
3. CTA Section
4. Testimonial Section
5. Related Content

These are implemented in `theme/functions.php` with translation-ready strings.

## Backend editor style parity
Editor style parity is provided by:
- `add_editor_style( 'assets/css/editor.css' )`
- `theme/assets/css/editor.css` importing shared utility styles and pattern spacing

## When custom blocks are allowed
Custom blocks are permitted **only for true capability gaps** where core blocks + patterns cannot meet requirements.

A custom block is allowed only if all criteria are met:
1. Required UX cannot be represented by a composition of allowed core blocks and existing patterns.
2. The feature is reused in at least two templates or content types.
3. Accessibility and translation requirements are documented before implementation.
4. The block adds minimal frontend JavaScript and no heavy runtime dependency.
5. The implementation includes editor guidance and fallback behavior.
