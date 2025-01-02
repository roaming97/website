import { LAVENDER_API_KEY, LAVENDER_URL } from '$env/static/private';
import { request_everyday } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const numbers = [1, 64, 117, 60, 61, 307, 156, 273, 177, 219, 236, 365];

	return {
		everydays: numbers.map((num) =>
			request_everyday(LAVENDER_URL, LAVENDER_API_KEY, `day${num}.webp`)
		)
	};
}) satisfies PageServerLoad;
