<script lang="ts">
	import Callout from '$lib/components/Callout.svelte';
	import { quartOut } from 'svelte/easing';
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';
	import { parse_date } from '$lib/utils';
	import { page } from '$app/stores';

	let image_url = '';

	$: if ($page.url.pathname === '/blog/faq#were-you-born-in-1997') {
		image_url = 'https://roaming97.com/img/no.jpg';
	}

	export let data: PageData;
	$: post = { ...data };
</script>

<svelte:head>
	<title>{post.title} - roaming97</title>
	{#if image_url}
		<meta name="description" content="" />
		<meta property="og:image" content={image_url} />
		<meta property="twitter:image" content={image_url} />
	{/if}
</svelte:head>

<h1
	class="text-4xl lg:text-5xl xl:text-6xl mb-2"
	in:fly={{ x: -10, duration: 500, easing: quartOut, delay: 500 }}
>
	{post.title}
</h1>
<div class="flex flex-col mb-4" in:fly={{ x: -10, delay: 600, duration: 300, easing: quartOut }}>
	<p>Written by roaming97</p>
	{#if post.tags?.find((t) => t === 'legacy')}
		<p class="date-text">Originally written: {parse_date(post.date_created)}</p>
	{:else}
		<p class="date-text">Date written: {parse_date(post.date_created)}</p>
	{/if}
	{#if post.date_modified}
		<p class="date-text">Last modified: {parse_date(post.date_modified)}</p>
	{/if}
	{#if post.rating?.toString()}
		<h1
			class="w-max px-4 py-3 mt-2 font-blond lg:text-4xl text-3xl text-black rounded-xl progress"
			style="--progress: {post.rating}"
		>
			{post.rating}/10
		</h1>
	{/if}
	<a href="/blog" class="mt-2">&leftarrow; Back to blog</a>
</div>
{#if post.tags?.find((t) => t === 'legacy')}
	<Callout level="info">
		This is a <b>legacy</b> post, it has been partially rewritten to improve clarity as well as to
		fix grammatical and syntactic errors from the original. This article does not represent my current
		views or opinions today.
	</Callout>
{/if}
<hr class="mb-6" />
<div in:fly={{ x: -10, delay: 750, duration: 500, easing: quartOut }} class="font-blond">
	<svelte:component this={post.content} />
</div>

<style lang="postcss">
	h1 {
		@apply font-black;
	}
	:global(h1 > a) {
		@apply font-extrabold;
	}
	.progress {
		--start: 0;
		--end: 140;
		background-color: hsl(
			calc(var(--start) + (var(--end) - var(--start)) * var(--progress) * 0.1),
			85%,
			60%
		);
	}
	.date-text {
		@apply text-xs opacity-75 italic;
	}
</style>
