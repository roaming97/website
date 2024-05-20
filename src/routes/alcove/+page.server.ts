import type { BlogPost, BlogPostMetadata } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		posts: new Promise<BlogPost[]>((resolve) => {
			const posts = Object.entries(
				import.meta.glob<BlogPostMetadata>('../blog/posts/*.md', {
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
