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
