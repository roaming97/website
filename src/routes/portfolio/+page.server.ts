import { LAVENDER_API_KEY, LAVENDER_URL } from '$env/static/private';
import type { LavenderEntry } from '$lib/types';
import type { PageServerLoad } from './$types';

function requestEveryday(filename: string) {
	return new Promise<LavenderEntry>((resolve, reject) => {
		fetch(`${LAVENDER_URL}/file?path=artwork/everydays/thumbnails/${filename}`, {
			method: 'GET',
			headers: {
				'lav-api-key': LAVENDER_API_KEY
			}
		})
			.then((res) => {
				if (!res.ok) {
					return reject(new Error(`${res.status}: ${res.statusText}`));
				}
				return res.json();
			})
			.then((json) => {
				resolve(json as LavenderEntry);
			})
			.catch((e) => {
				console.error(e);
				reject(e);
			});
	});
}

export const load = (async () => {
	const numbers = [1, 64, 117, 60, 61, 307, 156, 273, 177, 219, 236, 365];

	return {
		everydays: numbers.map((num) => requestEveryday(`day${num}.webp`))
	};
}) satisfies PageServerLoad;
