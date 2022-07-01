<script lang="ts">
	export let name: string
	export let price: number
	export let description: string | undefined = undefined
</script>

<template lang="pug">
	.price-container
		p {name}
		h1 ${price}
		+if('description')
			p(style="font-size:0.75rem;opacity:0.5;") {description}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.price-container {
		border-radius: 0.5rem;

		padding: 2rem;
		margin: 1rem;

		outline: solid 2px var(--light-b);
		background-color: var(--light-a);
		color: var(--dark-a);

		box-shadow: 0 0.5rem 16px rgba(0, 0, 0, 0.5);

		h1 {
			font-family: var(--font-mono);
			font-size: 25vw;
		}
	}
	@include media('>desktop') {
		.price-container {
			h1 {
				font-size: 8vw;
			}
		}
	}
</style>
