import type { BlogPostMetadata } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Snippet } from 'svelte';

export const load = (async ({ params }) => {
	try {
		const file = await import(`../posts/${params.slug}.md`);
		const content: Snippet = file.default;
		return {
			...(file.metadata as BlogPostMetadata),
			content
		};
	} catch (e) {
		console.error(e);
		error(500, 'Error fetching post data');
	}
}) satisfies PageLoad;
