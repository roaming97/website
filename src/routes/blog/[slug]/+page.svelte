<script lang="ts">
	import Callout from '$lib/components/Callout.svelte';
	import { quartOut } from 'svelte/easing';
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';
	import { parse_date } from '$lib/utils';
	import GoBack from '$lib/components/nook/GoBack.svelte';

	let { data }: { data: PageData } = $props();
	let post = $derived({ ...data });
</script>

<svelte:head>
	<title>{post.title} - roaming97</title>
</svelte:head>

{#snippet tag_snippet(tag: string)}
	<p class="w-max select-none rounded-xl bg-slate-500/30 p-1 px-3 text-xs">
		{tag}
	</p>
{/snippet}

<h1
	class="mb-2 text-4xl font-black lg:text-5xl xl:text-6xl"
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
	{#if post.tags}
		<div class="flex items-center gap-1 py-2">
			{#each post.tags as tag}
				{@render tag_snippet(tag)}
			{/each}
		</div>
	{/if}
	<GoBack name="blog" />
	<GoBack />
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
	:global(h1:has(a)) {
		@apply mb-1;
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
		@apply text-xs italic opacity-75;
	}
</style>
