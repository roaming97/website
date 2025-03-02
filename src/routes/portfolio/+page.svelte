<script lang="ts">
	import Pane from '$lib/components/portfolio/Pane.svelte';
	import Stats from '$lib/components/portfolio/Stats.svelte';
	import TimelineItem from '$lib/components/portfolio/TimelineItem.svelte';
	import Callout from '$lib/components/Callout.svelte';
	import type { PageServerData } from './$types';
	import BentoGrid from '$lib/components/ui/bento-grid/BentoGrid.svelte';
	import BentoGridItem from '$lib/components/ui/bento-grid/BentoGridItem.svelte';
	import { cn } from '$lib/utils';

	const design_icons = [
		['Blender', 'blender'],
		['Affinity Photo', 'affinity_photo'],
		['Affinity Designer', 'affinity_designer'],
		['Affinity Publisher', 'affinity_publisher'],
		['Krita', 'krita'],
		['Figma', 'figma'],
		['Adobe Photoshop', 'photoshop'],
		['Adobe Illustrator', 'illustrator'],
		['Adobe Premiere', 'premiere'],
		['Adobe After Effects', 'after-effects'],
		['Adobe Animate', 'animate'],
		['Adobe Flash', 'flash'],
		['VEGAS Pro', 'vegas'],
		['DaVinci Resolve', 'resolve']
	];
	const language_icons = [
		['HTML', 'html'],
		['CSS', 'css'],
		['JavaScript', 'javascript'],
		['TypeScript', 'typescript'],
		['Python', 'python'],
		['Rust', 'rust']
	];
	const lib_icons = [
		['Svelte', 'svelte'],
		['TailwindCSS', 'tailwind'],
		['Bootstrap', 'bootstrap'],
		['Sass', 'sass'],
		['Supabase', 'supabase'],
		['SQLite', 'sqlite'],
		['Flask', 'flask'],
		['Three.js', 'three'],
		['Express.js', 'express']
	];
	const tool_icons = [
		['Visual Studio Code', 'vscode'],
		['Vim', 'vim'],
		['Visual Studio', 'visual-studio'],
		['PyCharm', 'pycharm'],
		['Linux', 'linux'],
		['Vercel', 'vercel'],
		['Bun', 'bun'],
		['pnpm', 'pnpm'],
		['Node.js', 'nodejs'],
		['Git', 'git'],
		['GitHub', 'github']
	];
	const learning_icons = [
		['C', 'c'],
		['C#', 'csharp'],
		['Go', 'go'],
		['Zig', 'zig'],
		['Docker', 'docker']
	];

	let { data }: { data: PageServerData } = $props();

	let { amount, repos } = $derived(data);
</script>

