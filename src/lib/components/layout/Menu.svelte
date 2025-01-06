<script lang="ts">
	import { page } from '$app/state';
	import type { MenuButtonProps } from '$lib/types';

	let { open, onclick }: { open: boolean; onclick: () => void } = $props();

	const menu_buttons: MenuButtonProps[] = [
		{
			name: 'Home',
			description: 'The starting point.'
		},
		{
			name: 'Portfolio',
			description: 'Get to know me professionally.'
		},
		{
			name: 'Theater',
			description: 'In-house multimedia projects.'
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
		return page.url.pathname === parse_link(button);
	}
</script>

<menu
	class="fixed z-10 flex h-full w-[70vw] -translate-x-full select-none flex-col justify-around
	bg-white/40 pb-16 pl-4 pr-10 pt-24 backdrop-blur-lg
	transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-darkest/80 md:w-[50vw]
	md:pl-6 lg:w-[25vw]"
	class:translate-x-0={open}
>
	{#each menu_buttons as button}
		{#if is_current(button)}
			<div class="opacity-30">
				<h1 class="text-3xl font-bold tracking-normal md:text-5xl lg:leading-[4.5rem]">
					{button.name}
				</h1>
				<p class="text-sm md:text-base">
					{button.description}
				</p>
			</div>
		{:else}
			<a href={parse_link(button)} class="group" {onclick} data-sveltekit-preload-data>
				<h1
					class="text-3xl font-bold tracking-normal transition-all
					duration-100 group-hover:text-brand-c group-hover:drop-shadow-solid
				  md:text-5xl lg:leading-[4.5rem]"
				>
					{button.name}
				</h1>
				<p
					class="text-sm transition-all duration-100 group-hover:text-brand-c md:text-base"
				>
					{button.description}
				</p>
			</a>
		{/if}
	{/each}
</menu>
