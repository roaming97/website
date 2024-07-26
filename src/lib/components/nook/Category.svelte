<script lang="ts">
	export let href: string;
	export let caption: string;
	export let src: string;
	export let background = '#4e2';
</script>

<a {href} style:background>
	{#if src}
		<img {src} width="32" height="32" alt="{caption} icon" />
	{/if}
	<span class="font-bold">{caption}</span>
</a>

<style lang="postcss">
	a {
		@apply flex w-full lg:w-40 text-sm items-center justify-center gap-2
        p-2 shadow-black/10 dark:shadow-white/10 shadow-md hover:shadow-lg 
        hover:shadow-black/30  hover:dark:shadow-white/30 rounded-2xl text-black
        transition-all hover:scale-110 ease-out duration-200 text-center;
	}
</style>
