<script lang="ts">
	export let text: string
	export let link: string
</script>

<template lang="pug">
    a(href!="{link}" target="_blank")
        .button-container
            span {text}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	a {
		display: flex;
		justify-content: center;
		align-items: center;

		width: max-content;
		margin: 1rem 0;

		text-decoration: none;
	}
	.button-container {
		padding: 1rem 2rem;

		text-align: center;

		border: 2px solid var(--dark-a);

		transition: 300ms;
		span {
			font-family: var(--font-mono);
			letter-spacing: 2px;

			transition: 300ms;
		}
		&:hover {
			background-color: var(--dark-a);
		}
		&:hover > span {
			color: var(--light-a);
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
