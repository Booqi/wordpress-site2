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
}
add_action( 'wp_enqueue_scripts', 'wp_site2_enqueue_assets' );

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
