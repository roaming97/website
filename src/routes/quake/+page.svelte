<script lang="ts">
	import Spinner from '$lib/components/Spinner.svelte';
	import GoBack from '$lib/components/nook/GoBack.svelte';
	import BentoGridItem from '$lib/components/ui/bento-grid/BentoGridItem.svelte';
	import BentoGrid from '$lib/components/ui/bento-grid/BentoGrid.svelte';
	import { b64_to_image, relative_time } from '$lib/utils';
	import type { PageServerData } from './$types';
	import Callout from '$lib/components/ui/Callout.svelte';

	const LAST_EDIT = '2025-03-01';

	let { data }: { data: PageServerData } = $props();

	let jam2_tronyn = $derived(
		data.screenshots[1]
			.then((s) => b64_to_image(s.b64))
			.catch((e) => {
				console.warn(e);
				return 'https://www.quaddicted.com/reviews/screenshots/func_mapjam2.jpg';
			})
	);
	let ad_tears = $derived(
		data.screenshots[2]
			.then((s) => b64_to_image(s.b64))
			.catch((e) => {
				console.warn(e);
				return 'https://images.quaddicted.com/500x,jpeg/https://www.quaddicted.com/files/quaddicted-images/by-sha256/7a/7ad993da6c760c446ca31fad71e9f5b6c9eee99b6354f161aa746b572fe70a7d/ad_v1_80p1final.jpg';
			})
	);
</script>

