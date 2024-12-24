<script lang="ts">
	import ImageTile from '$lib/components/ImageTile.svelte';
	import WorkArea from '$lib/components/WorkArea.svelte';
	import Project from '$lib/components/portfolio/Project.svelte';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
	let everydays = $derived(data?.everydays);
</script>

<p>
	While in my own words I am a "digital creative", what I truly mean by that is that I consider
	myself a <b
		>multidisciplinary creator of both interactive and non-interactive online creative projects</b
	>. Here are some samples divided into sections depending on the project's focus which could be
	(not exclusively)
	<b class="text-teal-400">programming</b>
	or <b class="text-indigo-500">design</b>.
</p>
<hr class="my-3" />
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
				tools={['/img/ico/svelte.svg', '/img/ico/tailwind.svg', '/img/ico/ffmpeg.svg']}
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
	<WorkArea area="Graphic/Motion design" color="indigo" period="">
		<div class="flex flex-col items-stretch gap-4 p-2">
			<!--
				<Project
					border="#112"
					background="linear-gradient(120deg, rgba(237,237,247,0.2) 9%, rgba(197,198,208,0.2) 82%)"
					name="04 Collective"
					description="Electronic music label"
					src="/img/04.svg"
					href="https://solo.to/04collective"
				>
					hi
				</Project>
			-->
			<Project
				border="#e93390"
				background="linear-gradient(300deg, rgba(235,171,67,1) 0%, rgba(231,68,99,1) 61%)"
				name="Everydays"
				description="Artwork series where I created one piece every day, it ran from March 2021 to March 2022, lasting 366 consecutive days. Different samples appear every page refresh! All of the pieces were posted throughout that 12 month period on my Twitter account, so if you're interested you can click the link to take you there!"
				src="/img/ico/calendar.svg"
				href="https://x.com/roaming98/media"
				blog="/blog/day366"
			>
				<div class="flex flex-col items-center gap-2 md:flex-row md:items-stretch">
					<div
						class="grid w-full grid-cols-1 items-center justify-center gap-4 sm:grid-cols-3"
					>
						{#each everydays as promise}
							{#await promise}
								<ImageTile />
							{:then thumbnail}
								<ImageTile
									src={thumbnail.b64}
									className="rounded-lg drop-shadow-glow"
								/>
							{/await}
						{/each}
					</div>
				</div></Project
			>
		</div>
	</WorkArea>
</div>
