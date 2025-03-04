<script lang="ts">
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

	const interval = 6000;
	let time = $state(performance.now());
	let dt = $state(0);
	let index = $state(0);
	let current = $derived(projects[index]);

	function reset_time() {
		time = performance.now();
		dt = 0;
	}

	function step() {
		requestAnimationFrame(step);
		const now = performance.now();
		dt = Math.min((now - time) / interval, 1);
		if (dt === 1) {
			next(true);
			reset_time();
		}
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

	onMount(() => step());
</script>

<div class="relative flex w-full flex-col">
	<h2
		class="absolute left-6 top-4 hidden select-none text-8xl font-light tracking-tight opacity-30 lg:inline-block"
	>
		Software
	</h2>
	<div
		class="dotted flex w-full flex-col items-center justify-around py-4 transition-all duration-300 lg:flex-row lg:pt-16"
	>
		<div class="flex flex-col py-4 lg:p-16">
			{#key current}
				<a
					href={current.url}
					class="flex h-64 min-w-[320px] flex-col justify-around p-8 text-black
						drop-shadow-glow sm:min-w-[480px] md:aspect-square md:h-[320px] lg:h-[400px] lg:w-auto lg:p-16 xl:h-[480px] xl:p-24"
					style:background={current.bg_color}
					in:fly={{ x: -30, duration: 800, easing: quintOut }}
				>
					<img
						src={current.logo}
						alt="{current.name} icon"
						class="rounded-lg bg-white/30 p-2 shadow-lg"
						width="84"
						height="84"
					/>
					<div class="flex flex-col items-stretch">
						<div class="my-2 flex items-center justify-between bg-neutral-800/30 p-2">
							<h1 class="font-black">
								{current.name}
							</h1>
							<h1 class="font-black">&rightarrow;</h1>
						</div>
						<p>{current.description}</p>
					</div>
				</a>
			{/key}
			<div class="my-4 h-1 w-full bg-black/30 dark:bg-white/30">
				<div
					class="h-1 w-full origin-left bg-black dark:bg-white"
					style="scale: {dt} 1"
				></div>
			</div>
			<div class="flex w-full items-center justify-center gap-4">
				{#each projects as proj, idx}
					<button
						class:bg-black={idx === index}
						class:dark:bg-white={idx === index}
						class:bg-zinc-500={idx !== index}
						class:bg-opacity-50={idx !== index}
						class="h-4 w-4 rounded-full transition-colors duration-300"
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
				data-sveltekit-preload-data
			/>
		{/key}
	</div>
</div>
