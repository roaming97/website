<script lang="ts">
	import ImageTile from '$lib/components/ImageTile.svelte';
	import type { LavenderEntry } from '$lib/types';

	let { everydays }: { everydays: Promise<LavenderEntry>[] } = $props();
</script>

<div class="scroll flex items-center gap-8">
	{#each everydays as promise}
		{#await promise}
			<ImageTile />
		{:then thumbnail}
			<ImageTile src={thumbnail.b64} />
		{/await}
	{/each}
</div>

<style lang="postcss">
	.scroll {
		animation-name: scroll;
		animation-duration: 40s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	.scroll:hover,
	.scroll:focus {
		animation-play-state: paused;
	}
	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
