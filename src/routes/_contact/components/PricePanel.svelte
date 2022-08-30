<script lang="ts">
	export let name: string
	export let price: number
	export let description: string
</script>

<template lang="pug">
	.price-container
		p {name}
		h1 ${price}
		+if('description')
			p.desc {description}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.price-container {
		border-radius: 0.5rem;

		justify-content: center;
		flex-direction: column;
		display: flex;

		height: 90%;

		margin: 0.5rem;
		padding: 1rem;

		outline: solid 2px var(--light-b);
		background-color: var(--light-a);
		color: var(--dark-a);

		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
			0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
			0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);

		h1 {
			font-family: var(--font-mono);
			font-size: 5rem;
		}

		.desc {
			font-size: 0.8rem;

			margin: 0 auto;
			width: 75%;

			color: var(--dark-c);
		}
	}
</style>
