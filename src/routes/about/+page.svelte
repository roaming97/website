<script lang="ts">
	import { Pane, ExperiencePanel, WorkArea } from '$lib/components/about';

	const design_icons = [
		['Blender', 'blender'],
		['Affinity Photo', 'affinity_photo'],
		['Affinity Designer', 'affinity_designer'],
		['Krita', 'krita'],
		['Figma', 'figma'],
		['Adobe Photoshop', 'photoshop'],
		['Adobe Illustrator', 'illustrator'],
		['Adobe Premiere', 'premiere'],
		['Adobe After Effects', 'after-effects'],
		['Adobe Animate', 'animate'],
		['Adobe Flash', 'flash'],
		['VEGAS Pro', 'vegas']
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
		['Tailwind', 'tailwind'],
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
		['x86 Assembly', 'assembly'],
		['Zig', 'zig'],
		['Docker', 'docker']
	];
</script>

<div class="flex flex-col gap-16">
	<article>
		<p>
			Hey! roaming97.com's owner real name is <b class="text-brand-a drop-shadow-glow"
				>Edmundo</b
			>! He is a very curious and resilient creative designer/developer who does a lot of
			things during his free time, most of the time doing activities that teach him something,
			he gets core deep into any topic that comes to his mind and learns as much as he can.
		</p>
		<p>
			Started working at the young age of 16 on 04 Collective in 2019, and for four years he
			worked professionally with a variety of clients from all around the world, then becoming
			a full-time web developer in 2023.
		</p>
	</article>
	<article>
		<h1>Experience</h1>
		<WorkArea area="Web developer" period="2023-present" color="indigo">
			<ExperiencePanel
				user="Loopable"
				role="Fullstack web developer"
				period="Jul 2023 - Jan 2024"
			>
				<p>
					Loopable is a website for tracking the validation process in RTO operations,
					made by Australian team <a target="_blank" href="https://pixeleducation.com.au"
						>Pixel Education</a
					>, a team focused on creating solutions for the education space.
				</p>
			</ExperiencePanel>
		</WorkArea>
		<WorkArea area="Visual artist" period="2019-2023" color="teal">
			<ExperiencePanel user="Freelance" role="Graphic/motion designer" period="2020 - 2023">
				<p>
					For 3 years I helped several clients, mostly those on the electronic music
					scene, to both design cover art for their releases and to bring those designs to
					life with motion graphics.
				</p>
				<ul>
					<li>
						<span aria-hidden="true" aria-label="hidden">🟣</span>
						<span
							>Helped guide the vision for music artists from different countries
							around the world into diverse designs for their music.</span
						>
					</li>
					<li>
						<span aria-hidden="true" aria-label="hidden">🟣</span>
						<span
							>Designed in a variety of styles for electronic music artists by
							creating both 2D and 3D graphics.</span
						>
					</li>
					<li>
						<span aria-hidden="true" aria-label="hidden">🟣</span>
						<span
							>Collaborated with other visual artists to execute one artist's ideas.</span
						>
					</li>
				</ul>
			</ExperiencePanel>
			<ExperiencePanel
				user="04 Collective"
				role="Senior graphic designer"
				period="Sep 2019 - Oct 2020"
			>
				<p>
					<a target="_blank" href="https://solo.to/04collective"> 04 collective </a>
					was a Canadian independent recording label founded by musical artist &OpenCurlyQuote;Paper
					Skies&CloseCurlyQuote; in June 2019.
				</p>
				<ul>
					<li>
						<span aria-hidden="true" aria-label="hidden">🟣</span>
						<span>
							Created animation videos for the label's releases mixing 2D and 3D
							graphics.
						</span>
					</li>
					<li>
						<span aria-hidden="true" aria-label="hidden">🟣️</span>
						<span>
							Designed the cover art for the label's releases by helping with the
							creation of 3D assets.
						</span>
					</li>
					<li>
						<span aria-hidden="true" aria-label="hidden">🟣️</span>
						<span>
							Enhanced the visual identity of the branding and promotional material.
						</span>
					</li>
				</ul>
			</ExperiencePanel>
		</WorkArea>
	</article>
	<article>
		<h1>Skills</h1>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch justify-center"
		>
			<Pane
				title="Art & Design"
				icons={design_icons}
				class="text-indigo-500 border-indigo-600 to-indigo-600/40"
			/>
			<Pane
				title="Languages"
				icons={language_icons}
				class="text-teal-500 border-teal-600 to-teal-600/40"
			/>
			<Pane
				title="Libraries & frameworks"
				icons={lib_icons}
				class="text-cyan-500 border-cyan-600 to-cyan-600/40"
			/>
			<Pane
				title="Tools"
				icons={tool_icons}
				class="text-pink-500 border-pink-600 to-pink-600/40"
			/>
			<Pane
				title="Learning"
				icons={learning_icons}
				class="text-amber-500 border-amber-600 to-amber-600/40"
			/>
		</div>
	</article>
</div>

<style lang="postcss">
	h1 {
		@apply font-semibold text-brand-a;
	}
	ul {
		@apply flex flex-col gap-4 lg:gap-1 text-sm;
	}
	li {
		@apply flex gap-1;
	}
	a {
		@apply text-brand-a underline;
	}
	article {
		@apply flex flex-col gap-4;
	}
	p {
		@apply mb-4;
	}
</style>
