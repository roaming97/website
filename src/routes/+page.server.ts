import { LAVENDER_URL, LAVENDER_API_KEY } from '$env/static/private';
import type { LavenderEntry } from '$lib/types';
import { request_lavender_file } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const numbers = [1, 64, 117, 60, 61, 156, 273, 177, 219, 236, 365];
	const artworks = [
		'trackway',
		'lapse',
		'parallélisme_inhérent',
		'headspace_w',
		'everlastingsaturation',
		'myopia',
		'out'
	];

	let everydays: Promise<LavenderEntry>[] = [];
	let artwork: Promise<LavenderEntry>[] = [];

	everydays = numbers.map((num) =>
		request_lavender_file(
			LAVENDER_URL,
			LAVENDER_API_KEY,
			`artwork/everydays/thumbnails/day${num}.webp`
		)
	);

	artwork = artworks.map((fn) =>
		request_lavender_file(LAVENDER_URL, LAVENDER_API_KEY, `artwork/thumbnails/${fn}.webp`)
	);

	return {
		images: {
			everydays,
			artwork
		}
	};
}) satisfies PageServerLoad;
