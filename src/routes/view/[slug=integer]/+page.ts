import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
	const dataFile = await import('$lib/data')
	const targetArray = dataFile.viewData
	const index = parseInt(params.slug) - 1
	const getItem = () =>
		new Promise<ViewItem>(async (res, rej) => {
			try {
				const item = targetArray[index]
				res({
					title: item.title,
					collection: item.collection,
					picture: item.picture,
					date: item.date,
					description: item.description
				})
			} catch (err) {
				console.error(err)
				rej()
			}
		}).catch(() => {
			return undefined
		})

	const item = (await getItem()) as ViewItem

	return {
		item
	}
}
