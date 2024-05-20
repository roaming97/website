<script lang="ts">
	import Project from '$lib/components/home/Project.svelte';
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 p-2 gap-4 items-center w-screen lg:flex-row lg:w-auto">
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
		border="#48caf9"
		background="linear-gradient(130deg, rgba(169,195,252,0.4) 0%, rgba(68,115,231,0.4) 100%)"
		name="vintran"
		description="Free web file transfer tool made with Python and Flask and compatibility in mind. It is meant to run well on older browsers running on older computers so that files can be sent from there."
		src="/img/ico/network.png"
		tools={['/img/ico/python.svg', '/img/ico/flask.svg', '/img/ico/tailwind.svg']}
		github="https://github.com/roaming97/vintran"
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
