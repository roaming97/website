import type { BlogPost } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const file = await import(`../posts/${params.slug}.md`);
	const content = file.default;
	return {
		...(file.metadata as BlogPost),
		content
	};
}) satisfies PageLoad;
