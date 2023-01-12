<script lang="ts">
	import { Logo } from '$lib/ui'
	import { quartOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'
	import type { PageData } from './$types'

	export let data: PageData
	$: post = { ...data }
</script>

<template lang="pug">

	.article-container
		h1(in:fly!='{{x: -10, duration: 500, easing: quartOut}}').article-title {post.title}
		.article-info
			.logo
				Logo(animate!='{false}')
			.date
				p by roaming97
				p(in:fly!='{{x: -10, delay: 100, duration: 500, easing: quartOut}}' style="font-size:1rem;opacity:0.75;font-style:italic;") {new Date(Date.parse(post.date_created)).toLocaleDateString('en-US', {timeZone: 'Etc/GMT+5'})}
				+if('post.date_modified')
					p(in:fly!='{{x: -10, delay: 100, duration: 500, easing: quartOut}}' style="font-size:0.75rem;opacity:0.75;font-style:italic;") Last edited: {new Date(Date.parse(post.date_modified)).toLocaleDateString('en-US', {timeZone: 'Etc/GMT+5'})}
		hr
		.content(in:fly!='{{x: -10, delay: 250, duration: 500, easing: quartOut}}')
			svelte:component(this!='{post.content}')

</template>

<style>
	.content {
		margin: 0 1.5rem;
	}
	.article-info {
		display: flex;
	}
	.article-info .logo {
		padding: 0.75rem;
		margin: 1rem;
		height: 64px;
		width: 64px;

		background-color: var(--bg-b);
		border-radius: 1em;
	}
	.article-info .date {
		justify-content: center;
		flex-direction: column;
		display: flex;
	}
	.date p {
		margin: 0;
	}
	.article-title {
		margin: 1rem 1.5rem;

		font-weight: bold;
		text-align: left;
		font-size: 2.5rem;
	}
	p {
		margin: 0.5rem 1.5rem;
	}
	hr {
		color: rgba(var(--fg-d-rgb), 0.25);
		margin: 1.5rem 0;
	}
	@media (min-width: 1024px) {
		.article-title {
			font-size: 3.5rem;
		}
		.article-container {
			margin: 2rem auto;
			width: 60vw;
		}
	}
</style>
