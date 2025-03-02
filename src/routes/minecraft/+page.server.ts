import { LAVENDER_URL, LAVENDER_API_KEY } from '$env/static/private';

import { request_lavender_file } from '$lib/utils';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	// replace by screenshots array later on
	let hello = await request_lavender_file(LAVENDER_URL, LAVENDER_API_KEY, '/mc/hello_mc.png');
	return {
		hello
	};
}) satisfies PageServerLoad;
