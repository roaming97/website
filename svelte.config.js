import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/kit/vite';

import rehypeSlugCustomID from 'rehype-slug-custom-id';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
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
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
