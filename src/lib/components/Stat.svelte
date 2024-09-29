<script lang="ts">
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { fly } from 'svelte/transition';
	import { quartInOut, quintOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	interface StatProps {
		amount: number;
		title: string;
		delay?: number;
		suffix?: string;
	}

	let { amount, title, delay = 0, suffix = '' }: StatProps = $props();

	let element = $state<HTMLElement>();
	let intersecting = $state(false);

	const count = tweened(0, {
		duration: 2000,
		delay: delay + 250,
		easing: quartInOut
	});

	$effect(() => {
		if (amount && !isNaN(amount) && intersecting) {
			$count = amount;
		}
		$inspect(intersecting);
	});
</script>

<IntersectionObserver once bind:intersecting {element}>
	<div bind:this={element} class="flex flex-col gap-2 items-center justify-center cursor-default">
		{#if intersecting}
			<h1
				class="flex items-center justify-center text-6xl tracking-normal font-mono
				 font-light lg:text-8xl transition-all duration-300 hover:text-brand-b
				 hover:drop-shadow-glow leading-none"
				transition:fly={{ y: 20, duration: 300, delay, easing: quintOut }}
			>
				{Math.round($count)}{suffix}
			</h1>
			<p
				class="text-base lg:text-xl text-gray-500"
				transition:fly={{ y: 20, duration: 350, delay: delay + 100, easing: quintOut }}
			>
				{title}
			</p>
		{/if}
	</div>
</IntersectionObserver>
