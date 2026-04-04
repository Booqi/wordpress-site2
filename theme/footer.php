<?php
/**
 * Site footer template.
 *
 * @package WPSite2
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<footer class="wp-site2-footer">
	<div class="wp-site2-container wp-site2-footer__inner">
		<p>
			<?php
			echo esc_html(
				sprintf(
					/* translators: %s: current year. */
					__( '© %s WP Site2. All rights reserved.', 'wp-site2' ),
					gmdate( 'Y' )
				)
			);
			?>
		</p>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
