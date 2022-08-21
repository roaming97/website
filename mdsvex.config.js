import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'

import remarkAbbr from 'remark-abbr'

/** @type {import('mdsvex').MdsvexOptions} */
export default {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkAbbr],
	rehypePlugins: [
		rehypeSlug,
		[rehypeAutolinkHeadings, { behavior: 'wrap' }],
		[
			rehypeExternalLinks,
			{
				rel: ['nofollow', 'noopener', 'noreferrer', 'external'],
				target: '_blank'
			}
		]
	]
}
