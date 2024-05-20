<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	interface Project {
		name: string;
		url: string;
		description: string;
		bg_color: string;
		logo: string;
		render: string;
	}
	const projects = [
		{
			name: 'Almond',
			url: 'https://github.com/roaming97/Almond',
			description: 'Self-hosted YouTube video archiving app',
			bg_color: '#e5cb89',
			logo: '/img/ico/almond.svg',
			render: '/img/almond.webp'
		},
		{
			name: 'Lavender',
			url: 'https://github.com/roaming97/Lavender',
			description: 'File server as a backend for roaming97.com',
			bg_color: '#af9de8',
			logo: '/img/ico/lavender_placeholder.svg',
			render: '/img/lavender.webp'
		},
		{
			name: 'Tangram',
			url: 'https://github.com/roaming97/Tangram',
			description: 'Minimal graphics engine for games and applications',
			bg_color: '#9af9b2',
			logo: '/img/ico/tangram_color.png',
			render: '/img/tangram.webp'
		},
		{
			name: 'vintran',
			url: 'https://github.com/roaming97/vintran',
			description: 'Vintage file transfer',
			bg_color: '#93adf9',
			logo: '/img/ico/network.png',
			render: '/img/vintran.webp'
		}
	] satisfies Project[];

	$: i = 0;
	$: current = projects[i];

	let interval: NodeJS.Timeout;

	onMount(() => {
		interval = setInterval(() => {
			i = i >= projects.length - 1 ? 0 : i + 1;
		}, 2000);
	});

	onDestroy(() => clearInterval(interval));
</script>

<div
	class="w-full flex flex-col lg:flex-row items-center justify-around transition-colors duration-300"
	style:background={current.bg_color}
>
	<div class="flex py-4 lg:p-16 flex-col">
		{#key current}
			<a
				href={current.url}
				class="flex flex-col justify-around drop-shadow-glow bg-white/90 text-black
				p-8 lg:p-16 xl:p-24 md:aspect-square h-64 md:h-[320px] lg:h-[400px] xl:h-[480px]"
				in:fly={{ x: -30, duration: 800, easing: quintOut }}
			>
				<img
					src={current.logo}
					alt="{current.name} icon"
					class="p-2 rounded-lg bg-white/30 shadow-lg"
					width="84"
					height="84"
				/>
				<div class="flex flex-col items-stretch">
					<div
						class="flex items-center justify-between p-2 my-2 bg-brand-c/50 font-black"
					>
						<h1>
							{current.name}
						</h1>
						<h1>&rightarrow;</h1>
					</div>
					<p class="text-sm">{current.description}</p>
				</div>
			</a>
		{/key}
	</div>
	{#key current}
		<img
			class="drop-shadow-glow"
			src={current.render}
			alt="Render for {current.name}"
			in:fly={{ y: -30, delay: 200, duration: 800, easing: quintOut }}
			width="480"
			height="480"
		/>
	{/key}
</div>
