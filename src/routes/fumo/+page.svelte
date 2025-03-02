<script lang="ts">
	import GoBack from '$lib/components/nook/GoBack.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import { b64_to_image, relative_time } from '$lib/utils';
	import type { PageServerData } from './$types';

	const LAST_EDIT = '2025-03-01';

	let { data }: { data: PageServerData } = $props();

	let collection = $derived(b64_to_image(data.collection.b64, 'jpg'));
</script>

{#snippet plush(name: string, date: string, src: string)}
	<div
		class="flex w-full flex-col gap-2 rounded-lg border border-brand-c bg-brand-c/10 p-4 shadow-lg"
	>
		<img class="size-50 rounded-lg drop-shadow-glow" {src} alt={name} />
		<div class="flex flex-col">
			<p class="text-lg font-black">{name}</p>
			<small
				>Arrived {relative_time(new Date(date))} on {new Date(
					date
				).toLocaleDateString()}</small
			>
		</div>
	</div>
{/snippet}

<article class="flex flex-col gap-8">
	<GoBack />
	<div
		class="flex flex-col gap-2 rounded-md border-2 border-neutral-300 p-5 drop-shadow-glow dark:border-dark dark:bg-darkest"
	>
		<div
			class="flex flex-col gap-4 text-balance border-l-4 border-pink-400 bg-pink-400/10 pb-5 pl-4 pt-2"
		>
			<p>
				For the longest time I've liked this game series called
				<b class="text-pink-700 dark:text-pink-400">Touhou</b> published by
				<b>Team Shanghai Alice</b>, said team consisting entirely of one <b>ZUN</b>, if
				you've been on the internet long enough you should recognize it. I find myself more
				fond of the derivative material more often than the games, hence why one of my
				hobbies became collecting plushies relating to the magical girls who shoot bullets
				in fancy patterns at each other.
			</p>
			<p>
				To be specific, the soft friends I focus on collecting are named FumoFumo or <b
					class="text-pink-700 dark:text-pink-400">Fumo</b
				>
				for short. The name comes from the Japanese <i>ふもふも</i> which is used to describe
				something fluffy or soft to the touch. I have been collecting them since 2019, currently
				owning seven fumos, one of which is not shown in the picture but appears often on the
				gallery.
			</p>
		</div>
		<small class="italic opacity-50"
			>Last edited: {LAST_EDIT} ({relative_time(new Date(LAST_EDIT))})</small
		>
		<img
			src={collection}
			alt="My Touhou plushie collection"
			title="My Touhou plush collection without counting Patchouli v1 as of February 2025."
		/>
	</div>
	<div class="flex flex-col gap-2">
		<h1>Fumo list</h1>
		<blockquote>
			You can see a list of all the currently existing official fumos <a
				href="https://fumo.website/fumo_table.html"
				target="_blank"
			>
				<b>here</b>
			</a>.
		</blockquote>
		<p>
			I currently own these plushies. I have purchased more fumos as gifts but I'll only list
			the ones that live with me.
		</p>
		<div class="dotted grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
			{@render plush(
				'Sanae Kochiya (v1.5)',
				'2025-02-13',
				'https://img.amiami.com/images/product/main/234/GOODS-04428515.jpg'
			)}
			{@render plush(
				'Cirno (v1.5)',
				'2024-04-23',
				'https://img.amiami.com/images/product/main/233/GOODS-04390414.jpg'
			)}
			{@render plush(
				'Patchouli Knowledge (Korindou)',
				'2024-03-24',
				'https://img.amiami.com/images/product/main/232/GOODS-04367915.jpg'
			)}
			{@render plush(
				'Remilia Scarlet (Korindou)',
				'2022-12-02',
				'https://img.amiami.com/images/product/main/222/GOODS-04230803.jpg'
			)}
			{@render plush(
				'Patchouli Knowledge (v1.5)',
				'2020-12-22',
				'https://img.amiami.com/images/product/main/222/GOODS-04246799.jpg'
			)}
			{@render plush(
				'Yuuka Kazami',
				'2020-07-29',
				'https://img.amiami.com/images/product/main/241/GOODS-04437496.jpg'
			)}
			{@render plush(
				'Patchouli Knowledge',
				'2020-01-09',
				'https://static.myfigurecollection.net/upload/items/1/12882-62515.jpg'
			)}
		</div>
	</div>
	<div class="dotted grid grid-cols-1 items-center gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
		<div class="flex flex-col">
			<h1 class="mb-1 text-4xl">Gallery</h1>
			<small>I'll try to take more pictures of them in the future.</small>
			<small>Sorted from newest to oldest.</small>
		</div>
		{#each data.gallery as promise}
			{#await promise}
				<div class="flex size-full items-center justify-center rounded-lg drop-shadow-glow">
					<Spinner />
				</div>
			{:then thumb}
				<img
					class="rounded-lg drop-shadow-glow"
					src={b64_to_image(thumb.b64, 'jpg')}
					alt={thumb.filename}
				/>
			{/await}
		{/each}
	</div>
</article>
