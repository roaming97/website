<script lang="ts">
	import { quintIn, quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import Button from '../Button.svelte';

	function copy() {
		navigator.clipboard.writeText('contact@roaming97.com');
		copied = true;

		setTimeout(() => (copied = false), 3000);
	}

	let copied = false;
</script>

<div class="flex flex-col gap-4 mx-auto justify-center lg:w-3/4 pt-24">
	<div class="flex flex-col items-center gap-2 xl:items-start justify-between">
		<h1
			class="text-5xl xl:text-7xl font-medium text-center bg-brand-c w-max text-black p-3 drop-shadow-glow"
		>
			Hey!
		</h1>
		<p class="w-full xl:text-xl">
			Welcome to my website! I like creating just about anything that comes to mind, most of
			the time projects that involve web development, graphic design, 3D rendering, and/or
			digital illustration.
		</p>
	</div>
	<div class="w-full lg:w-auto flex flex-col lg:flex-row items-center gap-3">
		<!--
			<Button href="/portfolio">
				<img src="/img/ico/briefcase.svg" width="24" height="24" alt="briefcase icon" />
				<span>Portfolio</span>
			</Button>
		-->
		<Button target="_blank" href="https://github.com/roaming97/">
			<img
				src="/img/ico/github.svg"
				class="invert"
				width="24"
				height="24"
				alt="github icon"
			/>
			<span>GitHub</span>
		</Button>
		<div class="relative flex flex-col lg:flex-row items-center gap-2">
			<button
				class="flex items-center gap-2 w-max rounded-lg p-2 px-4 bg-white dark:bg-darkest transition-colors hover:bg-gray-200 hover:dark:bg-darker cursor-pointer border border-zinc-500 dark:border-dark"
				on:click={copy}
			>
				<span class="font-mono">contact@roaming97.com</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
					><path
						class="stroke-black dark:stroke-white"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20 9h-9a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z"
					/><path
						class="stroke-black dark:stroke-white"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
					/></svg
				>
			</button>
			{#if copied}
				<span
					in:fly={{ y: 10, easing: quintOut, duration: 300 }}
					out:fly={{ y: 10, easing: quintIn, duration: 300 }}
					class="w-max text-xs rounded-lg py-2 px-4 bg-green-500 text-white"
				>
					Copied!
				</span>
			{/if}
		</div>
	</div>
</div>
