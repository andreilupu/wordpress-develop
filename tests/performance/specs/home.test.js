/**
 * WordPress dependencies
 */
import { test } from '@wordpress/e2e-test-utils-playwright';

/**
 * Internal dependencies
 */
import { camelCaseDashes, themes, locales } from '../utils';

const results = {
	timeToFirstByte: [],
	largestContentfulPaint: [],
	lcpMinusTtfb: [],
};

test.describe( 'Homepage', () => {
	test.use( {
		storageState: {}, // User will be logged out.
	} );

	test( `Measure load time metrics`, async ( {
		page,
		metrics,
	} ) => {
		// Clear caches using the clear-cache.php mu-plugin. Not actually loading the page.
		await page.goto( '/?clear_cache' );

		// This is the actual page to test.
		await page.goto( '/' );

		const serverTiming = await metrics.getServerTiming();
		console.log(serverTiming);
	} );
} );
