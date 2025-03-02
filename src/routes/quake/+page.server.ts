import { LAVENDER_URL, LAVENDER_API_KEY } from '$env/static/private';

import { request_lavender_file } from '$lib/utils';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	const map_names = [
		'start',
		'jam2_tronyn',
		'ad_tears',
		'dcm1',
		'f1_1',
		'f1_2',
		'f1_3',
		'f1_4',
		'ym1'
	];
	let screenshots = map_names.map(async (map_name) => {
		return await request_lavender_file(
			LAVENDER_URL,
			LAVENDER_API_KEY,
			`/quake/${map_name}.png`
		);
	});
	return {
		screenshots
	};
}) satisfies PageServerLoad;
