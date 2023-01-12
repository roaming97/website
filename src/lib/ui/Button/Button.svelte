<script lang="ts">
	export let text: string
	export let link: string
</script>

<template lang="pug">
	a(href!="{link}" target="_blank" rel="noreferrer")
		.btn
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
		cursor: pointer;
	}
	.btn {
		padding: 1rem 2rem;

		text-align: center;

		border: 2px solid var(--fg-a);

		transition: 300ms;
		span {
			font-family: var(--font-mono);
			letter-spacing: 2px;

			user-select: none;
			transition: 300ms;
		}
		&:hover {
			background-color: var(--fg-a);
		}
		&:hover > span {
			color: var(--bg-a);
		}
	}
	@include media('>desktop') {
		.btn {
			padding: 1rem 4rem;
		}
		a {
			max-width: max-content;
		}
	}
</style>
