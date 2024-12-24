import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlugCustomID from 'rehype-slug-custom-id';
import rehypeTOC from 'rehype-toc';

const highlighter = await createHighlighter({
	themes: ['material-theme-ocean', 'min-light'],
	langs: [
		'actionscript-3',
		'javascript',
		'typescript',
		'svelte',
		'c',
		'rust',
		'python',
		'text',
		'markdown',
		'mdx',
		'html',
		'css'
	]
});

/** @type {import('rehype-toc').Options} */
const rehypeTOCOptions = {
	headings: ['h1', 'h2'],
	customizeTOC: (toc) => {
		if (toc.children[0].children.length <= 1) {
			return false;
		}
		return {
			type: 'element',
			tagName: 'div',
			properties: { className: 'toc' },
			children: [
				{
					type: 'element',
					tagName: 'p',
					properties: { className: 'text-3xl font-black mb-2' },
					children: [
						{
							type: 'text',
							value: 'Table of Contents'
						}
					]
				},
				...(toc.children || [])
			]
		};
	}
};

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					themes: {
						light: 'min-light',
						dark: 'material-theme-ocean'
					}
				})
			);
			return `{@html \`${html}\`}`;
		}
	},
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
		],
		[rehypeTOC, rehypeTOCOptions]
	]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			runtime: 'nodejs20.x'
		})
	}
};

export default config;
