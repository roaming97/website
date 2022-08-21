import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
	const files = import.meta.glob('./*.md')
	const promises: Promise<Post>[] = []
	const getPost = async (post: string) =>
		new Promise<Post>(async (res) => {
			try {
				const file = await files[post]()
				res({
					name: files[post].name,
					// @ts-ignore
					meta: file.metadata
				})
			} catch (err) {
				console.error(err)
			}
		})

	for (const post in files) promises.push(getPost(post))
	const posts = await Promise.all(promises).then((posts) => {
		return posts.sort((a, b) => {
			return a.meta.date_created > b.meta.date_created ? -1 : 1
		})
	})

	return {
		posts
	}
}
