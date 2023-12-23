import type { BlogPost } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const files = import.meta.glob<BlogPost>('./posts/*.md', { import: 'metadata', eager: true });
	const posts = Object.entries(files)
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		.map(([k, v], _) => ({ path: k.split('/')[2].split('.')[0], ...v }))
		.sort((a, b) => (a.date_created > b.date_created ? -1 : 1));
	return {
		posts
	};
}) satisfies PageServerLoad;
