import autolinkHeadings from 'rehype-autolink-headings'
import slug from 'rehype-slug'
import abbr from 'remark-abbr'

const mdsvexConfig = {
    extensions: ['.svelte.md', '.md', '.svx'],
    smartypants: {
        dashes: 'oldschool'
    },
    remarkPlugins: [abbr],
    layout: {
        _: './src/lib/bloglayout.svelte'
    },
    rehypePlugins: [
        slug, [
            autolinkHeadings,
            {
                behavior: 'wrap'
            }
        ]
    ]
}

export default mdsvexConfig