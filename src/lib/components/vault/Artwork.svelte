<script lang="ts">
	import type { PageServerData } from './../../../../.svelte-kit/types/src/routes/vault/$types.d.ts';
	import ImageTile from '$lib/components/ImageTile.svelte';

	export let data: PageServerData;
</script>

<div class="w-full flex flex-col-reverse xl:flex-row xl:justify-around items-center">
	<div class="flex flex-col items-center w-screen lg:w-auto">
		<div class="grid grid-cols-2 items-center gap-4 lg:gap-12 lg:flex">
			{#await data.latest}
				{#each Array(4) as _}
					<ImageTile />
				{/each}
			{:then files}
				{#each files as file}
					<ImageTile src={file.b64} />
				{/each}
			{/await}
		</div>
		<div class="flex flex-row-reverse items-center w-full pt-10 pb-2 pr-2 lg:pr-0">
			<a href="/vault" class="font-semibold text-lg tracking-wide text-right"
				>View more <span class="font-medium font-mono">&rightarrow;</span></a
			>
		</div>
	</div>
	<div class="flex flex-col items-center gap-12">
		<h1 class="text-5xl lg:text-7xl mb-4 font-blond text-center xl:text-right">
			<div class="hidden lg:block">
				<span class="block">Recent</span>
				<span class="block leading-10">artwork</span>
			</div>
			<span class="text-4xl my-4 block lg:hidden">Recent artwork</span>
		</h1>
		<img
			src="/img/latestwork_deco.png"
			alt="decoration"
			class="hidden w-[240px] h-auto invert dark:invert-0 xl:inline-block"
		/>
	</div>
</div>
