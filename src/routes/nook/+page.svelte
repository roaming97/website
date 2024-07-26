<script lang="ts">
	import Callout from '$lib/components/Callout.svelte';
	import { Category, Log, Posts } from '$lib/components/nook';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<Callout level="warning">
	This section is under construction! Some pages currently lead to 404's and blog posts are not
	finished being written.
	<hr class="invisible" />
	Since this is more of a personal corner for me, I'm not too worried about deploying it in an unfinished
	state, unlike other pages related to my professional work.
</Callout>
<p>
	Welcome to the nook! This is where suddenly my professional portfolio turns into a mess of a
	2006 web portal. This is a much more personal space dedicated to my hobbies and passions and
	sharing anything that's interesting, old-school style.
</p>
<div class="flex flex-col gap-16">
	<div
		class="py-4 grid items-center justify-center gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
	>
		<Category
			href="/fs"
			src="/img/ico/folders.svg"
			caption="File explorer"
			background="linear-gradient(275deg, rgba(67,149,255,1) 0%, rgba(68,184,255,1) 61%)"
		/>
		<Category
			href="/quake"
			src="/img/ico/quake.svg"
			caption="Quake"
			background="linear-gradient(104deg, rgba(217,176,70,1) 30%, rgba(135,106,0,1) 85%)"
		/>
		<Category
			href="/flash"
			src="/img/ico/flash.svg"
			caption="Flash"
			background="linear-gradient(31deg, rgba(255,142,142,1) 5%, rgba(255,103,57,1) 36%, rgba(251,43,43,1) 100%)"
		/>
		<Category
			href="/fumo"
			src="/img/ico/patchy.png"
			caption="Fumo"
			background="linear-gradient(275deg, rgba(176,67,239,1) 0%, rgba(182,145,227,1) 100%)"
		/>
	</div>
	<Posts {data} />
	<Log />
</div>
