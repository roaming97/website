import type { PageServerLoad } from './$types';
import { LAVENDER_URL, LAVENDER_API_KEY, GITHUB_URL } from '$env/static/private';

export const load = (async ({ fetch }) => {
	let amount = 0;
	let repos = 0;
	const interval = 50;

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
	}

	try {
		const response = await fetch(GITHUB_URL, {
			method: 'GET'
		});
		const json = await response.json();
		repos = json.length;
	} catch (e) {
		repos = -1;
	}

	return {
		amount,
		repos
	};
}) satisfies PageServerLoad;
