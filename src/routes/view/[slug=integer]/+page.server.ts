import type { PageServerLoad } from './$types'
import { viewData } from '$lib/data'

export const load: PageServerLoad = async ({ params }) => {
	const index = parseInt(params.slug) - 1
	const item = viewData[index]
	return {
		item
	}
}
