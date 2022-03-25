<script lang="ts">
	import { page } from '$app/stores'
	export let links = []
</script>

<template lang="pug">

	nav
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
	nav {
		display: none;
		justify-content: center;
		a {
			display: flex;
			align-items: center;
			padding: 0 4rem 0 4rem;

			height: 100%;

			font-size: 1rem;
			font-weight: 300;

			color: var(--dark-a);

			transition: background-color 0.2s linear;

			text-transform: uppercase;
			text-decoration: none;
			letter-spacing: 20%;
			&:hover {
				background-color: var(--light-b);
				color: var(--brand-b);
			}
		}
	}

	ul {
		display: flex;

		z-index: 1;
	}

	li {
		list-style: none;
	}
	@include media('>desktop') {
		nav {
			display: flex;
		}
	}
</style>
