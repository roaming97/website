<script lang="ts">
	export let text: string
	export let link: string
</script>

<template lang="pug">
    a(href="{link}")
        .button-container
            span {text}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	a {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 90vw;
		margin: 0 auto;

		text-decoration: none;
	}
	.button-container {
		padding: 1rem 2rem;

		text-align: center;

		border: 2px solid white;

		transition: 300ms;
		span {
			font-family: var(--font-mono);
			letter-spacing: 2px;

			transition: 300ms;
		}
		&:hover {
			background-color: white;
		}
		&:hover > span {
			color: black;
		}
	}
	@include media('>desktop') {
		.button-container {
			padding: 1rem 4rem;
		}
		a {
			max-width: max-content;
		}
	}
</style>
