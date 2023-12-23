import { LAVENDER_URL, LAVENDER_API_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

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
		throw error(500, `Error getting file amount: ${e}`);
	}
	return {
		// TODO: Fix response handling
		streamed: {
			amount,
			latest: new Promise<string[]>((resolve) => {
				fetch(`${LAVENDER_URL}/latest?count=4&filetype=image&master=true`, {
					method: 'GET',
					headers: {
						'lav-api-key': LAVENDER_API_KEY
					}
				})
					.then((response) => {
						response.text().then((text) => {
							resolve(text.trim().split('\n'));
						});
					})
					.catch((e) => {
						throw error(500, e);
					});
			})
		}
	};
};
