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
		['Tailwind CSS', 'tailwind'],
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
			Now, who is this person who didn't want to introduce himself on the home page of his own
			website?
		</p>
		<p>
			Hi! I am <b class="text-brand-a font-bold">roaming97</b>, a terribly curious guy with
			interest in terribly specific things. Throughout my whole life I've had a lot of
			different hobbies, most of those involving a computer with the two purposes of learning
			new stuff in the current digital world we live in and serve as a distraction from
			school. I began creating videos in 2012 but only started to do so under this pseudonym
			in late 2016. The creations from back then were made with no real purpose or direction
			yet so it was more like experimental video art, all made for fun.
		</p>
		<p>
			In 2018 I wanted to take graphic and visual design more seriously. Turns out this move
			landed me a couple of jobs in the following years! My first one was at 04 Collective in
			2019 helping with the visual material for releases as well as promotional material, it
			was a pretty fun experience which I talk about in more detail <a href="/blog/04_closing"
				>here</a
			>. Nevertheless, thanks to that "small" gig I was able to make a pretty modest musical
			artist network that I worked with as well via my freelance work. All of these
			commissions ultimately motivated me to study a B.Des. in Multimedia Design and Digital
			Art in 2020, and after 4 years I managed to successfully graduate.
		</p>
		<p>
			Another skill I worked on improving during this period was programming, I learned HTML,
			CSS, and JavaScript to make the first version of this website back in 2018 so I had a
			place to host my videos outside of YouTube, which then became useful to also host my
			professional portfolio once 2019 came around. After this I learned Python and Rust which
			came in handy for some personal projects. This is what I currently work as, usually
			frontend but I also know my way around backend web development.
		</p>
		<p>
			I am currently working on improving my web developer portfolio as well as other creative
			projects that have been in the works for the past years, but we'll see when will be the
			right time to unveil them. Until then this is where it stands.
		</p>
	</article>
	<article>
		<h1>Experience</h1>
		<WorkArea area="Developer" period="2023-present" color="indigo">
			<ExperiencePanel
				user="Loopable"
				role="Fullstack web developer"
				period="2023 - 2024"
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
						<span aria-hidden="true" aria-label="hidden">🟣</span>
						<span>
							Transformed application UI designs into code by writing modular Svelte
							components.</span
						>
					</li>
					<li>
						<span aria-hidden="true" aria-label="hidden">🟣</span>
						<span>
							Created a backend integration with Amazon Web Services (AWS)
							interactions within the application.</span
						>
					</li>
				</ul>
			</ExperiencePanel>
		</WorkArea>
		<WorkArea area="Visual artist" period="2019-2023" color="teal">
			<ExperiencePanel
				user="Freelance"
				role="Graphic/motion designer"
				period="2020 - 2023"
				location="Worldwide"
			>
				<p>
					For 3 years I helped several clients, mostly those in the electronic music
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
				period="2019 - 2020"
				location="Toronto, ON, Canada (Remote)"
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
