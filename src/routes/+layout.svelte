<script lang="ts">
	import { fly, type FlyParams } from 'svelte/transition';
	import { page } from '$app/state';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.css';
	import type { LayoutData } from './$types';
	import { quintOut } from 'svelte/easing';
	import type { Snippet } from 'svelte';
	import { ModeWatcher } from 'mode-watcher';

	const options: FlyParams = {
		x: -40,
		duration: 300,
		easing: quintOut
	};

	let pathname = $derived(page.url.pathname);
	let capitalized = $derived(
		pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1)
	);

	let title = $derived.by(() => {
		if (pathname === '/') return 'roaming97';
		if (page.error) {
			return `${page.status}`;
		} else {
			return `${capitalized} - roaming97`;
		}
	});
	let visible = $state(false);

	function scroll_container() {
		return document.documentElement || document.body;
	}

	function onscroll() {
		if (!scroll_container()) return;
		visible = scroll_container().scrollTop > 300;
	}

	let { children, data }: { children: Snippet; data: LayoutData } = $props();
</script>

<svelte:window {onscroll} />
<svelte:head>
	<title>{title}</title>
</svelte:head>

<ModeWatcher defaultMode="dark" disableTransitions={false} />
<Header />
{#key data.url}
	<div in:fly={{ ...options, delay: 400 }} out:fly={options}>
		{#if data.url === '/'}
			<div>
				{@render children()}
			</div>
		{:else if data.url.match('/blog/.+') || page.error}
			<div class="p-4 pt-20 lg:mx-auto lg:max-w-[1020px] lg:p-16 xl:p-24">
				{@render children()}
			</div>
		{:else}
			<div class="p-4 pt-20 lg:mx-auto lg:max-w-[75vw] lg:p-16 xl:p-24">
				<h1 class="text-4xl font-normal lg:text-5xl xl:text-6xl">{capitalized}</h1>
				<hr class="my-4 w-full opacity-10" />
				{@render children()}
			</div>
		{/if}
	</div>
{/key}
{#if !page.error}
	<Footer />
{/if}
<button
	class="bg-brand-a font-blond fixed right-5 bottom-5 z-[999] flex
	h-10 w-10 items-center justify-center rounded-xl
	text-xl text-white shadow-lg
	transition-all duration-300 select-none"
	class:invisible={!visible}
	class:opacity-0={!visible}
	onclick={() => document.body.scrollIntoView({ behavior: 'smooth' })}>&uparrow;</button
>
