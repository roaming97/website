import type { PageServerLoad } from './$types'
import { viewData } from '$lib/data'

export const load: PageServerLoad = async ({ params }) => {
	return {
		item: viewData[parseInt(params.slug) - 1]
	}
}
