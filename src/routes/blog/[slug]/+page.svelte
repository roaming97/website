<script lang="ts">
	import { quartOut } from 'svelte/easing';
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';
	import { parse_date } from '$lib/utils';
	import { page } from '$app/stores';

	let image_url = '';

	$: if ($page.url.pathname === '/blog/faq#were-you-born-in-1997') {
		image_url = '/no.jpg';
	}

	export let data: PageData;
	$: post = { ...data };
</script>

<svelte:head>
	{#if image_url}
		<meta name="description" content="" />
		<meta property="og:image" content={image_url} />
	{/if}
</svelte:head>

<div class="p-4 lg:w-[70vw] lg:p-0 lg:py-8 mx-auto">
	<h1 class="lg:text-6xl" in:fly={{ x: -10, duration: 500, easing: quartOut }}>{post.title}</h1>
	<div class="flex flex-col" in:fly={{ x: -10, delay: 100, duration: 300, easing: quartOut }}>
		<p>Written by roaming97</p>
		{#if post.legacy}
			<p class="date-text">Originally written: {parse_date(post.date_created)}</p>
		{:else}
			<p class="date-text">Date created: {parse_date(post.date_created)}</p>
		{/if}
		{#if post.date_modified}
			<p class="date-text">Last modified: {parse_date(post.date_modified)}</p>
		{/if}
		{#if post.rating?.toString()}
			<h1
				class="w-max p-4 mt-2 font-blond lg:text-4xl text-3xl text-black rounded-3xl progress"
				style="--progress: {post.rating}"
			>
				{post.rating}/10
			</h1>
		{/if}
	</div>
	<hr class="my-6" />
	<div in:fly={{ x: -10, delay: 250, duration: 500, easing: quartOut }} class="font-blond">
		<svelte:component this={post.content} />
	</div>
</div>

<style lang="postcss">
	p {
		@apply italic;
	}
	.progress {
		--start: 0;
		--end: 130;
		background-color: hsl(
			calc(var(--start) + (var(--end) - var(--start)) * var(--progress) * 0.1),
			80%,
			50%
		);
	}
	.date-text {
		@apply text-xs opacity-50;
	}
</style>
