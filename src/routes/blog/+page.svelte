<script lang="ts">
	import type { PageServerData } from './$types'
	import { opacity } from '$lib/stores'
	import { goto, preloadData } from '$app/navigation'

	export let data: PageServerData
	let navigating = false

	const navigate = (path: string) => {
		if (navigating) return

		preloadData(path)
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

	$: posts = data.posts
</script>

<template lang="pug">
	h1.page-title Blog
	.blog-container
		p(style='text-align: center') 
			| Hi, you have arrived at my 
			b personal 
			| blog.
		p(style='text-align: center') 
			| Despite this website being my professional portfolio, I shall leave this space as my own personal writing outlet.
		p(style='text-align: center') 
			| Whether it is me sharing random thoughts or talking about projects I may be doing, I will post it here.
		ul
			+each('posts as post')
				.a(
					role="link"
					on:click!="{() => navigate(`blog/${post.path}`)}"
					on:keypress!="{() => {}}"
					)
					li
						h2 {post.title}
						p {new Date(Date.parse(post.date_created) - 1).toLocaleDateString('en-US')}
</template>

<style lang="scss">
	@use '../../../styles/media' as *;
	.blog-container {
		padding: 0 1rem;
		margin: 2rem 0;
	}
	ul {
		flex-direction: column;
		display: flex;
	}
	li {
		color: var(--fg-a);
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
		padding: 1rem;
		margin: 1rem;

		border-radius: 24px;

		background-color: var(--bg-a);
		box-shadow: 0 1px 2px rgba(var(--fg-a-rgb), 0.07), 0 2px 4px rgba(var(--fg-a-rgb), 0.07),
			0 4px 8px rgba(var(--fg-a-rgb), 0.07), 0 8px 16px rgba(var(--fg-a-rgb), 0.07),
			0 16px 32px rgba(var(--fg-a-rgb), 0.07), 0 32px 64px rgba(var(--fg-a-rgb), 0.07);

		cursor: pointer;

		transition: 200ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
		* {
			transition: 200ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
		}
	}
	.a:hover {
		background-color: var(--bg-b);
		h2 {
			color: var(--brand-c);
		}
	}
	@include media('>desktop') {
		.blog-container {
			margin: 1rem auto;
			width: 70vw;
			padding: 0;
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
