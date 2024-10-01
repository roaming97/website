import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import rehypeSlugCustomID from 'rehype-slug-custom-id';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			smartypants: {
				quotes: true,
				dashes: 'oldschool'
			},
			rehypePlugins: [
				rehypeSlugCustomID,
				[rehypeAutolinkHeadings, { behavior: 'wrap' }],
				[
					rehypeExternalLinks,
					{
						rel: ['nofollow', 'noopener', 'noreferrer', 'external'],
						target: '_blank'
					}
				]
			]
		})
	],
	kit: {
		adapter: adapter({
			runtime: 'nodejs20.x'
		})
	}
};

export default config;
