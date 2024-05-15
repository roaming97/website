import { LAVENDER_API_KEY, LAVENDER_URL } from '$env/static/private';
import type { BlogPost, BlogPostMetadata, LatestFilesResponse, LavenderEntry } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		latest: new Promise<LavenderEntry[]>((resolve) => {
			fetch(`${LAVENDER_URL}/latest?relpath=/artwork&count=4`, {
				method: 'GET',
				headers: {
					'lav-api-key': LAVENDER_API_KEY
				}
			})
				.then((res) => {
					if (res.ok) {
						res.json().then((data) => {
							const latest = data as LatestFilesResponse;
							if (latest.thumbnails) {
								resolve(latest.thumbnails);
							}
						});
					} else {
						console.log(res);
					}
				})
				.catch((e) => {
					console.log(e);
					return [];
				});
		}),
		posts: new Promise<BlogPost[]>((resolve) => {
			const posts = Object.entries(
				import.meta.glob<BlogPostMetadata>('./blog/posts/*.md', {
					import: 'metadata',
					eager: true
				})
			)
				.map(
					([k, v], i) =>
						({
							id: i,
							path: `/blog/${k.split('/')[3].split('.')[0]}`,
							...v
						}) as BlogPost
				)
				.sort((a, b) => (a.date_created > b.date_created ? -1 : 1))
				.slice(0, 3);
			resolve(posts);
		})
	};
}) satisfies PageServerLoad;
