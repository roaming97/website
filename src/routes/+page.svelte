<script lang="ts">
	import Software from '$lib/components/home/Software.svelte';
	import Design from '$lib/components/home/Design.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import type { PageServerData } from './$types';
	import Animation from '$lib/components/home/Animation.svelte';
	import { onMount } from 'svelte';

	let { data }: { data: PageServerData } = $props();

	let images = $derived(data.images);

	onMount(() => {
		async function importLiteYT() {
			import('@justinribeiro/lite-youtube');
		}
		importLiteYT();
	});
</script>

<Hero />
<div class="flex flex-col items-center gap-20 bg-white dark:bg-darkest lg:gap-28">
	<div class="mx-auto flex animate-slight_bounce flex-col justify-center gap-4 pt-24">
		<div class="flex flex-col items-center justify-between drop-shadow-glow">
			<h1
				class="w-max bg-brand-c p-3 text-center text-2xl tracking-tight text-black sm:text-3xl lg:text-5xl"
			>
				Here's what I like to create!
			</h1>
			<div
				class="h-0 w-0 border-x-[24px] border-t-[24px] border-x-transparent border-y-brand-c"
			></div>
		</div>
	</div>
	<Design {images} />
	<Animation />
	<Software />
</div>