{#snippet engine_item(title: string, description: string, href: string, recommended?: boolean)}
	<BentoGridItem {title} {description}>
		{#if recommended}
			<p class="text-sm font-bold text-brand-b">(Recommended)</p>
		{/if}
		<br />
		<a {href} target="_blank">Get {title}! &rightarrow;</a></BentoGridItem
	>
{/snippet}

{#snippet map_item(
	title: string,
	description: string,
	src: string | Promise<string>,
	href: string,
	author: string,
	mod = 'Vanilla'
)}
	<BentoGridItem {title} {description}>
		{#snippet header()}
			<a class="relative max-w-full" {href} target="_blank" aria-label="picture">
				{#await src}
					<Spinner />
				{:then src}
					<img class="rounded-lg" {src} alt="Screenshot of {title}" />
				{/await}
			</a>
		{/snippet}
		<br />
		<small>Author(s): <b>{author}</b></small>
		<p class="font-extrabold opacity-40">
			{mod}
		</p>
	</BentoGridItem>
{/snippet}

<div class="flex flex-col gap-8">
	<GoBack />
	<div
		class="flex flex-col gap-2 rounded-md border-2 border-neutral-300 p-5 drop-shadow-glow dark:border-dark dark:bg-darkest md:flex-row-reverse"
	>
		<div class="flex flex-col gap-2 md:w-1/2">
			<div
				class="flex flex-col gap-4 text-balance border-l-4 border-orange-400 bg-orange-400/10 pb-5 pl-4 pt-2"
			>
				<p>
					<b class="text-orange-700 dark:text-orange-400">Quake</b> was the
					<b>id Software</b>
					FPS series that came right after DOOM, all the way back in 1996. Despite its subpar
					reception compared to the former, the mark it left on video games as a whole is indelible.
				</p>
				<p>
					A couple of years ago I picked it up after seeing it on sale on Steam, what
					followed was my steadily growing obsession that has lasted a while longer than I
					had prepared for. I can consider this one of my comfort games.
				</p>
				<p>
					On this page I'd like to share some of my favorite resources and experiences
					related to Quake. I'll keep it Quake 1 exclusive for now as I haven't immersed
					myself in any of the other entries in the series yet.
				</p>
			</div>
			<small class="italic opacity-50"
				>Last edited: {LAST_EDIT} ({relative_time(new Date(LAST_EDIT))})</small
			>
		</div>
		<div class="md:w-2/3 lg:px-1 xl:w-auto">
			{#await data.screenshots[0]}
				<div class="flex size-full flex-col items-center justify-center">
					<Spinner />
				</div>
			{:then start}
				<img
					src={b64_to_image(start.b64)}
					class="rounded-md"
					alt="The starting area of Quake"
					title="start.bsp in all of its glory."
				/>
			{/await}
		</div>
	</div>
	<article class="flex flex-col gap-7">
		<section id="favorites">
			<a href="#favorites">
				<h1>Favorites</h1>
			</a>
			<p>
				These are some of my favorite Quake custom maps and episodes. I suggest starting
				with the maps before tackling the episodes as those may contain modifications to the
				base game.
			</p>
			<p>
				Every entry will state if it's made with <b>Vanilla</b>
				Quake in mind or utilizes some other mod like
				<a href="http://lunaran.com/copper/" target="_blank"
					><b class="text-amber-600 underline dark:text-amber-300">Copper</b></a
				>. Standalone episodes will usually come with the mod bundled in, but be sure to
				check the <code>README</code> files that ship with each just in case.
			</p>
			<Callout level="info">
				<p>
					This list is not comprehensive by any means as it reflects exclusively my
					personal preference, I might add more recommendations here in the future. You
					can check out <a href="https://www.quaddicted.com/">Quaddicted</a>
					and <a href="https://www.slipseer.com/index.php">Slipseer</a> to explore more custom
					content for Quake.
				</p>
			</Callout>
			<a href="#favorite_maps">
				<h2 id="favorite_maps">Maps</h2>
			</a>
			<BentoGrid className="max-w-full">
				{@render map_item(
					'Cerulean Tears',
					"Short and sweet episode 4 themed map, reminiscent of the original campaign's level style.",
					'https://www.slipseer.com/index.php?attachments/5thcer1-jpg.5667/',
					'https://www.slipseer.com/index.php?resources/q1sp-cerulean-tears.416/',
					'FifthElephant'
				)}
				{@render map_item(
					'Templum Exsilli',
					'Structured like an older map but with colored lighting for a more modern look, compact but effective map design.',
					'https://www.slipseer.com/index.php?attachments/templum_banner-png.5598/',
					'https://www.slipseer.com/index.php?resources/templum-exsilli-mc_rj2_tonhao-solo-release.406/',
					'Tonhao'
				)}
				{@render map_item(
					'Crack in the Sky',
					'Nicely interconnected map with a very nice flow and fun combat, beware of spawn-in monsters! The secrets might take you some time as well.',
					'https://www.slipseer.com/index.php?attachments/frogscrack_2023-04-09_20-56-24-png.2663/',
					'https://www.slipseer.com/index.php?resources/crack-in-the-sky.209/',
					'1600frogs',
					'Copper'
				)}
				{@render map_item(
					"The Trickster's Domain",
					'Large map with fun combat and clever secrets, enjoyed it especially on Nightmare difficulty. Looks great too.',
					'https://plaw.info/quakemaps/plaw03.jpg',
					'https://plaw.info/quakemaps/plaw03',
					'Paul Lawitzki',
					'Copper'
				)}
				{@render map_item(
					'Koshta Belorn',
					'Challenging map with infinite replay value, has an unusual combat style while still feeling like vanilla. Shipped alongside other maps in a pack which are pretty fun too.',
					jam2_tronyn,
					'https://www.slipseer.com/index.php?resources/q1sp-cerulean-tears.416/',
					'Tronyn'
				)}
				{@render map_item(
					'High Noon In Akhetaten',
					'Very large non-linear outdoor map filled with monsters, offering intense open horde-based battles. Ironwail/vkQuake recommended.',
					'https://www.slipseer.com/index.php?attachments/shot1-png.3021/',
					'https://www.slipseer.com/index.php?resources/high-noon-in-akhetaten.240/',
					'ZetaByt',
					'Copper'
				)}
			</BentoGrid>
			<a href="#favorite_episodes">
				<h2 id="favorite_maps">Episodes</h2>
			</a>
			<BentoGrid className="max-w-full md:grid-cols-2">
				{@render map_item(
					'Ritual',
					'Lengthy old-school episode that remains very faithful to the original campaign with rock solid gameplay, it can even be played on the original MS-DOS version!',
					'https://www.slipseer.com/index.php?attachments/winquake_mark_v_0001-png.5733/',
					'https://www.slipseer.com/index.php?resources/ritual.424/',
					'Zothique & Sock'
				)}
				{@render map_item(
					'Honey',
					'Classic episode with large organic architecture over pretty simple but fun gameplay. Comes with a few new features, very replayable. If you purchased the Quake remaster, it should be available as a free addon within the game.',
					'https://www.slipseer.com/index.php?attachments/spasm0003-png.716/',
					'https://www.slipseer.com/index.php?resources/honey.88/',
					'czg'
				)}
				{@render map_item(
					'Underdark Overbright',
					'Seven-map episode that comes bundled in with the Copper mod and the Quake remaster as a free addon, showcasing some of its gameplay enhancements accompanied by stellar level design.',
					'https://www.slipseer.com/index.php?attachments/udob4_1lg-jpg.66/',
					'http://lunaran.com/copper/download',
					'Lunaran & Scampie',
					'Copper'
				)}
				{@render map_item(
					'Arcane Dimensions',
					"In my opinion, the definitive Quake mod, comes with a lot of new monsters and weapons packed in a huge campaign filled with really high-quality maps. To play the map shown in the screenshot, look for 'Tears of the False God' in the hub map.",
					ad_tears,
					'https://www.quaddicted.com/db/v1/maps/7ad993da6c760c446ca31fad71e9f5b6c9eee99b6354f161aa746b572fe70a7d',
					'Sock, Bal, EricW, FifthElephant, Giftmacher, Lunaran, Preach, PulSaR, Scampie, ionous, mfx & necros',
					'Arcane Dimensions'
				)}
			</BentoGrid>
		</section>
		<section id="how_to_play">
			<a href="#how_to_play">
				<h1>How can I play it?</h1>
			</a>
			<p>
				The official way to acquire any of the Quake games nowadays is through <a
					href="https://store.steampowered.com/app/2310/QUAKE/"
					class="underline"
					target="_blank"><b>Steam</b></a
				>,
				<a
					href="https://store.epicgames.com/en-US/p/quake"
					target="_blank"
					class="underline"><b>Epic Games</b></a
				>, or any other reputable storefront, granted you don't already have a boxed copy
				lying around at home.
			</p>
			<p>
				Whichever the case, what's important in that your copy's "registered" state depends
				on a file named <code>pak1.pak</code> located within your game's directory
				(specifically in the <code>id1</code> folder), as <code>pak0.pak</code> only contains
				the assets of the shareware version of the game.
			</p>
			<p>
				If you're curious you can check out
				<a href="https://quakewiki.org/wiki/.pak" target="_blank">this article</a>, but it's
				not something crucial to know.
			</p>
			<br />
			<a href="#source-ports">
				<h2 id="source-ports">Source ports</h2>
			</a>
			<p>
				There are a myriad of source ports available for Quake thanks to the shareware
				version of the game being open-sourced in 1999, allowing developers to adapt the
				game to today's standards, now targeting modern hardware for computers that very
				well surpass the original requirements for MS-DOS.
			</p>
			<p>
				Simultaneously, there are different source ports for different uses, so for
				simplicity sake I will divide them into categories:
			</p>
			<br />
			<h3>Singleplayer</h3>
			<BentoGrid className="mx-0">
				{@render engine_item(
					'Ironwail',
					"QuakeSpasm fork that uses modern OpenGL features for its performance enhancements. This is the one I use as it's the one that feels the most plug and play for me.",
					'https://github.com/andrei-drexler/ironwail/releases',
					true
				)}
				{@render engine_item(
					'vkQuake',
					'QuakeSpasm fork that uses Vulkan instead of OpenGL for rendering, a small handful of extremely large maps can only run here.',
					'https://github.com/Novum/vkQuake/releases'
				)}
				{@render engine_item(
					'QuakeSpasm',
					'The Quake engine the previous two are based from, it has strong compatibility and has newer features compared to older source ports.',
					'https://sourceforge.net/projects/quakespasm/'
				)}
			</BentoGrid>
			<br />
			<h3>Speedrunning</h3>
			<BentoGrid className="mx-0">
				{@render engine_item(
					'JoeQuake',
					"Standard Quake speedrunning source port. Since it's based on QuakeWorld it enables techniques such as bunnyhopping and comes with some timing tools.",
					'https://github.com/j0zzz/JoeQuake/releases'
				)}
				{@render engine_item(
					'TASQuake',
					'Quake with TAS functionality for automated speedruns, opens the door to exploring the limits of speedrunning the game.',
					'https://github.com/lipsanen/TASQuake/releases'
				)}
			</BentoGrid>
			<br />
			<h3>Multiplayer</h3>
			<BentoGrid className="mx-0">
				<BentoGridItem
					title="KEX Engine"
					description="It's the engine the Quake remaster runs on and has online multiplayer out of the box, although the game will prompt you to create a Bethesda account to access it."
				/>
				{@render engine_item(
					'nQuake',
					'The defacto multiplayer QuakeWorld source port as far as I know, based on ezQuake.',
					'https://nquake.com'
				)}
			</BentoGrid>
			<br />
			<p>
				There are many more than the ones listed here, but I think those are the essential
				ones nowadays. For the adventurous, here's a <a
					href="https://quakeengines.github.io/"
					target="_blank">larger list</a
				>.
			</p>
		</section>
		<section id="maps">
			<a href="#maps">
				<h1>Have <i>you</i> made any maps?</h1>
			</a>
			<p>
				I have! None of them are available for download currently, though. They are still
				very rough around the edges and I'd like to gather some more experience before
				committing to release something. Nevertheless, whenever I complete something I'm
				happy with I'll make sure to host the downloadable files on this page.
			</p>
			<div class="grid grid-cols-1 gap-2 py-2 md:grid-cols-2 xl:grid-cols-3">
				{#each data.screenshots.slice(3) as screenshot}
					{#await screenshot}
						<Spinner />
					{:then screenshot}
						<img
							class="rounded-md"
							src={b64_to_image(screenshot.b64)}
							alt={screenshot.filename}
						/>
					{/await}
				{/each}
			</div>
			<blockquote>
				What I release might be an entire episode, not just a single map. Who knows?
			</blockquote>
		</section>
	</article>
</div>

<style lang="postcss">
	h1,
	h2 {
		text-decoration: underline;
	}
	h3 {
		@apply mb-1;
	}
	a {
		@apply w-max font-bold hover:text-brand-c;
	}
	section {
		@apply flex flex-col gap-2;
	}
</style>
