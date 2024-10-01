<script lang="ts">
	import type { Instance, PopperElement } from 'tippy.js';
	import tippy, { sticky } from 'tippy.js';
	import type { Snippet } from 'svelte';

	let {
		children,
		content = 'Tooltip',
		i = -1
	}: { children: Snippet; content: string; i: number } = $props();
	const delay: [number, number] = [300, 100];

	let instance: Instance;
	let container: PopperElement;

	const id = `${content.toLowerCase().replace(/[^A-Z0-9]+/gi, '_')}-${i.toString()}`;

	$effect(() => {
		tippy.setDefaultProps({
			moveTransition: 'transform 0.2s ease-out',
			animation: 'shift-away-subtle',
			duration: [250, 150],
			delay,
			plugins: [sticky],
			arrow: false
		});
		tippy(`#${id}`, {
			placement: 'top',
			offset: [0, 9],
			delay
		});
		container = document.querySelector(`#${id}`) as PopperElement;
		instance = container?._tippy as Instance;

		if (container && instance) instance.setContent(content.split('_').join(' '));
	});
</script>

<div {id} tabindex="-1" class="w-max h-max">
	{@render children()}
</div>

<style lang="postcss">
	:global(.tippy-box[data-animation='fade'][data-state='hidden']) {
		opacity: 0;
	}
	:global(.tippy-box) :global {
		@apply relative font-mono rounded-md outline-none text-sm text-black 
        dark:text-white bg-white dark:bg-darkest shadow-md transition-all;
	}
	:global(.tippy-box[data-placement^='top'] > .tippy-arrow) {
		bottom: 0;
	}
	:global(.tippy-box[data-placement^='top'] > .tippy-arrow:before) {
		bottom: -8px;
		left: 0;

		border-width: 8px 8px 0;

		transform-origin: center top;
	}
	:global(.tippy-box[data-placement^='bottom'] > .tippy-arrow) {
		top: 0;
	}
	:global(.tippy-box[data-placement^='bottom'] > .tippy-arrow:before) {
		top: -8px;
		left: 0;

		border-width: 0 8px 8px;

		transform-origin: center bottom;
	}
	:global(.tippy-box[data-inertia][data-state='visible']) {
		transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
	}
	:global(.tippy-arrow) {
		position: relative;

		z-index: 0;

		width: 16px;
		height: 16px;
	}
	:global(.tippy-arrow:before) {
		position: absolute;

		border-style: solid;
		border-color: transparent;

		content: '';
	}
	:global(.tippy-content) {
		position: relative;
		z-index: 1;
		padding: 5px 9px;
	}

	/* Animation */
	:global(.tippy-box[data-animation='shift-away-subtle'][data-state='hidden']) {
		opacity: 0;
	}
	:global(
			.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='top']
		) {
		transform: translateY(5px);
	}
	:global(
			.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='bottom']
		) {
		transform: translateY(-5px);
	}
	:global(
			.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='left']
		) {
		transform: translateX(5px);
	}
	:global(
			.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='right']
		) {
		transform: translateX(-5px);
	}
</style>
