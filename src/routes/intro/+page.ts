import { cardExclude } from '$lib/data'
import type { PageLoad } from './$types'
export const prerender = true

export const load: PageLoad = async () => {
	const images = import.meta.glob('../../../static/artwork/*.webp', { as: 'raw' })
	let artwork: URL[] = []
	for (const i in images) {
		const u = new URL(i, import.meta.url)
		if (!cardExclude.includes(u.href.split('/').pop().split('.')[0])) artwork.push(u)
	}
	const names = artwork.map((a) => a.href.split('/').pop())
	return {
		artwork,
		names
	}
}
