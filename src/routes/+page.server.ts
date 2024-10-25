import { LAVENDER_URL, LAVENDER_API_KEY, GITHUB_URL } from '$env/static/private';
import { requestEveryday } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const numbers = [1, 64, 117, 60, 61, 307, 156, 273, 177, 219, 236, 365];
	let amount = 0;
	let repos = 0;
	const interval = 5;
	let ok = true;
	try {
		const response = await fetch(`${LAVENDER_URL}/amount`, {
			method: 'GET',
			headers: {
				'lav-api-key': LAVENDER_API_KEY
			}
		});
		const text = await response.text();
		amount = Math.round(Number(text) / interval) * interval;
	} catch (e) {
		amount = -1;
		ok = false;
	}

	try {
		const response = await fetch(GITHUB_URL, {
			method: 'GET'
		});
		const json = await response.json();
		repos = json.length;
	} catch (e) {
		repos = -1;
		ok = false;
	}

	return {
		amount,
		repos,
		everydays: numbers.map((num) =>
			requestEveryday(LAVENDER_URL, LAVENDER_API_KEY, `day${num}.webp`)
		),
		ok
	};
};
