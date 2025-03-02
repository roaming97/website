import { LAVENDER_API_KEY, LAVENDER_URL } from '$env/static/private';

import { request_lavender_file } from '$lib/utils';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	let collection = await request_lavender_file(
		LAVENDER_URL,
		LAVENDER_API_KEY,
		'/fumo/collection.jpg'
	);
	let gallery = Array.from(Array(14).keys())
		.map((i) => {
			const path = `/fumo/fumo${i + 1}.jpg`;
			return request_lavender_file(LAVENDER_URL, LAVENDER_API_KEY, path);
		})
		.reverse();
	return {
		collection,
		gallery
	};
}) satisfies PageServerLoad;
