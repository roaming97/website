<script lang="ts">
	import ImageTile from '$lib/components/ImageTile.svelte';
	import type { LavenderEntry } from '$lib/types';

	let { images = [] }: Partial<{ images: LavenderEntry[] }> = $props();
</script>

<div class="scroll flex items-center gap-8">
	{#if images.length > 0}
		{#each images as img}
			<ImageTile src={img.b64} />
		{/each}
		{#each images as img}
			<ImageTile src={img.b64} />
		{/each}
	{:else}
		{#each Array(12) as _}
			<ImageTile />
		{/each}
	{/if}
</div>

<style lang="postcss">
	.scroll {
		animation-name: scroll;
		animation-duration: 60s;
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
