import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    server: {
        fs: {
            allow: ['..']
        },
        hmr: {
            overlay: false
        }
    },
    optimizeDeps: {
        include: ['highlight.js', 'highlight.js/lib/core']
    }
}

export default config