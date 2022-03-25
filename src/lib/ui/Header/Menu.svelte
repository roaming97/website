<script lang="ts">
	import { page } from '$app/stores'

	export let links: []
	$: show = false

	const toggle = () => (show = !show)
</script>

<template lang="pug">

	.toggleBtn(on:click='{toggle}') {!show ? '☰' : 'X'}

	nav(class:show)
		ul
			+each('links as [path, title], i (title)')

				li(class:active='{$page.url.pathname === path}')

					a(
						sveltekit:prefetch
						href='{path}'
					) {title}

</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.toggleBtn {
		position: fixed;
		cursor: pointer;
		left: 0.5rem;

		font-size: 2rem;
		color: var(--dark-a);

		z-index: 1;
	}
	nav {
		position: fixed;
		top: 0;

		justify-content: center;
		flex-direction: column;
		display: flex;

		padding-left: 0.5rem;
		padding-right: 2rem;
		width: max-content;
		max-width: 1200px;
		height: 100vh;

		background: var(--light-a);

		transform: translateX(-100%);
		transition: 0.5s;
		ul {
			top: 10%;
			display: flex;
			flex-direction: column;
			gap: 0.25rem;

			z-index: 1;
		}
		a {
			display: flex;

			width: 100%;
			height: 100%;

			padding: 1rem 2rem 1rem 0.5rem;

			font-size: 1rem;
			font-weight: 300;

			color: var(--dark-a);

			transition: color 0.2s linear;
			transition: background-color 0.2s linear;

			text-transform: uppercase;
			text-decoration: none;
			letter-spacing: 20%;
			&:hover {
				background-color: var(--light-b);
				color: var(--brand-a);
			}
		}
	}
	li {
		list-style: none;
	}
	.show {
		transform: translateX(0);
	}
	@include media('>desktop') {
		.toggleBtn {
			display: none;
		}
		.show {
			display: none;
		}
	}
</style>
