<script lang="ts">
	import type { LavenderEntry } from '$lib/types';
	import Callout from '../ui/Callout.svelte';
	import BentoGrid from '../ui/bento-grid/BentoGrid.svelte';
	import BentoGridItem from '../ui/bento-grid/BentoGridItem.svelte';
	import Button from '../ui/Button.svelte';

	interface Props {
		images: {
			everydays: Promise<LavenderEntry>[];
			artwork: Promise<LavenderEntry>[];
		};
	}

	let { images }: Props = $props();
</script>

{#snippet grid_item(entry: LavenderEntry, i: number, prefix = '')}
	{#if entry}
		<BentoGridItem
			description="{prefix}{entry.filename}"
			className={i > 0 && i === 8 ? 'md:col-span-3' : ''}
		>
			{#snippet header()}
				<a
					href="data:image/webp;base64,{entry.b64}"
					target="_blank"
					class="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] flex w-full flex-1 rounded-lg border border-transparent bg-neutral-100 dark:border-white/[0.2] dark:bg-black"
				>
					<img
						class="h-full w-full rounded-lg"
						src="data:image/webp;base64,{entry.b64}"
						alt="{entry.filename} image"
					/>
				</a>
			{/snippet}
		</BentoGridItem>
	{/if}
{/snippet}

{#snippet items(promise: Promise<LavenderEntry>, i: number, prefix = '')}
	{#await promise}
		<BentoGridItem title="Loading..." description="Fetching data from Lavender..."
		></BentoGridItem>
	{:then entry}
		{@render grid_item(entry, i, prefix)}
	{/await}
{/snippet}

<div class="relative flex w-full flex-col">
	<h2
		class="absolute left-4 top-4 select-none text-4xl font-light tracking-tight opacity-30 lg:text-8xl"
	>
		Design
	</h2>
	<div class="dotted flex flex-col gap-6 py-12">
		<div class="flex flex-col gap-8">
			{#if images.artwork.length > 0 && images.everydays.length > 0}
				<BentoGrid className="mt-8 lg:mt-16">
					{#each images.artwork as promise, i}
						{@render items(promise, i)}
					{/each}
					{#each images.everydays as promise, i}
						{@render items(promise, i, 'everydays.')}
					{/each}
				</BentoGrid>
				<div class="flex w-full flex-col items-center lg:w-screen">
					<Button href="https://x.com/roaming98">
						<div class="flex items-center gap-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="24"
								viewBox="0 0 1200 1227"
								><path
									class="fill-black dark:fill-white"
									d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
								/></svg
							>
							<span class="text-xl">View all</span>
						</div>
					</Button>
				</div>
			{:else}
				<div class="mx-auto w-max">
					<Callout level="critical"
						>Failed to retrieve data from server. This is likely due to a Lavender
						related issue.</Callout
					>
				</div>
			{/if}
		</div>
	</div>
</div>
