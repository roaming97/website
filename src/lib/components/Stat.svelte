<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quartInOut, quintOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	export let amount: number;
	export let title: string;
	export let suffix = '';

	const count = tweened(0, {
		duration: 2400,
		easing: quartInOut
	});

	$: if (amount && !isNaN(amount)) {
		$count = amount;
	}
</script>

<div class="flex flex-col gap-2 items-center justify-center cursor-default">
	<h1
		class="flex items-center justify-center text-6xl tracking-normal font-mono
		font-black lg:text-9xl transition-colors duration-300 hover:text-brand-b"
	>
		{Math.round($count)}{suffix}
	</h1>
	<p class="text-base lg:text-xl text-gray-500">{title}</p>
</div>