{#snippet tag(label: string, className = 'border-indigo-900 bg-indigo-500', src = '')}
	<div
		class="flex w-max select-none items-center gap-1 rounded-md bg-brand-a/30 px-2 py-1 text-xs"
	>
		{#if src}
			<img class="h-4" {src} alt="{label} icon" />
		{:else}
			<div class={cn('h-4 w-4 rounded-full border', className)}></div>
		{/if}
		<span class="font-semibold">{label}</span>
	</div>
{/snippet}

{#snippet grid_item(
	name: string,
	description: string,
	icon_src: string,
	url: string,
	screenshot: string,
	tags: string[]
)}
	<BentoGridItem className={name === 'Almond' ? 'md:col-span-2' : ''} title={name} {description}>
		{#snippet icon()}
			<div class="rounded-lg bg-neutral-400/50 p-2 shadow-lg">
				<img src={icon_src} width="32" height="32" alt="{name.toLowerCase()} icon" />
			</div>
		{/snippet}
		{#snippet header()}
			<a
				href={url}
				target="_blank"
				class="flex w-full flex-1 rounded-lg border border-transparent bg-neutral-100 dark:border-white/[0.2] dark:bg-black"
				aria-label="picture"
			>
				<img
					class="rounded-lg"
					src="/img/screenshots/{screenshot}.webp"
					alt="{name} preview screenshot"
				/>
			</a>
		{/snippet}
		<hr class="my-3 border-neutral-400 dark:border-dark" />
		<div class="flex flex-wrap items-center gap-1">
			{#each tags as item}
				{@render tag(item, '', `/img/ico/${item.toLowerCase()}.svg`)}
			{/each}
		</div>
	</BentoGridItem>
{/snippet}

<div class="flex flex-col items-center gap-12">
	<article class="dotted p-4 py-8">
		<BentoGrid>
			{@render grid_item(
				'Almond',
				"Video archiving app to download YouTube videos into a local database. It's self-hosted, so anyone can host and run their own instance.",
				'/img/ico/almond.svg',
				'https://github.com/roaming97/Almond',
				'almond3',
				['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'Bootstrap']
			)}
			{@render grid_item(
				'ZipMyVid',
				'Compress your videos easily. This is my own take on 8mb.video that aims to be much more customizable while preserving the ease of use of that application.',
				'/img/ico/zmv.svg',
				'https://github.com/roaming97/ZipMyVid',
				'zipmyvid',
				['Svelte', 'Tailwind', 'FFmpeg']
			)}
			{@render grid_item(
				'vintran',
				'Free web file transfer tool made with compatibility in mind. It is meant to allow file transfers from older browsers and computers.',
				'/img/ico/network.png',
				'https://github.com/roaming97/vintran',
				'vintran1',
				['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'Tailwind']
			)}
			{@render grid_item(
				'Tangram',
				'Minimal graphics engine for games and applications with the help of SDL2.',
				'/img/ico/tangram_color.png',
				'https://github.com/roaming97/Tangram',
				'tangram1',
				['C', 'Python']
			)}
			<div class="flex items-center justify-center">
				<p class="text-xl font-bold text-brand-c drop-shadow-glow">
					More soon to be added...
				</p>
			</div>
		</BentoGrid>
	</article>
	<article>
		<h1>Experience</h1>
		<div class="mb-4 flex flex-col gap-1">
			<div class="flex items-center gap-1">
				{@render tag('Web development')}
				{@render tag('Motion/graphic design', 'border-teal-900 bg-teal-500')}
			</div>
		</div>
		<div class="flex flex-col">
			<TimelineItem
				work_area="web"
				role="Frontend web developer"
				period="October 2024 - Present"
				client="infraregistry"
			>
				<p class="mb-3">
					<a
						href="http://github.com/infraregistry"
						target="_blank"
						rel="noopener noreferrer">infraregistry</a
					> is a self-service platform that enables you to catalog, track, and manage your
					services and resources.
				</p>
				<ul>
					<li>
						<span>
							Translated Figma designs to functional and modular Svelte components.</span
						>
					</li>
					<li>
						<span
							>Implemented functionality that makes components across the application
							interact with a Go backend.</span
						>
					</li>
				</ul>
			</TimelineItem>
			<TimelineItem
				work_area="web"
				role="Fullstack web developer"
				period="July 2023 - January 2024"
				client="Loopable"
			>
				<p class="mb-3">
					Loopable is a website for tracking the validation process in RTO operations,
					created by education-focused Australian team <a
						target="_blank"
						href="https://pixeleducation.com.au">Pixel Education</a
					>.
				</p>
				<ul>
					<li>
						<span>
							Transformed application UI designs into code by writing modular Svelte
							components.</span
						>
					</li>
					<li>
						<span>
							Created a backend integration with Amazon Web Services (AWS)
							interactions within the application.</span
						>
					</li>
				</ul>
			</TimelineItem>
			<TimelineItem
				work_area="design"
				role="Freelance graphic/motion designer"
				period="February 2020 - February 2023"
				client="Various clients"
			>
				<p class="mb-3">
					Independently worked with mostly artists in the electronic music scene, to both
					create cover art designs for their releases and to bring those designs to life
					with motion graphics.
				</p>
				<ul>
					<li>
						<span
							>Helped guide the vision for music artists from different countries
							around the world into diverse designs for their music.</span
						>
					</li>
					<li>
						<span
							>Designed in a variety of styles for electronic music artists by
							creating both 2D and 3D graphics.</span
						>
					</li>
					<li>
						<span
							>Collaborated with other visual artists to execute one artist's ideas.</span
						>
					</li>
				</ul>
			</TimelineItem>
			<TimelineItem
				work_area="design"
				role="Senior graphic designer"
				period="September 2019 - October 2020"
				client="04 Collective"
				bottom
			>
				<p class="mb-3">
					Independently worked with mostly artists in the electronic music scene, to both
					create cover art designs for their releases and to bring those designs to life
					with motion graphics.
				</p>
				<ul>
					<li>
						<span
							>Helped guide the vision for music artists from different countries
							around the world into diverse designs for their music.</span
						>
					</li>
					<li>
						<span
							>Designed in a variety of styles for electronic music artists by
							creating both 2D and 3D graphics.</span
						>
					</li>
					<li>
						<span
							>Collaborated with other visual artists to execute one artist's ideas.</span
						>
					</li>
				</ul>
			</TimelineItem>
		</div>
		{#if amount > -1 && repos > -1}
			<Stats {amount} {repos} />
		{:else}
			<div class="mx-auto w-max">
				<Callout level="critical">Failed to retrieve data from server.</Callout>
			</div>
		{/if}
	</article>
	<article>
		<h1>Skills</h1>
		<div class="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 2xl:grid-cols-3">
			<Pane
				title="Art & Design"
				icons={design_icons}
				className="text-indigo-500 border-indigo-600 to-indigo-600/40"
			/>
			<Pane
				title="Languages"
				icons={language_icons}
				className="text-teal-500 border-teal-600 to-teal-600/40"
			/>
			<Pane
				title="Libraries/Frameworks"
				icons={lib_icons}
				className="text-cyan-500 border-cyan-600 to-cyan-600/40"
			/>
			<Pane
				title="Tools"
				icons={tool_icons}
				className="text-pink-500 border-pink-600 to-pink-600/40"
			/>
			<Pane
				title="Learning"
				icons={learning_icons}
				className="text-amber-500 border-amber-600 to-amber-600/40"
			/>
		</div>
	</article>
</div>

<style lang="postcss">
	h1 {
		@apply font-semibold text-brand-a;
	}
	ul {
		@apply flex flex-col gap-4 text-sm lg:gap-1;
	}
	li {
		@apply list-item list-inside gap-1;
		list-style: circle url('/img/bulletpoint.svg');
		list-style-position: inside;
	}
	a {
		@apply text-brand-a underline;
	}
	article {
		@apply flex flex-col gap-4;
	}
</style>
