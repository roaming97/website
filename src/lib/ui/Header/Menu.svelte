<script lang="ts">
	import { opacity } from '$lib/stores'
	import { Hamburger } from 'svelte-hamburgers'
	import { preloadData } from '$app/navigation'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import Link from './Link.svelte'

	export let links: []
	let open = false

	const toggle = () => (open = !open)
</script>

<template lang="pug">

	.burg(style="z-index: 1; max-height: 3rem;" class:open)
		Hamburger(bind:open "--color"="var(--dark-a)" "--padding"="0.7rem" type="squeeze")

	nav(class:open)
		ul
			+each('links as [path, title], i (title)')
				li(class:active='{$page.url.pathname === path}')
					Link({path} {title} on:closeMenu!='{() => open = false}')

</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
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
		&.open {
			box-shadow: 18px 0 24px rgba(0, 0, 0, 0.2);
		}
		ul {
			top: 10%;
			display: flex;
			flex-direction: column;
			gap: 0.25rem;

			z-index: 1;
		}
	}
	li {
		list-style: none;
	}
	.open {
		transform: translatex(0);
	}
	@include media('>desktop') {
		.open {
			display: none;
		}
		.burg {
			display: none;
		}
	}
</style>
