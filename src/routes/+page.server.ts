import { LAVENDER_URL, LAVENDER_API_KEY, GITHUB_URL } from '$env/static/private';
import type { LatestFilesResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
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
		everydays: new Promise<LatestFilesResponse>((resolve) => {
			fetch(`${LAVENDER_URL}/latest?relpath=/artwork/everydays&count=15&offset=90`, {
				method: 'GET',
				headers: {
					'lav-api-key': LAVENDER_API_KEY
				}
			})
				.then((res) => {
					res.json().then((json) => {
						resolve(json as LatestFilesResponse);
					});
				})
				.catch((e) => {
					ok = false;
					console.error(e);
					return '';
				});
		}),
		ok
	};
};
