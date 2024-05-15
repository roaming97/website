import { LAVENDER_URL, LAVENDER_API_KEY } from '$env/static/private';
import type { LatestFilesResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	let amount = 0;
	const interval = 10;
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

	return {
		amount,
		everydays: new Promise<LatestFilesResponse>((resolve) => {
			const offset = Math.floor(Math.random() * 310 + 1);
			fetch(`${LAVENDER_URL}/latest?relpath=/artwork/everydays&count=15&offset=${offset}`, {
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
					console.error(e);
					return '';
				});
		})
	};
};
