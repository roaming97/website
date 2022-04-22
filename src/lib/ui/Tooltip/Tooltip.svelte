<script lang="ts">
	import type { Instance, PopperElement } from 'tippy.js'

	import tippy, { sticky } from 'tippy.js'
	import { onMount } from 'svelte'

	export let content = 'Tooltip'
	export let placement = 'top'
	export let offset = [0, 9]
	export let delay: [number, number] = [400, 100]
	export let display = ''
	let instance: Instance
	let container: PopperElement
	export let i = -1

	onMount(() => {
		tippy.setDefaultProps({
			moveTransition: 'transform 0.2s ease-out',
			animation: 'shift-away-subtle',
			duration: [250, 150],
			delay,
			plugins: [sticky],
			arrow: false
		})
		// @ts-ignore
		tippy(`#${content}-${i}`, {
			placement,
			content: content.split('_').join(' '),
			offset,
			delay
		})
		container = document.querySelector(`#${content}-${i}`) as PopperElement
		instance = container?._tippy as Instance
	})

	$: if (container && instance) instance.setContent(content.split('_').join(' '))
</script>

<div id={`${content}-${i}`} tabindex="0" style="display: {display};">
	<slot />
</div>

<style>
	#slot {
		width: max-content;
		height: max-content;
	}
	:global(.tippy-box[data-animation='fade'][data-state='hidden']) {
		opacity: 0;
	}
	:global(.tippy-box) {
		position: relative;
		z-index: 1;

		font-family: var(--font-mono);
		font-size: 14px;
		line-height: 1.4;

		outline: 0;
		border-radius: 4px;
		color: var(--dark-c);
		background-color: var(--light-b);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		border: 0.25px solid rgba(var(--light-d-rgb), 0.1);

		transition-property: transform, visibility, opacity;

		letter-spacing: 1px;
		word-spacing: 2px;
	}
	:global(.tippy-box[data-placement^='top'] > .tippy-arrow) {
		bottom: 0;
	}
	:global(.tippy-box[data-placement^='top'] > .tippy-arrow:before) {
		bottom: -8px;
		left: 0;

		border-width: 8px 8px 0;
		border-top: 7px solid rgba(var(--light-d-rgb), 0.1);

		transform-origin: center top;
	}
	:global(.tippy-box[data-placement^='bottom'] > .tippy-arrow) {
		top: 0;
	}
	:global(.tippy-box[data-placement^='bottom'] > .tippy-arrow:before) {
		top: -8px;
		left: 0;

		border-width: 0 8px 8px;
		border-bottom: 7px solid rgba(var(--light-d-rgb), 0.1);

		transform-origin: center bottom;
	}
	:global(.tippy-box[data-placement^='left'] > .tippy-arrow) {
		right: 0;
	}
	:global(.tippy-box[data-placement^='left'] > .tippy-arrow:before) {
		right: -7px;

		border-width: 8px 0 8px 8px;
		border-left: 7px solid rgba(var(--light-d-rgb), 0.1);

		transform-origin: center left;
	}
	:global(.tippy-box[data-placement^='right'] > .tippy-arrow) {
		left: 0;
	}
	:global(.tippy-box[data-placement^='right'] > .tippy-arrow:before) {
		left: -7px;

		border-width: 8px 8px 8px 0;
		border-right-color: initial;
		border-right: 7px solid rgba(var(--light-d-rgb), 0.1);

		transform-origin: center right;
	}
	:global(.tippy-box[data-inertia][data-state='visible']) {
		transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
	}
	:global(.tippy-arrow) {
		position: relative;

		z-index: 0;

		width: 16px;
		height: 16px;

		color: var(--light-d);
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
	:global(.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='top']) {
		transform: translateY(5px);
	}
	:global(.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='bottom']) {
		transform: translateY(-5px);
	}
	:global(.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='left']) {
		transform: translateX(5px);
	}
	:global(.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='right']) {
		transform: translateX(-5px);
	}
</style>
