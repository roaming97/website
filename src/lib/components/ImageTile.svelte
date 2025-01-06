<script lang="ts">
	import Spinner from '$lib/components/Spinner.svelte';
	import { cn } from '$lib/utils';

	let { src = '', className = '' } = $props();
</script>

{#if src}
	<div
		class={cn('frame', className)}
		style="background-image: url(data:image/png;base64,{src}); background-size: cover; background-position: center"
	></div>
{:else}
	<div class={cn('frame flex items-center justify-center', className)}>
		<Spinner />
	</div>
{/if}

<style lang="postcss">
	.frame {
		@apply aspect-square w-[128px] outline outline-1 outline-black transition-all dark:outline-white lg:w-48 xl:w-72;
	}
	.clickable {
		@apply duration-200 ease-quint-in-out hover:outline-[6px] hover:outline-brand-c dark:hover:outline-brand-c;
	}
</style>
