import { LAVENDER_API_KEY, LAVENDER_URL } from '$env/static/private';
import type { LatestFilesResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const offset = Math.floor(Math.random() * 150);
	return {
		everydays: new Promise<LatestFilesResponse>((resolve) => {
			fetch(`${LAVENDER_URL}/latest?relpath=/artwork/everydays&count=9&offset=${offset}`, {
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
}) satisfies PageServerLoad;
