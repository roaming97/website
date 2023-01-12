<script lang="ts">
	export let name: string
	export let price: number
	export let description: string
	export let deal_price: number
</script>

<template lang="pug">
	.price-container
		p {name}
		+if('deal_price')
			h3 
				|$
				strike {price}
			h1 ${deal_price}
			+else()
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

		outline: solid 2px var(--bg-b);
		background-color: var(--bg-a);
		color: var(--fg-a);

		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
			0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
			0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);

		h1 {
			font-family: var(--font-mono);
			font-size: 5rem;
		}

		h3 {
			font-family: var(--font-mono);
			color: var(--fg-d);
			font-size: 2rem;
		}

		.desc {
			font-size: 0.8rem;

			margin: 0 auto;
			width: 75%;

			color: var(--fg-c);
		}
	}
</style>
