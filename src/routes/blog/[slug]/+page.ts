import type { BlogPostMetadata } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const file = await import(`../posts/${params.slug}.md`);
		const content = file.default;
		return {
			...(file.metadata as BlogPostMetadata),
			content
		};
	} catch {
		throw error(404, 'Blog post not found');
	}
}) satisfies PageLoad;
