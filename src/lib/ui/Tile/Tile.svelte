<script lang="ts">
	import type { VisibilityEvent } from 'fractils'
	import { visibility } from 'fractils'
	import { quintOut } from 'svelte/easing'
	import { fade } from 'svelte/transition'

	export let thumb: Anchor
	const { picture, link, caption } = thumb

	let visible: boolean
	let options = { threshold: 0.7, once: true }
	const handleChange = (e: VisibilityEvent) => (visible = e.detail.isVisible)
</script>

<template lang="pug">

	.visibleControl(
		use:visibility!='{options}'
		on:v-change!='{handleChange}'
	)
		+if('visible')
			a(href!="{link}" in:fade!='{{duration: 1000, easing: quintOut}}') 
				.tile(
					style='background-image: url({picture}); background-size: cover; background-position: center;'
					)
					span {caption}

</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	a {
		text-decoration: none;
	}
	.tile {
		justify-content: center;
		align-items: center;
		position: relative;
		display: flex;
		flex: 1 0 50%;

		transform: scale(100%);
		width: 45vw;
		height: 45vw;

		margin: 0rem;

		transition: cubic-bezier(0.33, 1, 0.68, 1) 300ms;

		background-color: var(--bg-b);

		filter: grayscale(50%) brightness(0.2);
		//box-shadow: 0 0 8px black;

		text-transform: uppercase;
		font-weight: 100;

		z-index: 0;
		span {
			transition: cubic-bezier(0.33, 1, 0.68, 1) 300ms;

			padding: 1em;
			width: 100%;

			background-color: rgba(0, 0, 0, 0.5);
			text-align: center;
			font-weight: 600;
			color: white;

			opacity: 0;
		}
		&:hover {
			transform: scale(105%);

			box-shadow: 0 0 16px black;
			filter: grayscale(0%);
			z-index: 1;
		}
		&:hover > span {
			opacity: 1;
		}
	}
	@include media('>desktop') {
		.tile {
			width: 15vw;
			height: 15vw;
		}
	}
</style>
