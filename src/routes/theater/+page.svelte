<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		async function importLiteYT() {
			import('@justinribeiro/lite-youtube');
		}
		importLiteYT();
	});
</script>

<div class="flex flex-col gap-3">
	<h1 class="text-6xl tracking-tight">Cruce</h1>
	<p>"Crossing" in Spanish.</p>
	<div class="grid grid-cols-2 items-center gap-4">
		<lite-youtube videoid="rpNgt36YhYc"></lite-youtube>
		<lite-youtube videoid="W9uaUO7op1o"></lite-youtube>
		<lite-youtube videoid="NlWV0YbVG98"></lite-youtube>
	</div>
</div>

<style lang="postcss">
	lite-youtube {
		@apply aspect-video;
	}
</style>
