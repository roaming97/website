import type { BlogPostMetadata, BlogPost, Pagination } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	const pageParam = url.searchParams.get('page');
	const page = pageParam !== null ? Math.max(0, parseInt(pageParam) - 1) : 0;
	const perPage = 8;

	const posts = Object.entries(
		import.meta.glob<BlogPostMetadata>('./posts/*.md', {
			import: 'metadata',
			eager: true
		})
	)
		.map(([k, v], i) => ({ id: i, path: k.split('/')[2].split('.')[0], ...v }) as BlogPost)
		.sort((a, b) => (a.date_created > b.date_created ? -1 : 1));

	const totalPosts = posts.length;
	const totalPages = Math.ceil(totalPosts / perPage);

	const offset = perPage * page;
	const paginated = posts.slice(offset, offset + perPage);

	return {
		posts: paginated,
		pagination: {
			total_items: totalPosts,
			total_pages: totalPages,
			offset,
			page,
			per_page: perPage
		} satisfies Pagination
	};
}) satisfies PageServerLoad;
