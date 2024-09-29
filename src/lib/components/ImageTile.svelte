<script lang="ts">
	import Spinner from '$lib/components/Spinner.svelte';

	let { src = '', className = '' } = $props();
</script>

{#if src}
	<div
		class="frame {className}"
		style="background-image: url(data:image/png;base64,{src}); background-size: cover; background-position: center"
	></div>
{:else}
	<div class="frame flex items-center justify-center {className}">
		<Spinner />
	</div>
{/if}

<style lang="postcss">
	.frame :global {
		@apply outline outline-1 outline-black dark:outline-white w-[128px] 
		lg:w-48 xl:w-72 aspect-square transition-all;
	}
	.clickable :global {
		@apply hover:outline-[6px] hover:outline-brand-c dark:hover:outline-brand-c 
		duration-200 ease-quint-in-out;
	}
</style>
