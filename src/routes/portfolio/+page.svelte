<script lang="ts">
	import Pane from '$lib/components/portfolio/Pane.svelte';
	import Stats from '$lib/components/portfolio/Stats.svelte';
	import TimelineItem from '$lib/components/portfolio/TimelineItem.svelte';
	import Callout from '$lib/components/Callout.svelte';
	import Project from '$lib/components/portfolio/Project.svelte';
	import type { PageServerData } from './$types';

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

{#snippet area_tag(label: string, cn = 'border-indigo-900 bg-indigo-500')}
	<div
		class="flex select-none items-center gap-1 rounded-md bg-neutral-200 px-2 py-1 text-xs dark:bg-dark"
	>
		<div class="h-4 w-4 rounded-full border {cn}"></div>
		<span class="font-semibold">{label}</span>
	</div>
{/snippet}

<div class="flex flex-col items-center gap-16">
	<article>
		<!--
			<p>
				While in my own words I am a "digital creative", what I truly mean by that is that I
				consider myself a <b
					>multidisciplinary creator of both interactive and non-interactive online creative
					projects</b
				>. Here are some samples divided into sections depending on the project's focus which
				could be (not exclusively)
				<b class="text-teal-400">programming</b>
				or <b class="text-indigo-500">design</b>.
			</p>
			<div class="flex flex-col items-stretch gap-8">
				<WorkArea area="Software/Web development" color="teal" period="">
				<div class="grid grid-cols-1 items-stretch gap-4 p-2 xl:grid-cols-2">
					<Project
						border="rgb(254 182 0)"
						background="linear-gradient(306deg, rgba(226,147,36,0.6) 35%, rgba(166,79,12,0.4) 97%)"
						name="Almond"
						description="Video archiving app to download YouTube videos into a local database. It's self-hosted, so anyone can host and run their own instance."
						src="/img/ico/almond.svg"
						tools={[
							'/img/ico/python.svg',
							'/img/ico/flask.svg',
							'/img/ico/html.svg',
							'/img/ico/css.svg',
							'/img/ico/sqlite.svg'
						]}
						github="https://github.com/roaming97/Almond"
					>
						<div class="flex flex-col gap-2">
							<enhanced:img
								src="/static/img/screenshots/almond3.webp?w=800"
								alt="Almond archived video page"
							/>
							<enhanced:img
								src="/static/img/screenshots/almond2.webp"
								alt="Almond home page options"
							/>
						</div>
					</Project>
					<Project
						border="#48caf9"
						background="linear-gradient(130deg, rgba(169,195,252,0.4) 0%, rgba(68,115,231,0.4) 100%)"
						name="vintran"
						description="Free web file transfer tool made with compatibility in mind. It is meant to allow file transfers from older software and hardware."
						src="/img/ico/network.png"
						tools={[
							'/img/ico/python.svg',
							'/img/ico/flask.svg',
							'/img/ico/html.svg',
							'/img/ico/css.svg',
							'/img/ico/tailwind.svg'
						]}
						github="https://github.com/roaming97/vintran"
					>
						<div class="flex flex-col items-center gap-2">
							<enhanced:img
								src="/static/img/screenshots/vintran1.webp"
								alt="vintran upload form"
							/>
							<enhanced:img
								src="/static/img/screenshots/vintran2.webp"
								alt="vintran upload success"
							/>
						</div>
					</Project>
					<Project
						border="#c8f32f"
						background="linear-gradient(135deg, rgba(187, 238, 60, 0.4) 0%, rgba(234, 247, 51, 0.4) 100%)"
						name="ZipMyVid"
						description="Compress your videos easily."
						src="/img/ico/zmv.svg"
						tools={[
							'/img/ico/svelte.svg',
							'/img/ico/tailwind.svg',
							'/img/ico/ffmpeg.svg'
						]}
						github="https://github.com/roaming97/ZipMyVid"
					>
						<div class="flex flex-col items-center gap-2 md:flex-row md:items-stretch">
							<img src="/img/screenshots/zipmyvid.png" alt="ZipMyVid form" />
						</div>
					</Project>
					<Project
						border="rgb(94 202 175)"
						background="linear-gradient(16deg, rgba(176,229,95,0.5) 11%, rgba(70,209,199,0.4) 57%)"
						name="Tangram"
						description="Minimal graphics engine for games and applications with the help of SDL2."
						src="/img/ico/tangram_color.png"
						tools={['/img/ico/c.svg', '/img/ico/python.svg']}
						github="https://github.com/roaming97/Tangram"
					>
						<div class="flex flex-col items-center gap-2">
							<enhanced:img
								src="/static/img/screenshots/tangram1.webp"
								alt="Tangram example application"
							/>
							<enhanced:img
								src="/static/img/screenshots/tangram2.webp"
								alt="Tangram tetris game example"
							/>
						</div>
					</Project>
					<Project
						border="rgb(154 112 255)"
						background="linear-gradient(106deg, rgba(181,160,229,0.3) 11%, rgba(160,174,229,0.4) 71%)"
						name="Lavender"
						description="The backend for this website that functions as a modular file server."
						src="/img/ico/lavender_placeholder.svg"
						tools={['/img/ico/rust.svg']}
						github="https://github.com/roaming97/Lavender"
					/>
				</div>
			</WorkArea>
		</div>
		-->
	</article>
	<article class="text-pretty">
		<h1>About me</h1>
		<p>
			I am <strong>roaming97</strong>, a terribly curious guy with interest in terribly
			specific things. Throughout my whole life I've had a lot of different hobbies, most of
			these involving a computer. I began creating videos in
			<b>2012</b>
			but only started to do so under this pseudonym in late <b>2016</b>. The creations from
			back then were made with no real purpose or direction yet so it was more like
			experimental video art, all made for fun.
		</p>
		<p>
			In <b>2018</b>, I decided to take my fascination with graphic and visual design
			seriously. Turns out this decision landed me a couple of jobs in the following years! My
			first one was at a music label in <b>2019</b> helping with promotional material and
			music videos. This gig helped me build a network of musical artists for freelance
			collaborations. All of these commissions ultimately motivated me to pursue a B.Des. In
			Multimedia Design and Digital Art in <b>2020</b> which I graduated from in <b>2024</b>.
		</p>
		<p>
			During this time, I enhanced my programming skills, learning HTML, CSS, and JavaScript
			to create my website several years ago, initially aimed to host my videos outside of
			YouTube but later also served as my professional portfolio. I also explored several
			other languages and tools for personal projects, which were invaluable learning
			experiences.
		</p>

		<p>
			I am currently working on improving my web developer portfolio as well as other creative
			projects that have been in the works for the past years, but we'll see when will be the
			right time to unveil them. Until then this is where it stands.
		</p>
	</article>
	<article>
		<h1>Experience</h1>
		{#if amount > -1 && repos > -1}
			<Stats {amount} {repos} />
		{:else}
			<div class="mx-auto w-max">
				<Callout level="critical">Failed to retrieve data from server.</Callout>
			</div>
		{/if}
		<div class="mb-4 flex flex-col gap-1">
			<div class="flex items-center gap-1">
				{@render area_tag('Web development')}
				{@render area_tag('Motion/graphic design', 'border-teal-900 bg-teal-500')}
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
	b {
		@apply text-brand-b;
	}
	strong {
		@apply text-brand-a;
	}
	article {
		@apply flex flex-col gap-4;
	}
</style>
