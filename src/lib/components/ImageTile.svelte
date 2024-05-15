<script lang="ts">
	import Spinner from '$lib/components/Spinner.svelte';
	export let src = '';
</script>

{#if src}
	<div
		class="frame {$$props.class}"
		style="background-image: url(data:image/png;base64,{src}); background-size: cover; background-position: center"
	></div>
{:else}
	<div class="frame flex items-center justify-center {$$props.class}">
		<Spinner />
	</div>
{/if}

<style lang="postcss">
	.frame {
		@apply outline outline-1 outline-black dark:outline-white w-[128px] 
		lg:w-48 xl:w-80 aspect-square transition-all;
	}
	.clickable {
		@apply hover:outline-[6px] hover:outline-brand-c dark:hover:outline-brand-c 
		duration-200 ease-quint-in-out;
	}
</style>
