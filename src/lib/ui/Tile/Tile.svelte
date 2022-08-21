<script lang="ts">
	export let thumb: Anchor
	const { picture, link, caption } = thumb
</script>

<template lang="pug">

	svelte:head
		link(rel="prefetch" as="image" href!="{picture}" crossorigin="anonymous")

	a(href!="{link}") 
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
