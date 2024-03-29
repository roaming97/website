import { page } from '$app/stores'
import { get } from 'svelte/store'

export const capitalized = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1)
}

/**
 * Parses the url pathname and returns just the capitalized page title.
 * @param path - The current url pathname.
 * @example ```svelte
 * <svelte:head>
 *   <title> {pageTitle($page.url.pathname)} <title>
 * </svelte:head>
 * ```
 */
export const pageTitle = (path: string) => {
	if (path === '/' || '/landing') return 'roaming97'
	if (get(page).error) return `${get(page).status}`
	const title = path.split('/')[1]
	return `${capitalized(title)} - roaming97`
}
