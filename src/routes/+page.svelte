<script lang="ts">
	import Callout from '$lib/components/Callout.svelte';
	import { Everyday, Projects, Intro, Hero } from '$lib/components/home';
	import type { PageServerData } from './$types';
	import Stat from '$lib/components/Stat.svelte';
	import { r97_age } from '$lib/utils';
	import Button from '$lib/components/Button.svelte';

	let { data }: { data: PageServerData } = $props();
</script>

{#snippet yt_embed(src: string)}
	<iframe
		{src}
		title="youtube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
{/snippet}

<Hero />
<div class="flex flex-col items-center lg:items-start gap-24 lg:gap-32 dark:bg-darkest bg-white">
	<Intro />
	<Projects />
	{#if !data.ok}
		<div class="w-auto mx-auto">
			<Callout level="critical"
				>Failed to retrieve data from server. This is likely due to my Lavender instance not
				working at the moment.</Callout
			>
		</div>
	{/if}
	<div
		class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center
		p-4 md:p-12 w-full md:w-4/5 mx-auto bg-dark/10 rounded-xl border-2 border-dark"
	>
		<Stat amount={r97_age()} title="years" />
		<Stat amount={data.amount} suffix="+" title="media pieces" delay={200} />
		<Stat amount={data.repos} title="repositories" delay={400} />
		<Stat amount={20} suffix="+" title="clients" delay={600} />
	</div>
	<h1 class="w-screen text-5xl lg:text-7xl text-center">Motion reels</h1>
	<div class="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
		{@render yt_embed('https://www.youtube.com/embed/_R3Ml1tboYA?si=8B-_J1zfkyd-VNRw')}
		{@render yt_embed('https://www.youtube.com/embed/MjEqbqaJeEk?si=M7V00qDmeYMTwAdY')}
	</div>
	<div class="flex flex-col gap-8">
		<h1 class="w-full lg:w-screen text-5xl lg:text-7xl text-center">Everydays</h1>
		{#await data.everydays}
			<Everyday />
		{:then everydays}
			<Everyday images={everydays.thumbnails} />
		{/await}
		<div class="w-full lg:w-screen flex flex-col items-center">
			<Button href="https://x.com/roaming98">
				<span class="text-xl">View all</span>
			</Button>
		</div>
	</div>
</div>

<style lang="postcss">
	iframe {
		@apply md:w-1/3 aspect-video;
	}
</style>
