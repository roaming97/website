<script lang="ts">
	import { mode } from 'mode-watcher';

	let { open, onclick }: { open: boolean; onclick: () => void } = $props();

	let stroke = $derived($mode === 'dark' ? 'white' : 'black');
</script>

<button aria-label="Menu toggle" class="z-[100] outline-none" {onclick}>
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="transition"
		class:rotate-45={open}
	>
		<path
			d="M0 6H32"
			class:left={open}
			{stroke}
			stroke-width="2"
			stroke-linecap="square"
			class="transition"
		/>
		<path d="M0 16H32" {stroke} stroke-width="2" stroke-linecap="square" class="transition" />
		<path
			d="M0 26H32"
			class:right={open}
			{stroke}
			stroke-width="2"
			stroke-linecap="square"
			class="transition"
		/>
	</svg>
</button>

<style lang="postcss">
	.left {
		@apply translate-x-[10px] translate-y-full -rotate-90;
	}
	.right {
		@apply translate-y-4;
	}
	.transition {
		@apply transition-transform duration-200 ease-in-out;
	}
</style>
