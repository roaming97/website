<script lang="ts">
	import { OnMount, visibility } from 'fractils'
	import { fly } from 'svelte/transition'
	import { quartOut } from 'svelte/easing'
	import { onMount } from 'svelte'

	let visible: boolean
	let options = { threshold: 0.8, once: true }

	const handleChange = (e: CustomEvent) => (visible = e.detail.isVisible)

	export let caption: string
	export let picture: string
	export let link: string
	export let index = 0
</script>

<template lang="pug">

	OnMount
		.visibleControl(
			use:visibility='{options}' 
			on:change='{handleChange}'
		)
		+if('visible')
			a(href="{link}" target="_blank") 
				.tile(
					style='background-image: url({picture}); background-size: cover; background-position: center;'
					in:fly='{{y: 50, easing: quartOut, duration: 800, delay: index * 50}}'
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

		margin: 0.5rem;

		transition: cubic-bezier(0.33, 1, 0.68, 1) 300ms;

		filter: grayscale(50%) brightness(0.4);
		box-shadow: 0 0 8px black;

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
			width: 20vw;
			height: 20vw;
		}
	}
</style>
