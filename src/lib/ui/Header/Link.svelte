<script lang="ts">
	import { page } from '$app/stores'
	import { goto, preloadData } from '$app/navigation'
	import { opacity } from '$lib/stores'
	import { createEventDispatcher } from 'svelte'
	import { mobile } from 'fractils'

	let open = false
	let navigating = false
	export let path: string
	export let title: string

	const dispatch = createEventDispatcher()

	const navigate = (path: string) => {
		if ($page.url.pathname == path) return
		dispatch('closeMenu', {
			open: false
		})

		if (navigating) return

		navigating = true

		$opacity = 0

		setTimeout(() => {
			goto(path)

			setTimeout(() => {
				$opacity = 1
				navigating = false
			}, 1)
		}, 300)
	}
</script>

<template lang="pug">
	.a(
		class:mobile!='{$mobile}'
		role="link"
		on:mouseover!='{() => preloadData(path)}'
		on:focus!='{() => preloadData(path)}'
		on:click!="{() => navigate(path)}"
		on:keypress!="{() => {}}"
	) {title}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.a {
		display: flex;
		align-items: center;
		padding: 2rem 1rem;

		height: 100%;

		font-size: 1rem;
		font-weight: 300;

		color: var(--fg-a);

		transition: background-color 0.2s linear;

		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 20%;

		cursor: pointer;
		&:hover {
			background-color: var(--bg-b);
			color: var(--brand-b);
		}
	}
	@include media('>desktop') {
		.a {
			padding: 0 4rem;
		}
	}
</style>
