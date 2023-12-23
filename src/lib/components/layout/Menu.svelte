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
			description: 'More details regarding myself.'
		},
		{
			name: 'Viewer',
			description: 'View all of my multimedia work.'
		},
		{
			name: 'Blog',
			description: 'Personal writing outlet.'
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
	class="fixed flex flex-col justify-around pl-4 md:pl-6 pr-10 pb-16 pt-24 z-10 w-[60vw] md:w-[40vw] lg:w-auto bg-black text-white h-full select-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -translate-x-full"
	class:translate-x-0={$menu_open}
>
	{#each menu_buttons as button}
		{#if is_current(button)}
			<div class="opacity-30">
				<h1 class="tracking-normal lg:leading-[4.5rem] font-medium text-4xl lg:text-6xl">
					{button.name}
				</h1>
				<p class="font-blond text-sm lg:text-base">
					{button.description}
				</p>
			</div>
		{:else}
			<div class="group">
				<a href={link(button)}>
					<h1
						class="tracking-normal lg:leading-[4.5rem] font-medium text-4xl lg:text-6xl group-hover:text-brand-c"
					>
						{button.name}
					</h1>
				</a>
				<p class="font-blond text-sm lg:text-base group-hover:text-brand-c">
					{button.description}
				</p>
			</div>
		{/if}
	{/each}
</menu>
