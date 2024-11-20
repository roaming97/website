<script lang="ts">
	import { Pane, ExperiencePanel, WorkArea } from '$lib/components/about';

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
		['x86 Assembly', 'assembly'],
		['Zig', 'zig'],
		['Docker', 'docker']
	];
</script>

<div class="flex flex-col items-center gap-16">
	<article class="max-w-3/4">
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
		<WorkArea area="Developer" period="since 2023" color="indigo">
			<ExperiencePanel
				user="infraregistry"
				role="Frontend web developer"
				period="Oct 2024 - Present"
				location="United States (Remote)"
			>
				<p>
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
			</ExperiencePanel>
			<ExperiencePanel
				user="Loopable"
				role="Fullstack web developer"
				period="Jul 2023 - Jan 2024"
				location="Melbourne, Australia (Remote)"
			>
				<p>
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
			</ExperiencePanel>
		</WorkArea>
		<WorkArea area="Visual artist" period="since 2019" color="teal">
			<ExperiencePanel
				user="Freelance"
				role="Graphic/motion designer"
				period="Feb 2020 - Feb 2023"
				location="Worldwide"
			>
				<p>
					For 3 years I helped several clients, mostly those in the electronic music
					scene, to both design cover art for their releases and to bring those designs to
					life with motion graphics.
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
			</ExperiencePanel>
			<ExperiencePanel
				user="04 Collective"
				role="Senior graphic designer"
				period="Sep 2019 - Oct 2020"
				location="Toronto, ON, Canada (Remote)"
			>
				<p>
					<a target="_blank" href="https://solo.to/04collective"> 04 collective </a>
					was a Canadian independent recording label founded by musical artist &OpenCurlyQuote;Paper
					Skies&CloseCurlyQuote; in June 2019.
				</p>
				<ul>
					<li>
						<span>
							Created animation videos for the label's releases mixing 2D and 3D
							graphics.
						</span>
					</li>
					<li>
						<span>
							Designed the cover art for the label's releases by helping with the
							creation of 3D assets.
						</span>
					</li>
					<li>
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
			class="grid grid-cols-1 items-stretch justify-center gap-4 sm:grid-cols-2 md:grid-cols-3"
		>
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
				title="Libraries & frameworks"
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
	p {
		@apply mb-4;
	}
</style>
