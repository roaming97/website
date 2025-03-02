<script lang="ts">
	import GoBack from '$lib/components/nook/GoBack.svelte';
	import BentoGrid from '$lib/components/ui/bento-grid/BentoGrid.svelte';
	import BentoGridItem from '$lib/components/ui/bento-grid/BentoGridItem.svelte';
	import { relative_time } from '$lib/utils';
	import type { PageServerData } from './$types';

	const LAST_EDIT = '2025-03-01';

	let { data }: { data: PageServerData } = $props();
	let hello_png = $derived(`data:image/png;base64,${data.hello.b64}`);
</script>

{#snippet mod_item(title: string, description: string, src: string, href: string)}
	<BentoGridItem {title} {description}>
		{#snippet icon()}
			<img class="size-10 rounded-md shadow" {src} alt="Sodium icon" />
		{/snippet}
		<br />
		<a {href} target="_blank">Get {title}! &rightarrow;</a></BentoGridItem
	>
{/snippet}

<article class="flex flex-col gap-8">
	<GoBack />
	<div
		class="flex flex-col gap-2 rounded-md border-2 border-neutral-300 p-5 drop-shadow-glow dark:border-dark dark:bg-darkest"
	>
		<div
			class="flex flex-col gap-4 text-balance border-l-4 border-green-400 bg-green-400/10 pb-5 pl-4 pt-2"
		>
			<p>
				<b class="text-green-700 dark:text-green-400">Minecraft</b> is that one Java project
				by
				<b>Markus "Notch" Persson</b> that took off sometime in 2009, giving birth to
				<b>Mojang</b> and is- wait, I don't need to explain this, you know what Minecraft is!
			</p>
			<p>
				Being born in the 21st century, it's evident that I grew up with this game, which
				makes it hold a special place in my heart. It's the single video game I've wasted
				the most hours of my life on, safely in the tens of thousands.
			</p>
		</div>
		<small class="italic opacity-50"
			>Last edited: {LAST_EDIT} ({relative_time(new Date(LAST_EDIT))})</small
		>
		<img
			src={hello_png}
			class="rounded-md"
			alt="A Minecraft world"
			title="A peaceful Minecraft survival world."
		/>
	</div>
	<div class="flex flex-col gap-2">
		<h1>Presentation</h1>
		<p>
			I got to know about this game around version Alpha when a friend showed me a YouTube
			video showcasing the cave system and the tools needed to survive in it. It was a very
			old video and I'm pretty sure it's not available anymore, but the player was located in
			a large cave with a low ceiling on it while holding a pickaxe, that's about as much as I
			can remember.
		</p>
		<p>
			The game's existence faded from my memory shortly after that first exposition to it
			until years later, when the Java applet for the full game was being distributed for free
			on websites and Facebook, so that was pretty convenient to properly play the game, even
			if stuck at version <b>1.5.2</b>. Afterwards, I switched to <b>1.7.4</b>, followed the
			game's updated until <b>1.8.8</b> where I comfortably remained for many years, before
			finally coming back to the game on <b>1.14</b> during the renaissance of the game in 2019
			and have stayed up to date since then.
		</p>
		<br />
		<h1>My setup</h1>
		<p>
			My computer hardware <a
				class="underline"
				href="/blog/faq#what-are-your-pc-specifications"
				target="_blank">is far from stellar</a
			>. That's why I play on a modded client that loads some optimization mods to improve my
			game's performance and make it more suitable for my hardware. These mods are loaded
			using <a class="underline" href="https://fabricmc.net/"><b>Fabric</b></a>, a loader that
			lets me use these optimization mods in my Minecraft instance. I haven't tried gameplay
			or content mods for many years now as I still enjoy the purely vanilla experience of
			Minecraft singleplayer.
		</p>
		<p>
			Although the default Minecraft launcher is sufficient for me, I might give alternative
			launchers like <b>Prism</b> or <b>MultiMC</b> a try in the future.
		</p>
		<p>Here's the list of mods I use so you can perhaps try them out for yourself:</p>
		<BentoGrid>
			{@render mod_item(
				'Sodium',
				'Rendering engine and optimization mod for the Minecraft client which improves frame rates and reduces micro-stutter.',
				'https://raw.githubusercontent.com/CaffeineMC/sodium/refs/heads/dev/common/src/main/resources/sodium-icon.png',
				'https://github.com/CaffeineMC/sodium/releases'
			)}
			{@render mod_item(
				'Lithium',
				'Minecraft mod which works to optimize many areas of the game in order to provide better overall performance.',
				'https://raw.githubusercontent.com/CaffeineMC/lithium/refs/heads/develop/common/src/main/resources/assets/lithium/lithium-icon.png',
				'https://github.com/CaffeineMC/lithium/releases'
			)}
			{@render mod_item(
				'Entity Culling',
				"Mod that uses async path-tracing to hide entities that aren't visible.",
				'https://cdn.modrinth.com/data/NNAgCjsB/7873452d6cede4daed12da3d7d8c193ab88b4fd6_96.webp',
				'https://modrinth.com/mod/entityculling'
			)}
		</BentoGrid>
	</div>
</article>
