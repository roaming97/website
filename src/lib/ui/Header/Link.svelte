<script lang="ts">
	import { goto, prefetch } from '$app/navigation'
	import { opacity } from '$lib/transitionStore'
	import { createEventDispatcher } from 'svelte'
	import { mobile } from 'fractils'

	let open = false
	let navigating = false
	export let path: string
	export let title: string

	const dispatch = createEventDispatcher()

	const navigate = (path: string) => {
		if (navigating) return
		navigating = true

		dispatch('closeMenu')

		$opacity = 0

		setTimeout(() => {
			goto(path)

			setTimeout(() => {
				$opacity = 1
				navigating = false
			}, 1)
		}, 250)
	}
</script>

<template lang="pug">
	.a(
		class:mobile!='{$mobile}'
		type="submit"
		role="link"
		on:mouseover!='{() => prefetch(path)}'
		on:focus!='{() => prefetch(path)}'
		on:click!="{() => navigate(path)}"
	) {title}
</template>

<style lang="scss">
	.a {
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

		cursor: pointer;
		&:hover {
			background-color: var(--light-b);
			color: var(--brand-b);
		}
	}
</style>
