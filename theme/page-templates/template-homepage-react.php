<?php
/**
 * Template Name: Homepage (React Migration)
 * Template Post Type: page
 *
 * Ready-made homepage assembled from reusable section block patterns.
 *
 * @package WPSite2
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>
<main class="wp-site2-main wp-site2-homepage-template">
	<?php
	echo do_blocks( '<!-- wp:pattern {"slug":"wp-site2/home-hero"} /-->' );
	echo do_blocks( '<!-- wp:pattern {"slug":"wp-site2/home-social-proof"} /-->' );
	echo do_blocks( '<!-- wp:pattern {"slug":"wp-site2/home-features"} /-->' );
	echo do_blocks( '<!-- wp:pattern {"slug":"wp-site2/home-hardware-integration"} /-->' );
	echo do_blocks( '<!-- wp:pattern {"slug":"wp-site2/home-industries"} /-->' );
	echo do_blocks( '<!-- wp:pattern {"slug":"wp-site2/home-sales-focus"} /-->' );
	echo do_blocks( '<!-- wp:pattern {"slug":"wp-site2/home-pricing"} /-->' );
	echo do_blocks( '<!-- wp:pattern {"slug":"wp-site2/home-faq"} /-->' );
	echo do_blocks( '<!-- wp:pattern {"slug":"wp-site2/home-final-cta"} /-->' );
	?>
</main>
<?php
get_footer();
