<?php
/**
 * Theme setup and shared utilities.
 *
 * @package WPSite2
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Set up theme defaults and register supported WordPress features.
 */
function wp_site2_theme_setup() {
	load_theme_textdomain( 'wp-site2', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'custom-logo' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'align-wide' );

	add_editor_style( 'assets/css/editor.css' );

	register_nav_menus(
		array(
			'primary' => __( 'Primary Navigation', 'wp-site2' ),
		)
	);
}
add_action( 'after_setup_theme', 'wp_site2_theme_setup' );

/**
 * Enqueue front-end assets.
 */
function wp_site2_enqueue_assets() {
	$theme_version = wp_get_theme()->get( 'Version' );

	wp_enqueue_style(
		'wp-site2-style',
		get_stylesheet_uri(),
		array(),
		$theme_version
	);

	wp_enqueue_style(
		'wp-site2-utilities',
		get_template_directory_uri() . '/assets/css/utilities.css',
		array( 'wp-site2-style' ),
		$theme_version
	);

	wp_enqueue_style(
		'wp-site2-homepage-template',
		get_template_directory_uri() . '/assets/css/homepage-template.css',
		array( 'wp-site2-utilities' ),
		$theme_version
	);
}
add_action( 'wp_enqueue_scripts', 'wp_site2_enqueue_assets' );

/**
 * Restrict editor blocks to a curated core set.
 *
 * @return array<string>
 */
function wp_site2_allowed_block_types() {
	return array(
		'core/paragraph',
		'core/heading',
		'core/list',
		'core/quote',
		'core/image',
		'core/gallery',
		'core/buttons',
		'core/button',
		'core/columns',
		'core/column',
		'core/group',
		'core/separator',
		'core/spacer',
		'core/cover',
		'core/media-text',
		'core/pullquote',
		'core/table',
		'core/file',
		'core/embed',
		'core/video',
		'core/site-logo',
		'core/site-title',
		'core/site-tagline',
		'core/navigation',
		'core/post-title',
		'core/post-featured-image',
		'core/post-excerpt',
		'core/post-content',
		'core/post-date',
		'core/query',
		'core/query-title',
		'core/query-no-results',
		'core/post-template',
		'core/pagination',
		'core/pagination-previous',
		'core/pagination-next',
		'core/pagination-numbers',
		'core/template-part',
		'core/social-links',
		'core/social-link',
		'core/html',
		'core/shortcode',
	);
}

/**
 * Apply curated block allow-list across the editor.
 *
 * @param bool|array $allowed_block_types Allowed block types.
 * @return array<string>
 */
function wp_site2_filter_allowed_block_types( $allowed_block_types ) {
	unset( $allowed_block_types );
	return wp_site2_allowed_block_types();
}
add_filter( 'allowed_block_types_all', 'wp_site2_filter_allowed_block_types' );

/**
 * Register reusable pattern category and block patterns.
 */
