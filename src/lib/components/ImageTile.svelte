<script lang="ts">
	import Spinner from '$lib/components/Spinner.svelte';
	export let src = '';
</script>

{#if src}
	<button
		class="frame clickable"
		style="background-image: url(data:image/png;base64,{src}); background-size: cover; background-position: center"
	/>
{:else}
	<div class="frame flex items-center justify-center">
		<Spinner />
	</div>
{/if}

<style lang="postcss">
	.frame {
		@apply outline outline-1 outline-black dark:outline-white w-[128px] lg:w-48 aspect-square transition-all;
	}
	.clickable {
		@apply hover:outline-8 hover:rounded-lg hover:outline-brand-c dark:hover:outline-brand-c duration-300 ease-quint-in-out;
	}
</style>
