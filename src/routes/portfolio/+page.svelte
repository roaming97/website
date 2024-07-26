<script lang="ts">
	import ImageTile from '$lib/components/ImageTile.svelte';
	import WorkArea from '$lib/components/about/WorkArea.svelte';
	import Callout from '$lib/components/Callout.svelte';
	import Project from '$lib/components/portfolio/Project.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<p>
	While in my own words I am a "digital creative", what I truly mean by that is that I consider
	myself a <b
		>multidisciplinary creator of both interactive and non-interactive stuff on the internet</b
	>, here are some samples divided into projects focused on (but not exclusively)
	<b class="text-teal-400">programming</b>
	or <b class="text-indigo-500">design</b>.
</p>
<hr class="my-3" />
<div class="flex flex-col items-stretch gap-8">
	<WorkArea area="Software/Web development" color="teal" period="">
		<div class="flex flex-col p-2 gap-4 items-stretch">
			<Project
				border="rgb(254 182 0)"
				background="linear-gradient(306deg, rgba(226,147,36,0.6) 35%, rgba(166,79,12,0.4) 97%)"
				name="Almond"
				description="Video archiving app to download YouTube videos into a local database. It's self-hosted, meaning that anyone can run and host their own instance."
				src="/img/ico/almond.svg"
				tools={[
					'/img/ico/flask.svg',
					'/img/ico/html.svg',
					'/img/ico/css.svg',
					'/img/ico/python.svg',
					'/img/ico/sqlite.svg'
				]}
				github="https://github.com/roaming97/Almond"
			>
				<div class="mx-auto">
					<enhanced:img
						src="/static/img/screenshots/almond3.webp?w=800"
						alt="Almond archived video page"
						class="drop-shadow-glow"
					/>
				</div>
				<div class="flex flex-col items-center md:flex-row md:items-stretch gap-2">
					<enhanced:img
						src="/static/img/screenshots/almond1.webp"
						alt="Almond log-in screen"
						class="drop-shadow-glow"
					/>
					<enhanced:img
						src="/static/img/screenshots/almond2.webp"
						alt="Almond home page options"
						class="drop-shadow-glow"
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
			<Project
				border="#48caf9"
				background="linear-gradient(130deg, rgba(169,195,252,0.4) 0%, rgba(68,115,231,0.4) 100%)"
				name="vintran"
				description="Free web file transfer tool made with Python and Flask and compatibility in mind. It is meant to run well on older browsers running on older computers so that files can be sent from there."
				src="/img/ico/network.png"
				tools={['/img/ico/python.svg', '/img/ico/flask.svg', '/img/ico/tailwind.svg']}
				github="https://github.com/roaming97/vintran"
			>
				<div class="flex flex-col items-center md:flex-row md:items-stretch gap-2">
					<enhanced:img
						src="/static/img/screenshots/vintran1.webp"
						alt="vintran upload form"
						class="drop-shadow-glow"
					/>
					<enhanced:img
						src="/static/img/screenshots/vintran2.webp"
						alt="vintran upload success"
						class="drop-shadow-glow"
					/>
					<enhanced:img
						src="/static/img/screenshots/vintran3.webp"
						alt="vintran file view"
						class="drop-shadow-glow"
					/>
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
				<div class="flex flex-col items-center md:flex-row md:items-stretch gap-2">
					<enhanced:img
						src="/static/img/screenshots/tangram1.webp"
						alt="Tangram example application"
						class="drop-shadow-glow"
					/>
					<enhanced:img
						src="/static/img/screenshots/tangram2.webp"
						alt="Tangram tetris game example"
						class="drop-shadow-glow"
					/>
				</div>
			</Project>
		</div>
	</WorkArea>
	<WorkArea area="Graphic/Motion design" color="indigo" period="">
		<div class="flex flex-col p-2 gap-4 items-stretch">
			<Project
				border="#e93390"
				background="linear-gradient(300deg, rgba(235,171,67,1) 0%, rgba(231,68,99,1) 61%)"
				name="Everydays"
				description="Artwork series where I created one piece every day, it ran from March 2021 to March 2022, lasting 366 consecutive days. Different samples appear every page refresh! All of the pieces were posted throughout that 12 month period on my Twitter account, so if you're interested you can click the link to take you there!"
				src="/img/ico/calendar.svg"
				href="https://x.com/roaming98/media"
				blog="/blog/day366"
			>
				<div class="flex flex-col items-center md:flex-row md:items-stretch gap-2">
					{#await data.everydays}
						<p>Fetching server data...</p>
					{:then everydays}
						{#if everydays.thumbnails}
							<div
								class="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-center"
							>
								{#each everydays.thumbnails as thumbnail}
									<ImageTile
										src={thumbnail.b64}
										class="rounded-lg drop-shadow-glow"
									/>
								{/each}
							</div>
						{/if}
					{:catch}
						<div class="w-auto mx-auto">
							<Callout level="critical"
								>Failed to retrieve data from server. This is likely due to my
								Lavender instance not working at the moment.</Callout
							>
						</div>
					{/await}
				</div>
			</Project>
		</div>
	</WorkArea>
</div>
