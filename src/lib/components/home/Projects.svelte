<script lang="ts">
	import { theme } from '$lib/stores';
	import { onMount } from 'svelte';
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
			name: 'ZipMyVid',
			url: 'https://github.com/roaming97/ZipMyVid',
			description: 'Video compressing web tool',
			bg_color: '#c5c730',
			logo: '/img/ico/zmv.svg',
			render: '/img/screenshots/zipmyvid.png'
		},
		{
			name: 'vintran',
			url: 'https://github.com/roaming97/vintran',
			description: 'Vintage file transfer',
			bg_color: '#93adf9',
			logo: '/img/ico/network.png',
			render: '/img/vintran.webp'
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
		}
	] satisfies Project[];

	const interval = 8000;
	let time = $state(performance.now());
	let dt = $state(0);
	let index = $state(0);
	let current = $derived(projects[index]);

	function reset_time() {
		time = performance.now();
		dt = 0;
	}

	function step() {
		const now = performance.now();
		dt = Math.min((now - time) / interval, 1);
		if (dt === 1) {
			next(true);
			reset_time();
		}
		requestAnimationFrame(step);
	}

	function next(autoplay: boolean) {
		if (autoplay) {
			index + 1 >= projects.length ? (index = 0) : index++;
		} else {
			if (index + 1 < projects.length) {
				index++;
				reset_time();
			}
		}
	}

	let gradient_top = $derived($theme === 'dark' ? '#02020100' : '#ffffff00');

	onMount(() => step());
</script>

<div
	class="w-full flex flex-col lg:flex-row items-center justify-around transition-all duration-300"
	style:background="linear-gradient(180deg, {gradient_top} 0%, {current.bg_color} 30%)"
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
					<div class="flex items-center justify-between p-2 my-2 bg-brand-c/50">
						<h1 class="font-black">
							{current.name}
						</h1>
						<h1 class="font-black">&rightarrow;</h1>
					</div>
					<p>{current.description}</p>
				</div>
			</a>
		{/key}
		<div class="w-full h-1 bg-black/30 my-4">
			<div class="w-full h-1 bg-black origin-left" style="scale: {dt} 1"></div>
		</div>
		<div class="w-full flex items-center justify-center gap-4">
			{#each projects as proj, idx}
				<button
					class:bg-black={idx === index}
					class:bg-zinc-500={idx !== index}
					class="w-4 h-4 rounded-full transition-colors duration-300"
					aria-label={proj.name}
					onclick={() => {
						reset_time();
						index = idx;
					}}
				></button>
			{/each}
		</div>
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
