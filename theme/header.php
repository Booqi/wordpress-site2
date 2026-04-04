<?php
/**
 * Site header template.
 *
 * @package WPSite2
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="wp-site2-header">
	<div class="wp-site2-container wp-site2-header__inner">
		<div class="wp-site2-branding">
			<?php
			if ( has_custom_logo() ) {
				the_custom_logo();
			}
			?>
			<a class="wp-site2-site-title" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<?php bloginfo( 'name' ); ?>
			</a>
		</div>

		<nav class="wp-site2-primary-nav" aria-label="<?php esc_attr_e( 'Primary Navigation', 'wp-site2' ); ?>">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'container'      => false,
					'fallback_cb'    => false,
				)
			);
			?>
		</nav>

		<div class="wp-site2-language-slot" aria-label="<?php esc_attr_e( 'Language switcher', 'wp-site2' ); ?>">
			<?php do_action( 'wp_site2_language_switcher' ); ?>
		</div>
	</div>
</header>
