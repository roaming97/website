<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	import { opacity } from '$lib/stores'
	import { goto, prefetch } from '$app/navigation'

	export const load: Load = async () => {
		const files = import.meta.glob('./blog/*.svx')
		const promises: Promise<Post>[] = []
		const getPost = async (post: string) =>
			new Promise<Post>(async (res) => {
				try {
					const file = await files[post]()
					res({
						name: files[post].name,
						meta: file.metadata
					})
				} catch (err) {
					console.error(err)
				}
			})

		for (const post in files) {
			promises.push(getPost(post))
		}
		const posts = await Promise.all(promises)
		posts.sort(
			(a, b) =>
				new Date(b.meta.date_created).getTime() - new Date(a.meta.date_created).getTime()
		)

		return {
			props: {
				posts
			}
		}
	}
</script>

<script lang="ts">
	export let posts: Post[]
	let navigating = false

	const navigate = (path: string) => {
		if (navigating) return

		prefetch(path)
		navigating = true

		$opacity = 0

		setTimeout(() => {
			goto(path)

			setTimeout(() => {
				$opacity = 1
				navigating = false
			}, 1)
		}, 250)
	}
</script>

<template lang="pug">
	h1.page-title Blog
	.blog-container
		ul
			+each('posts as post')
				.a(
					role="link"
					on:click!="{() => navigate(post.name.split('./')[1].split('.')[0])}")
					li
						h2 {post.meta.title}
						p {new Date(Date.parse(post.meta.date_created) + 1).toLocaleDateString('en-US')}
</template>

<style lang="scss">
	@use '../../styles/media' as *;
	.blog-container {
		margin: 2rem 0;
	}
	ul {
		flex-direction: column;
		display: flex;
	}
	li {
		color: var(--dark-a);
		width: 100%;

		flex-direction: column;
		display: flex;
		h2 {
			font-size: 6vw;
		}
		p {
			font-size: 4vw;

			opacity: 0.5;
		}
		* {
			font-family: var(--font-mono);
		}
	}
	.a {
		margin: auto 1rem;
		padding: 1rem;

		border-radius: 12px;

		cursor: pointer;

		transition: 200ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
		* {
			transition: 200ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
		}
	}
	.a:hover {
		background-color: var(--light-b);
		h2 {
			color: var(--brand-c);
		}
	}
	@include media('>desktop') {
		.blog-container {
			margin: 1rem auto;
			width: 90vw;
		}
		li {
			h2 {
				font-size: 2rem;
			}
			p {
				font-size: 1rem;
			}
		}
		ul {
			text-align: left;
		}
	}
</style>
