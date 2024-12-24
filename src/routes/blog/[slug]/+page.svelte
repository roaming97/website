<script lang="ts">
	import Callout from '$lib/components/Callout.svelte';
	import { quartOut } from 'svelte/easing';
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';
	import { parse_date } from '$lib/utils';
	import { page } from '$app/state';

	let image_url = $state('');

	$effect.pre(() => {
		if (page.url.pathname === '/blog/faq#were-you-born-in-1997') {
			image_url = 'https://roaming97.com/img/no.jpg';
			document.body.style['backgroundImage'] = image_url;
		}
	});

	let { data }: { data: PageData } = $props();
	let post = $derived({ ...data });
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
	class="mb-2 text-4xl lg:text-5xl xl:text-6xl"
	in:fly={{ x: -10, duration: 500, easing: quartOut, delay: 500 }}
>
	{post.title}
</h1>
<div class="mb-4 flex flex-col" in:fly={{ x: -10, delay: 600, duration: 300, easing: quartOut }}>
	<p>Written by roaming97</p>
	{#if post.tags?.find((t) => t === 'legacy')}
		<p class="date-text">Originally written: {parse_date(post.date_created)}</p>
	{:else}
		<p class="date-text">Date written: {parse_date(post.date_created)}</p>
	{/if}
	{#if post.date_modified}
		<p class="date-text">Last updated: {parse_date(post.date_modified)}</p>
	{/if}
	{#if post.rating?.toString()}
		<p
			class="progress mt-2 w-max rounded-lg px-3 py-2 text-3xl font-normal text-black lg:text-4xl"
			style="--progress: {post.rating}"
		>
			{post.rating}/10
		</p>
	{/if}
	<a href="/blog" class="mt-2 hover:text-brand-c">&leftarrow; Back to blog</a>
	<a href="/nook" class="hover:text-brand-c">&leftarrow; Back to nook</a>
</div>
<hr class="mb-4" />
{#if post.tags?.find((t) => t === 'legacy')}
	<Callout level="info">
		This is a <b>legacy</b> post, it has been partially rewritten to improve clarity as well as to
		fix grammatical and syntactic errors from the original. This article does not represent my current
		views or opinions today.
	</Callout>
	<hr class="invisible mb-4" />
{/if}
<div in:fly={{ x: -10, delay: 750, duration: 500, easing: quartOut }} class="font-blond">
	{@render post.content()}
</div>

<style lang="postcss">
	h1 {
		@apply font-black;
	}
	:global(h1 > a) {
		@apply font-extrabold;
	}
	:global(blockquote) {
		@apply border-l-4 border-gray-500/50 bg-dark/20 p-4;
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
		@apply text-xs italic opacity-75;
	}
</style>
