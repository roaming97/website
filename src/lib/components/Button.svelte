<script lang="ts">
	export let href = '/#';
	export let target = '_self';
</script>

<a {target} {href} aria-label="link to {href.split('/')[1]}">
	<slot>
		<span class="font-bold">Click me</span>
	</slot>
</a>

<style lang="postcss">
	a {
		@apply flex w-full lg:w-40 bg-brand-a text-sm items-center 
		justify-center gap-4 p-2 shadow-black/10 
		dark:shadow-white/10 rounded-lg transition-all hover:scale-110 
		ease-out duration-200 text-center drop-shadow-glow select-none;
	}
</style>
