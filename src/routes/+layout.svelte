<script lang="ts">
	import { fly, type FlyParams } from 'svelte/transition';
	import { page } from '$app/stores';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.postcss';
	import type { LayoutData } from './$types';
	import { quintOut } from 'svelte/easing';

	const options: FlyParams = {
		x: -40,
		duration: 400,
		easing: quintOut
	};

	$: pathname = $page.url.pathname;
	$: capitalized =
		pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1);

	$: title = () => {
		if (pathname === '/') return 'roaming97';
		if ($page.error) {
			return `${$page.status}`;
		} else {
			return `${capitalized} - roaming97`;
		}
	};
	$: visible = false;

	function scroll_container() {
		return document.documentElement || document.body;
	}

	function handle_scroll() {
		if (!scroll_container()) return;
		visible = scroll_container().scrollTop > 300;
	}

	export let data: LayoutData;
</script>

<svelte:window on:scroll={handle_scroll} />
<svelte:head>
	<title>{title()}</title>
</svelte:head>

<Header />
{#key data.url}
	<div in:fly={{ ...options, delay: 400 }} out:fly={options}>
		{#if data.url === '/' || $page.error}
			<div class="pt-16">
				<slot />
			</div>
		{:else if data.url.match('/blog/.+')}
			<div class="pt-20 p-4 lg:p-16 lg:px-24 xl:p-24 xl:px-48 2xl:px-64">
				<slot />
			</div>
		{:else}
			<div class="pt-20 p-4 lg:p-16 lg:px-24 xl:p-24 xl:px-48 2xl:px-64">
				<h1 class="font-blond text-4xl lg:text-5xl xl:text-6xl">{capitalized}</h1>
				<hr class="opacity-10 w-full my-4" />
				<slot />
			</div>
		{/if}
	</div>
{/key}
{#if !$page.error}
	<Footer />
{/if}
<button
	class="w-10 h-10 text-xl font-blond flex items-center
	justify-center transition-all fixed bottom-5 right-5
	select-nonetext-white bg-brand-a rounded-xl
	shadow-lg duration-300 z-[999]"
	class:invisible={!visible}
	class:opacity-0={!visible}
	on:click={() => document.body.scrollIntoView({ behavior: 'smooth' })}>&uparrow;</button
>
