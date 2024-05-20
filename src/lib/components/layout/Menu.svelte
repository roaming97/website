<script lang="ts">
	import { page } from '$app/stores';
	import { menu_open } from '$lib/stores';
	import type { MenuButtonProps } from '$lib/types';

	const menu_buttons: MenuButtonProps[] = [
		{
			name: 'Home',
			description: 'The starting point.'
		},
		{
			name: 'About',
			description: 'Get to know who am I.'
		},
		{
			name: 'Portfolio',
			description: 'Showcase of my professional work.'
		},
		{
			name: 'Alcove',
			description: 'My hobbies and personal projects.'
		}
	];

	$: link = (button: MenuButtonProps) => {
		return button.name === 'Home' ? '/' : `/${button.name.toLowerCase()}`;
	};
	$: is_current = (button: MenuButtonProps) => {
		return $page.url.pathname === link(button);
	};
</script>

<menu
	class="fixed flex flex-col justify-around pl-4 md:pl-6 pr-10 pb-16 pt-24
	z-10 w-[70vw] md:w-[50vw] lg:w-auto bg-white/40 dark:bg-darkest/80
	backdrop-blur-lg h-full select-none transition-transform duration-500
	ease-[cubic-bezier(0.22,1,0.36,1)] -translate-x-full"
	class:translate-x-0={$menu_open}
>
	{#each menu_buttons as button}
		{#if is_current(button)}
			<div class="opacity-30">
				<h1 class="tracking-normal lg:leading-[4.5rem] font-semibold text-3xl md:text-5xl">
					{button.name}
				</h1>
				<p class="font-blond text-sm md:text-base">
					{button.description}
				</p>
			</div>
		{:else}
			<a href={link(button)} class="group" on:click={() => ($menu_open = false)}>
				<h1
					class="tracking-normal lg:leading-[4.5rem] font-semibold text-3xl md:text-5xl group-hover:text-brand-c"
				>
					{button.name}
				</h1>
				<p class="font-blond text-sm md:text-base group-hover:text-brand-c">
					{button.description}
				</p>
			</a>
		{/if}
	{/each}
	<enhanced:img
		src="/static/img/r97LogoV3.png?w=80"
		alt="roaming97 icon"
		class="invert dark:invert-0"
	/>
</menu>
