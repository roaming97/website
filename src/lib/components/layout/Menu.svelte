<script lang="ts">
	import { page } from '$app/stores';
	import type { MenuButtonProps } from '$lib/types';

	let { open, onclick }: { open: boolean; onclick: () => void } = $props();

	const menu_buttons: MenuButtonProps[] = [
		{
			name: 'Home',
			description: 'The starting point.'
		},
		{
			name: 'About',
			description: 'Get to know who I am.'
		},
		{
			name: 'Portfolio',
			description: 'Showcase of my professional work.'
		},
		{
			name: 'Nook',
			description: 'Fun space where my hobbies reside.'
		}
	];

	function parse_link(button: MenuButtonProps) {
		return button.name === 'Home' ? '/' : `/${button.name.toLowerCase()}`;
	}

	function is_current(button: MenuButtonProps) {
		return $page.url.pathname === parse_link(button);
	}
</script>

<menu
	class="fixed flex flex-col justify-around pl-4 md:pl-6 pr-10 pb-16 pt-24
	z-10 w-[70vw] md:w-[50vw] lg:w-[25vw] bg-white/40 dark:bg-darkest/80
	backdrop-blur-lg h-full select-none transition-transform duration-500
	ease-[cubic-bezier(0.22,1,0.36,1)] -translate-x-full"
	class:translate-x-0={open}
>
	{#each menu_buttons as button}
		{#if is_current(button)}
			<div class="opacity-30">
				<h1 class="tracking-normal lg:leading-[4.5rem] font-bold text-3xl md:text-5xl">
					{button.name}
				</h1>
				<p class="text-sm md:text-base">
					{button.description}
				</p>
			</div>
		{:else}
			<a href={parse_link(button)} class="group" {onclick} data-sveltekit-preload-data>
				<h1
					class="tracking-normal lg:leading-[4.5rem] font-bold text-3xl
					md:text-5xl transition-all duration-100
				  group-hover:text-brand-c group-hover:drop-shadow-solid"
				>
					{button.name}
				</h1>
				<p
					class="text-sm md:text-base group-hover:text-brand-c transition-all duration-100"
				>
					{button.description}
				</p>
			</a>
		{/if}
	{/each}
</menu>
