<script lang="ts">
	import Everyday from '$lib/components/home/Everyday.svelte';
	import Projects from '$lib/components/home/Projects.svelte';
	import Intro from '$lib/components/home/Intro.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Callout from '$lib/components/Callout.svelte';
	import type { PageServerData } from './$types';
	import Stat from '$lib/components/Stat.svelte';
	import { r97_age } from '$lib/utils';
	import Button from '$lib/components/Button.svelte';

	let { data }: { data: PageServerData } = $props();

	let youtubeLite = $state();
	let everydays = $derived(data.everydays);

	$effect(() => {
		async function importLiteYT() {
			youtubeLite = import('@justinribeiro/lite-youtube');
		}
		importLiteYT();
	});
</script>

<Hero />
<div class="flex flex-col items-center gap-24 bg-white dark:bg-darkest lg:items-start lg:gap-32">
	<Intro />
	<Projects />
	{#if !data.ok}
		<div class="mx-auto w-full p-2 md:w-96 lg:w-1/2">
			<Callout level="critical"
				>Failed to retrieve data from server. This is likely due to your internet connection
				or a Lavender related issue.</Callout
			>
		</div>
	{/if}
	<div
		class="mx-auto grid w-full grid-cols-2 items-center justify-center gap-8
		rounded-xl border-2 border-dark bg-dark/10 p-4 sm:grid-cols-3 md:w-4/5 md:grid-cols-4 md:p-12"
	>
		<Stat amount={r97_age()} title="years" />
		<Stat amount={data.amount} suffix="+" title="media pieces" delay={200} />
		<Stat amount={data.repos} title="repositories" delay={400} />
		<Stat amount={20} suffix="+" title="clients" delay={600} />
	</div>
	<h1 class="w-screen text-center text-5xl lg:text-7xl">Motion reels</h1>
	<div class="flex w-full flex-col items-center justify-center gap-8 lg:flex-row">
		<lite-youtube videoid="_R3Ml1tboYA"></lite-youtube>
		<lite-youtube videoid="MjEqbqaJeEk"></lite-youtube>
	</div>
	<div class="flex flex-col gap-8">
		<h1 class="w-full text-center text-5xl lg:w-screen lg:text-7xl">Everydays</h1>
		<Everyday {everydays} />
		<div class="flex w-full flex-col items-center lg:w-screen">
			<Button href="https://x.com/roaming98">
				<span class="text-xl">View all</span>
			</Button>
		</div>
	</div>
</div>

<style lang="postcss">
	lite-youtube {
		@apply aspect-video md:w-1/3;
	}
</style>