function wp_site2_register_block_patterns() {
	if ( ! function_exists( 'register_block_pattern_category' ) || ! function_exists( 'register_block_pattern' ) ) {
		return;
	}

	register_block_pattern_category(
		'wp-site2-sections',
		array(
			'label' => __( 'WP Site2 Sections', 'wp-site2' ),
		)
	);

	register_block_pattern(
		'wp-site2/hero',
		array(
			'title'       => __( 'Hero Section', 'wp-site2' ),
			'categories'  => array( 'wp-site2-sections' ),
			'description' => __( 'Introductory hero section with headline, supporting text, and primary call to action.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"align":"wide","className":"wp-site2-pattern-hero","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide wp-site2-pattern-hero"><!-- wp:heading {"level":1} -->
<h1>' . esc_html__( 'Build conversion-ready pages faster', 'wp-site2' ) . '</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Use this section at the top of a page to summarize the value proposition and direct visitors to the next step.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">' . esc_html__( 'Get Started', 'wp-site2' ) . '</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/feature-grid',
		array(
			'title'       => __( 'Feature Grid', 'wp-site2' ),
			'categories'  => array( 'wp-site2-sections' ),
			'description' => __( 'Three-column feature grid for concise value points.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"align":"wide","className":"wp-site2-pattern-feature-grid","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide wp-site2-pattern-feature-grid"><!-- wp:heading {"textAlign":"center","level":2} -->
<h2 class="has-text-align-center">' . esc_html__( 'Key Features', 'wp-site2' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column --><div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3>' . esc_html__( 'Fast Setup', 'wp-site2' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Launch quickly using reusable sections and preconfigured styles.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph --></div><!-- /wp:column -->

<!-- wp:column --><div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3>' . esc_html__( 'Editorial Friendly', 'wp-site2' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Provide a focused block set to keep authoring simple and consistent.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph --></div><!-- /wp:column -->

<!-- wp:column --><div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3>' . esc_html__( 'Performance First', 'wp-site2' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Keep frontend output lean with native blocks and minimal JavaScript.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph --></div><!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/cta-section',
		array(
			'title'       => __( 'CTA Section', 'wp-site2' ),
			'categories'  => array( 'wp-site2-sections' ),
			'description' => __( 'Prominent call-to-action section for conversion moments.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"align":"wide","className":"wp-site2-pattern-cta","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide wp-site2-pattern-cta"><!-- wp:heading {"textAlign":"center","level":2} -->
<h2 class="has-text-align-center">' . esc_html__( 'Ready to plan your next project?', 'wp-site2' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">' . esc_html__( 'Use this section near the end of a page to guide readers toward contact or demo actions.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">' . esc_html__( 'Contact Us', 'wp-site2' ) . '</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/testimonial-section',
		array(
			'title'       => __( 'Testimonial Section', 'wp-site2' ),
			'categories'  => array( 'wp-site2-sections' ),
			'description' => __( 'Single testimonial section with quote and attribution.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"align":"wide","className":"wp-site2-pattern-testimonial","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide wp-site2-pattern-testimonial"><!-- wp:heading {"textAlign":"center","level":2} -->
<h2 class="has-text-align-center">' . esc_html__( 'What clients say', 'wp-site2' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><p>' . esc_html__( 'The migration delivered a much faster and easier-to-manage website without compromising design quality.', 'wp-site2' ) . '</p><cite>' . esc_html__( 'Head of Marketing, Example Co.', 'wp-site2' ) . '</cite></blockquote>
<!-- /wp:quote --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/related-content',
		array(
			'title'       => __( 'Related Content', 'wp-site2' ),
			'categories'  => array( 'wp-site2-sections' ),
			'description' => __( 'Related content list for Blog and Case Study templates.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"align":"wide","className":"wp-site2-pattern-related-content","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide wp-site2-pattern-related-content"><!-- wp:heading {"level":2} -->
<h2>' . esc_html__( 'Related Content', 'wp-site2' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:query {"query":{"perPage":3,"pages":0,"offset":0,"postType":"blog","order":"desc","orderBy":"date"}} -->
<div class="wp-block-query"><!-- wp:post-template -->
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:post-title {"isLink":true,"level":3} /-->

<!-- wp:post-excerpt /--></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-no-results -->
<!-- wp:paragraph -->
<p>' . esc_html__( 'No related content found.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->',
		)
	);
}
add_action( 'init', 'wp_site2_register_block_patterns' );

/**
 * Register content models for migration collections.
 */
function wp_site2_register_content_models() {
	$blog_labels = array(
		'name'                  => __( 'Blogs', 'wp-site2' ),
		'singular_name'         => __( 'Blog', 'wp-site2' ),
		'menu_name'             => __( 'Blogs', 'wp-site2' ),
		'add_new'               => __( 'Add New', 'wp-site2' ),
		'add_new_item'          => __( 'Add New Blog', 'wp-site2' ),
		'edit_item'             => __( 'Edit Blog', 'wp-site2' ),
		'new_item'              => __( 'New Blog', 'wp-site2' ),
		'view_item'             => __( 'View Blog', 'wp-site2' ),
		'view_items'            => __( 'View Blogs', 'wp-site2' ),
		'search_items'          => __( 'Search Blogs', 'wp-site2' ),
		'not_found'             => __( 'No blogs found.', 'wp-site2' ),
		'not_found_in_trash'    => __( 'No blogs found in Trash.', 'wp-site2' ),
		'all_items'             => __( 'All Blogs', 'wp-site2' ),
		'archives'              => __( 'Blog Archives', 'wp-site2' ),
		'attributes'            => __( 'Blog Attributes', 'wp-site2' ),
		'insert_into_item'      => __( 'Insert into blog', 'wp-site2' ),
		'uploaded_to_this_item' => __( 'Uploaded to this blog', 'wp-site2' ),
	);

	register_post_type(
		'blog',
		array(
			'labels'             => $blog_labels,
			'public'             => true,
			'show_in_rest'       => true,
			'menu_icon'          => 'dashicons-welcome-write-blog',
			'has_archive'        => true,
			'rewrite'            => array(
				'slug'       => 'blog',
				'with_front' => false,
			),
			'supports'           => array( 'title', 'editor', 'excerpt', 'thumbnail', 'author', 'revisions' ),
			'publicly_queryable' => true,
			'menu_position'      => 5,
		)
	);

	$case_study_labels = array(
		'name'                  => __( 'Case Studies', 'wp-site2' ),
		'singular_name'         => __( 'Case Study', 'wp-site2' ),
		'menu_name'             => __( 'Case Studies', 'wp-site2' ),
		'add_new'               => __( 'Add New', 'wp-site2' ),
		'add_new_item'          => __( 'Add New Case Study', 'wp-site2' ),
		'edit_item'             => __( 'Edit Case Study', 'wp-site2' ),
		'new_item'              => __( 'New Case Study', 'wp-site2' ),
		'view_item'             => __( 'View Case Study', 'wp-site2' ),
		'view_items'            => __( 'View Case Studies', 'wp-site2' ),
		'search_items'          => __( 'Search Case Studies', 'wp-site2' ),
		'not_found'             => __( 'No case studies found.', 'wp-site2' ),
		'not_found_in_trash'    => __( 'No case studies found in Trash.', 'wp-site2' ),
		'all_items'             => __( 'All Case Studies', 'wp-site2' ),
		'archives'              => __( 'Case Study Archives', 'wp-site2' ),
		'attributes'            => __( 'Case Study Attributes', 'wp-site2' ),
		'insert_into_item'      => __( 'Insert into case study', 'wp-site2' ),
		'uploaded_to_this_item' => __( 'Uploaded to this case study', 'wp-site2' ),
	);

	register_post_type(
		'case_study',
		array(
			'labels'             => $case_study_labels,
			'public'             => true,
			'show_in_rest'       => true,
			'menu_icon'          => 'dashicons-analytics',
			'has_archive'        => true,
			'rewrite'            => array(
				'slug'       => 'case-studies',
				'with_front' => false,
			),
			'supports'           => array( 'title', 'editor', 'excerpt', 'thumbnail', 'author', 'revisions' ),
			'publicly_queryable' => true,
			'menu_position'      => 6,
		)
	);

	$industry_labels = array(
		'name'                  => __( 'Industries', 'wp-site2' ),
		'singular_name'         => __( 'Industry', 'wp-site2' ),
		'menu_name'             => __( 'Industries', 'wp-site2' ),
		'add_new'               => __( 'Add New', 'wp-site2' ),
		'add_new_item'          => __( 'Add New Industry', 'wp-site2' ),
		'edit_item'             => __( 'Edit Industry', 'wp-site2' ),
		'new_item'              => __( 'New Industry', 'wp-site2' ),
		'view_item'             => __( 'View Industry', 'wp-site2' ),
		'view_items'            => __( 'View Industries', 'wp-site2' ),
		'search_items'          => __( 'Search Industries', 'wp-site2' ),
		'not_found'             => __( 'No industries found.', 'wp-site2' ),
		'not_found_in_trash'    => __( 'No industries found in Trash.', 'wp-site2' ),
		'all_items'             => __( 'All Industries', 'wp-site2' ),
		'archives'              => __( 'Industry Archives', 'wp-site2' ),
		'attributes'            => __( 'Industry Attributes', 'wp-site2' ),
		'insert_into_item'      => __( 'Insert into industry', 'wp-site2' ),
		'uploaded_to_this_item' => __( 'Uploaded to this industry', 'wp-site2' ),
	);

	register_post_type(
		'industry',
		array(
			'labels'             => $industry_labels,
			'public'             => true,
			'show_in_rest'       => true,
			'menu_icon'          => 'dashicons-building',
			'has_archive'        => false,
			'rewrite'            => array(
				'slug'       => 'industry',
				'with_front' => false,
			),
			'supports'           => array( 'title', 'editor', 'excerpt', 'thumbnail', 'author', 'revisions' ),
			'publicly_queryable' => true,
			'menu_position'      => 7,
		)
	);

	register_taxonomy(
		'blog_category',
		'blog',
		array(
			'labels'            => array(
				'name'          => __( 'Blog Categories', 'wp-site2' ),
				'singular_name' => __( 'Blog Category', 'wp-site2' ),
			),
			'public'            => true,
			'hierarchical'      => true,
			'show_admin_column' => true,
			'show_in_rest'      => true,
			'rewrite'           => array(
				'slug'       => 'blog-category',
				'with_front' => false,
			),
		)
	);

	register_taxonomy(
		'blog_tag',
		'blog',
		array(
			'labels'            => array(
				'name'          => __( 'Blog Tags', 'wp-site2' ),
				'singular_name' => __( 'Blog Tag', 'wp-site2' ),
			),
			'public'            => true,
			'hierarchical'      => false,
			'show_admin_column' => true,
			'show_in_rest'      => true,
			'rewrite'           => array(
				'slug'       => 'blog-tag',
				'with_front' => false,
			),
		)
	);

	register_taxonomy(
		'case_study_category',
		'case_study',
		array(
			'labels'            => array(
				'name'          => __( 'Case Study Categories', 'wp-site2' ),
				'singular_name' => __( 'Case Study Category', 'wp-site2' ),
			),
			'public'            => true,
			'hierarchical'      => true,
			'show_admin_column' => true,
			'show_in_rest'      => true,
			'rewrite'           => array(
				'slug'       => 'case-study-category',
				'with_front' => false,
			),
		)
	);

	register_taxonomy(
		'case_study_tag',
		'case_study',
		array(
			'labels'            => array(
				'name'          => __( 'Case Study Tags', 'wp-site2' ),
				'singular_name' => __( 'Case Study Tag', 'wp-site2' ),
			),
			'public'            => true,
			'hierarchical'      => false,
			'show_admin_column' => true,
			'show_in_rest'      => true,
			'rewrite'           => array(
				'slug'       => 'case-study-tag',
				'with_front' => false,
			),
		)
	);
}
add_action( 'init', 'wp_site2_register_content_models' );

/**
 * Render a placeholder language switcher slot until Polylang integration is added.
 */
function wp_site2_render_language_slot_placeholder() {
	if ( function_exists( 'pll_the_languages' ) ) {
		pll_the_languages(
			array(
				'dropdown'   => 0,
				'show_names' => 1,
			)
		);
		return;
	}

	echo '<span class="wp-site2-language-placeholder">' . esc_html__( 'Language', 'wp-site2' ) . '</span>';
}
add_action( 'wp_site2_language_switcher', 'wp_site2_render_language_slot_placeholder' );


/**
 * Register homepage migration section patterns.
 */
function wp_site2_register_homepage_section_patterns() {
	if ( ! function_exists( 'register_block_pattern' ) ) {
		return;
	}

	$category = 'wp-site2-sections';

	register_block_pattern(
		'wp-site2/home-hero',
		array(
			'title'       => __( 'Homepage: Hero', 'wp-site2' ),
			'categories'  => array( $category ),
			'description' => __( 'Hero section with title, supporting copy, and two CTAs.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"className":"wp-site2-home-section wp-site2-home-hero","layout":{"type":"constrained"}} -->
<div class="wp-block-group wp-site2-home-section wp-site2-home-hero"><!-- wp:paragraph {"className":"wp-site2-home-kicker"} -->
<p class="wp-site2-home-kicker">' . esc_html__( 'The Future of Ticketing', 'wp-site2' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1>' . esc_html__( 'Enhance your ticketing experience', 'wp-site2' ) . '</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Streamline operations, boost sales, and provide a seamless guest journey with one all-in-one platform.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">' . esc_html__( 'Request demo', 'wp-site2' ) . '</a></div>
<!-- /wp:button -->

<!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button">' . esc_html__( 'View features', 'wp-site2' ) . '</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/home-social-proof',
		array(
			'title'       => __( 'Homepage: Social Proof', 'wp-site2' ),
			'categories'  => array( $category ),
			'description' => __( 'Partner logo strip used under hero.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"className":"wp-site2-home-section wp-site2-home-social-proof is-dark","layout":{"type":"constrained"}} -->
<div class="wp-block-group wp-site2-home-section wp-site2-home-social-proof is-dark"><!-- wp:paragraph {"align":"center","className":"wp-site2-home-kicker"} -->
<p class="has-text-align-center wp-site2-home-kicker">' . esc_html__( 'Trusted by innovative teams worldwide', 'wp-site2' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">ZOO · Soccer City · Museum · Park Inc. · Booqi Pro</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/home-features',
		array(
			'title'       => __( 'Homepage: Features', 'wp-site2' ),
			'categories'  => array( $category ),
			'description' => __( 'Feature grid with four product capabilities.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"className":"wp-site2-home-section wp-site2-home-features","layout":{"type":"constrained"}} -->
<div class="wp-block-group wp-site2-home-section wp-site2-home-features"><!-- wp:heading {"level":2} -->
<h2>' . esc_html__( 'We have got what it takes!', 'wp-site2' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column --><div class="wp-block-column"><!-- wp:group {"className":"wp-site2-home-card"} -->
<div class="wp-block-group wp-site2-home-card"><!-- wp:heading {"level":3} -->
<h3>' . esc_html__( 'Smart Ticketing Engine', 'wp-site2' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Dynamic pricing, time-slot management, and real-time inventory control.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div><!-- /wp:column -->

<!-- wp:column --><div class="wp-block-column"><!-- wp:group {"className":"wp-site2-home-card"} -->
<div class="wp-block-group wp-site2-home-card"><!-- wp:heading {"level":3} -->
<h3>' . esc_html__( 'Deep Analytics', 'wp-site2' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Understand your audience with behavioral insights and forecasting tools.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div><!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column --><div class="wp-block-column"><!-- wp:group {"className":"wp-site2-home-card"} -->
<div class="wp-block-group wp-site2-home-card"><!-- wp:heading {"level":3} -->
<h3>' . esc_html__( 'Member Portals', 'wp-site2' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Built-in loyalty programs and membership management.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div><!-- /wp:column -->

<!-- wp:column --><div class="wp-block-column"><!-- wp:group {"className":"wp-site2-home-card"} -->
<div class="wp-block-group wp-site2-home-card"><!-- wp:heading {"level":3} -->
<h3>' . esc_html__( 'Tool Integrations', 'wp-site2' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Connect your CRM, marketing, and finance stack with ease.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div><!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/home-hardware-integration',
		array(
			'title'       => __( 'Homepage: Hardware Integration', 'wp-site2' ),
			'categories'  => array( $category ),
			'description' => __( 'Section focused on hardware connectivity and compatibility.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"className":"wp-site2-home-section wp-site2-home-hardware is-dark","layout":{"type":"constrained"}} -->
<div class="wp-block-group wp-site2-home-section wp-site2-home-hardware is-dark"><!-- wp:paragraph {"className":"wp-site2-home-kicker"} -->
<p class="wp-site2-home-kicker">' . esc_html__( 'Universal Compatibility', 'wp-site2' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2>' . esc_html__( 'Integrate your hardware with ease', 'wp-site2' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>' . esc_html__( 'Support for major turnstile protocols.', 'wp-site2' ) . '</li><li>' . esc_html__( 'Offline-first mobile scanning.', 'wp-site2' ) . '</li><li>' . esc_html__( 'RFID and NFC wristband support.', 'wp-site2' ) . '</li></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/home-industries',
		array(
			'title'       => __( 'Homepage: Industries', 'wp-site2' ),
			'categories'  => array( $category ),
			'description' => __( 'Industry cards for audience verticals.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"className":"wp-site2-home-section wp-site2-home-industries","layout":{"type":"constrained"}} -->
<div class="wp-block-group wp-site2-home-section wp-site2-home-industries"><!-- wp:heading {"textAlign":"center","level":2} -->
<h2 class="has-text-align-center">' . esc_html__( 'The right solution for your business', 'wp-site2' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column --><div class="wp-block-column"><!-- wp:group {"className":"wp-site2-home-card"} --><div class="wp-block-group wp-site2-home-card"><!-- wp:heading {"level":3} --><h3>' . esc_html__( 'Theme Parks', 'wp-site2' ) . '</h3><!-- /wp:heading --><!-- wp:paragraph --><p>' . esc_html__( 'Fast-track queuing and high-volume entry.', 'wp-site2' ) . '</p><!-- /wp:paragraph --></div><!-- /wp:group --></div><!-- /wp:column -->
<!-- wp:column --><div class="wp-block-column"><!-- wp:group {"className":"wp-site2-home-card"} --><div class="wp-block-group wp-site2-home-card"><!-- wp:heading {"level":3} --><h3>' . esc_html__( 'Zoos', 'wp-site2' ) . '</h3><!-- /wp:heading --><!-- wp:paragraph --><p>' . esc_html__( 'Education session bookings and donations.', 'wp-site2' ) . '</p><!-- /wp:paragraph --></div><!-- /wp:group --></div><!-- /wp:column -->
<!-- wp:column --><div class="wp-block-column"><!-- wp:group {"className":"wp-site2-home-card"} --><div class="wp-block-group wp-site2-home-card"><!-- wp:heading {"level":3} --><h3>' . esc_html__( 'Museums', 'wp-site2' ) . '</h3><!-- /wp:heading --><!-- wp:paragraph --><p>' . esc_html__( 'Timed-entry exhibitions and guide rentals.', 'wp-site2' ) . '</p><!-- /wp:paragraph --></div><!-- /wp:group --></div><!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/home-sales-focus',
		array(
			'title'       => __( 'Homepage: Sales Focus', 'wp-site2' ),
			'categories'  => array( $category ),
			'description' => __( 'Sales-focused section with reliability stats.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"className":"wp-site2-home-section wp-site2-home-sales-focus is-dark","layout":{"type":"constrained"}} -->
<div class="wp-block-group wp-site2-home-section wp-site2-home-sales-focus is-dark"><!-- wp:heading {"textAlign":"center","level":2} -->
<h2 class="has-text-align-center">' . esc_html__( 'Focus on your sales', 'wp-site2' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column --><div class="wp-block-column"><!-- wp:heading {"textAlign":"center","level":3} --><h3 class="has-text-align-center">99.9%</h3><!-- /wp:heading --><!-- wp:paragraph {"align":"center"} --><p class="has-text-align-center">' . esc_html__( 'Uptime guarantee', 'wp-site2' ) . '</p><!-- /wp:paragraph --></div><!-- /wp:column -->
<!-- wp:column --><div class="wp-block-column"><!-- wp:heading {"textAlign":"center","level":3} --><h3 class="has-text-align-center">&lt;200ms</h3><!-- /wp:heading --><!-- wp:paragraph {"align":"center"} --><p class="has-text-align-center">' . esc_html__( 'Average latency', 'wp-site2' ) . '</p><!-- /wp:paragraph --></div><!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/home-pricing',
		array(
			'title'       => __( 'Homepage: Pricing', 'wp-site2' ),
			'categories'  => array( $category ),
			'description' => __( 'Starter and Pro pricing cards.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"className":"wp-site2-home-section wp-site2-home-pricing","layout":{"type":"constrained"}} -->
<div class="wp-block-group wp-site2-home-section wp-site2-home-pricing"><!-- wp:heading {"textAlign":"center","level":2} -->
<h2 class="has-text-align-center">' . esc_html__( 'Simple, transparent pricing', 'wp-site2' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column --><div class="wp-block-column"><!-- wp:group {"className":"wp-site2-home-card"} --><div class="wp-block-group wp-site2-home-card"><!-- wp:heading {"level":3} --><h3>' . esc_html__( 'Starter', 'wp-site2' ) . '</h3><!-- /wp:heading --><!-- wp:paragraph --><p>' . esc_html__( 'Free — Up to 500 tickets/month, basic analytics, and standard scanning.', 'wp-site2' ) . '</p><!-- /wp:paragraph --></div><!-- /wp:group --></div><!-- /wp:column -->
<!-- wp:column --><div class="wp-block-column"><!-- wp:group {"className":"wp-site2-home-card"} --><div class="wp-block-group wp-site2-home-card"><!-- wp:heading {"level":3} --><h3>' . esc_html__( 'Pro', 'wp-site2' ) . '</h3><!-- /wp:heading --><!-- wp:paragraph --><p>' . esc_html__( 'Custom — Unlimited ticketing, integrations, and priority support.', 'wp-site2' ) . '</p><!-- /wp:paragraph --></div><!-- /wp:group --></div><!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/home-faq',
		array(
			'title'       => __( 'Homepage: FAQ', 'wp-site2' ),
			'categories'  => array( $category ),
			'description' => __( 'Frequently asked questions section.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"className":"wp-site2-home-section wp-site2-home-faq is-dark","layout":{"type":"constrained"}} -->
<div class="wp-block-group wp-site2-home-section wp-site2-home-faq is-dark"><!-- wp:heading {"textAlign":"center","level":2} -->
<h2 class="has-text-align-center">' . esc_html__( 'We have all the answers', 'wp-site2' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><strong>' . esc_html__( 'How fast can we go live?', 'wp-site2' ) . '</strong> ' . esc_html__( 'Typical onboarding takes 3 to 14 days depending on hardware complexity.', 'wp-site2' ) . '</li><li><strong>' . esc_html__( 'Do you support offline scanning?', 'wp-site2' ) . '</strong> ' . esc_html__( 'Yes, with automatic sync when the connection returns.', 'wp-site2' ) . '</li><li><strong>' . esc_html__( 'Can we integrate our CRM?', 'wp-site2' ) . '</strong> ' . esc_html__( 'Yes, via API and connector options.', 'wp-site2' ) . '</li></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'wp-site2/home-final-cta',
		array(
			'title'       => __( 'Homepage: Final CTA', 'wp-site2' ),
			'categories'  => array( $category ),
			'description' => __( 'End-of-page conversion call to action.', 'wp-site2' ),
			'content'     =>
				'<!-- wp:group {"className":"wp-site2-home-section wp-site2-home-final-cta","layout":{"type":"constrained"}} -->
<div class="wp-block-group wp-site2-home-section wp-site2-home-final-cta"><!-- wp:heading {"textAlign":"center","level":2} -->
<h2 class="has-text-align-center">' . esc_html__( 'Take the Next Step with Booqi', 'wp-site2' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">' . esc_html__( 'Ready to revolutionize your visitor experience? Let us build the future together.', 'wp-site2' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">' . esc_html__( 'Request demo', 'wp-site2' ) . '</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->',
		)
	);
}
add_action( 'init', 'wp_site2_register_homepage_section_patterns', 20 );
