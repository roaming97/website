<script lang="ts">
	import Project from './Project.svelte';
</script>

<div class="w-full flex flex-col items-center xl:flex-row xl:justify-around xl:items-start">
	<div class="flex flex-col items-center gap-12">
		<h1 class="text-5xl lg:text-7xl mb-4 font-blond text-center xl:text-left">
			<div class="hidden lg:block">
				<span class="block">Dev</span>
				<span class="block leading-10">projects</span>
			</div>
			<span class="text-4xl my-4 block lg:hidden">Dev projects</span>
		</h1>
		<img
			src="/img/latestwork_deco.png"
			alt="decoration"
			class="hidden w-[240px] h-auto rotate-180 invert dark:invert-0 xl:inline-block"
		/>
	</div>
	<div
		class="grid grid-cols-1 lg:grid-cols-2 p-2 gap-4 items-center w-screen lg:flex-row lg:w-auto"
	>
		<Project
			border="#FF9431"
			background="linear-gradient(41deg, rgba(255,148,49,0.4) 0%, rgba(255,121,79,0.4) 100%)"
			name="Croizzant"
			description="Digital content creation/support platform for artists with a focus on customization and simplicity."
			src="/img/ico/croissant.svg"
			tools={[
				'/img/ico/python.svg',
				'/img/ico/typescript.svg',
				'/img/ico/tailwind.svg',
				'/img/ico/svelte.svg'
			]}
			href="https://croizzant.com"
		/>
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
				'/img/ico/bootstrap.svg',
				'/img/ico/python.svg',
				'/img/ico/sqlite.svg'
			]}
			github="https://github.com/roaming97/Almond"
		/>
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
			border="rgb(94 202 175)"
			background="linear-gradient(16deg, rgba(176,229,95,0.5) 11%, rgba(70,209,199,0.4) 57%)"
			name="Tangram"
			description="Minimal graphics engine for games and applications with the help of SDL2."
			src="/img/ico/tangram_color.png"
			tools={['/img/ico/c.svg', '/img/ico/python.svg']}
			github="https://github.com/roaming97/Tangram"
		/>
	</div>
</div>

<div class="w-full flex flex-col items-center xl:flex-row-reverse xl:justify-around xl:items-start">
	<div class="flex flex-col items-center gap-12">
		<h1 class="text-5xl lg:text-7xl mb-4 font-blond text-center xl:text-right">
			<div class="hidden lg:block">
				<span class="block">Art</span>
				<span class="block leading-10">projects</span>
			</div>
			<span class="text-4xl my-4 block lg:hidden">Art projects</span>
		</h1>
		<img
			src="/img/latestwork_deco.png"
			alt="decoration"
			class="hidden w-[240px] h-auto -rotate-90 invert dark:invert-0 xl:inline-block"
		/>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 p-2 gap-4 items-center w-screen lg:w-auto">
		<Project
			border="rgb(154 112 255)"
			background="linear-gradient(31deg, rgba(70,174,217,0.4) 8%, rgba(134,70,217,0.4) 41%, rgba(105,52,91,0.4) 83%)"
			name="Demo reels"
			description="Demo reels I've made from 2018 to 2022, summarizing and sometimes generating new material just for those videos. I don't think they were just compilations of previous work."
			src="/img/ico/film.svg"
			href="https://www.youtube.com/playlist?list=PLDxGhuypKI2pOsP7X1aC6-Np8LCQO11aq"
		/>
		<Project
			border="rgb(244 100 140)"
			background="linear-gradient(190deg, rgba(247,90,190,0.4) 49%, rgba(229,160,161,0.4) 93%)"
			name="Everydays"
			description="Daily art challenge inspired by Beeple's everydays. 365 continuous days of artwork, March 2021 to March 2022."
			src="/img/ico/calendar.svg"
			href="/everydays"
		/>
	</div>
</div>
