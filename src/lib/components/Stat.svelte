<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly } from 'svelte/transition';
	import { quartInOut, quintOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	export let amount: number;
	export let title: string;
	export let delay = 0;
	export let suffix = '';

	let go = false;
	let node: HTMLElement;

	const count = tweened(0, {
		duration: 2400,
		delay: delay + 250,
		easing: quartInOut
	});

	$: if (amount && !isNaN(amount) && go) {
		$count = amount;
	}
</script>

<IntersectionObserver
	once
	element={node}
	let:intersecting
	on:intersect={() => {
		go = true;
	}}
	threshold={0.9}
>
	<div bind:this={node} class="flex flex-col gap-2 items-center justify-center cursor-default">
		{#if intersecting}
			<h1
				class="flex items-center justify-center text-7xl tracking-normal font-mono
				 font-black lg:text-9xl transition-colors duration-300 hover:text-brand-b leading-none"
				transition:fly={{ y: 20, duration: 500, delay, easing: quintOut }}
			>
				{Math.round($count)}{suffix}
			</h1>
			<p
				class="text-base lg:text-xl text-gray-500"
				transition:fly={{ y: 20, duration: 450, delay: delay + 200, easing: quintOut }}
			>
				{title}
			</p>
		{/if}
	</div>
</IntersectionObserver>
