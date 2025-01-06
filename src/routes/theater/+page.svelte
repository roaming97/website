<script lang="ts">
	import { onMount } from 'svelte';

	let playing = $state('');

	onMount(() => {
		async function importLiteYT() {
			import('@justinribeiro/lite-youtube');
		}
		importLiteYT();
	});
</script>

<div class="flex aspect-video w-full items-center justify-center bg-black">
	{#if playing}
		<lite-youtube videoid={playing}></lite-youtube>
	{:else}
		<p class="text-2xl font-normal text-brand-a drop-shadow-glow md:text-4xl lg:text-6xl">
			Select a video below.
		</p>
	{/if}
</div>
<p class="my-1 text-xs">
	<b class="text-brand-c">Note</b>: This is merely a proof of concept for video playback, a more
	sophisticated solution is planned for the next update.
</p>

{#snippet playlist(title: string, videos: string[] = [], description = '')}
	<div
		style:background="linear-gradient(180deg, #9a70ff40 0%, #9a70ff00 15%)"
		class="my-4 flex flex-col gap-1 rounded-lg p-4"
	>
		<h2 class="text-5xl tracking-tighter">{title}</h2>
		<p class="text-sm">{description}</p>
		<hr class="opacity-20" />
		<div class="grid grid-cols-1 gap-4 py-3 sm:grid-cols-2 lg:grid-cols-3">
			{#each videos as id}
				<button
					onclick={() => (playing = id)}
					class="transition duration-150 hover:drop-shadow-glow"
				>
					<img
						class="rounded-lg"
						src="https://img.youtube.com/vi/{id}/maxresdefault.jpg"
						alt="thumbnail for {id}"
					/>
				</button>
			{/each}
		</div>
	</div>
{/snippet}

{@render playlist(
	'Cruce',
	['9aZsFgVCU_8', 'rpNgt36YhYc', 'W9uaUO7op1o', 'NlWV0YbVG98'],
	'"Crossing" in Spanish. Taking part in creative introspection when met with a crossroads. Remembering, evolving, transcending. Pt. IV scheduled to release in 2025.'
)}
{@render playlist(
	'Demo Reels',
	['_R3Ml1tboYA', 'MjEqbqaJeEk', 'JjSr4w04URs', 'izN45iCkKLM', 'NjsrntTUJdo'],
	"All of my demo reels throughout the years, newest to oldest. Despite the name, most of these showcase work I never had released or had made specifically for those videos as a way to demonstrate my skills whichever year I hadn't completed enough personal projects."
)}
