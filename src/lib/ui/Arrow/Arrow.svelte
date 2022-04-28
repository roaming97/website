<script lang="ts">
	import { goto, prefetch } from '$app/navigation'
	import { opacity } from '$lib/transitionStore'
	import { spring } from 'svelte/motion'

	export let direction: 'left' | 'right'
	export let link: string
	const arrow = direction === 'left' ? '<-' : '->'

	let duration = 150
	let distance = 8
	let animating = false
	let springTranslation = spring(0, {
		stiffness: 0.05,
		damping: 0.25
	})

	$: springTranslation.set(animating ? distance : 0)
	$: style =
		direction === 'left'
			? `transform: translateX(${-$springTranslation}px)`
			: `transform: translateX(${$springTranslation}px)`
	$: if (animating) {
		setTimeout(() => (animating = false), duration)
	}
	const triggerSpring = () => {
		if (!animating) animating = true
	}
	let navigating = false

	const navigate = (path: string) => {
		if (navigating) return

		navigating = true

		$opacity = 0

		setTimeout(() => {
			goto(path)

			setTimeout(() => {
				$opacity = 1
				navigating = false
			}, 1)
		}, 150)
	}
</script>

<template lang="pug">
	.arrow-container
		.a(
			on:click='{navigate(link)}'
			on:mouseover='{prefetch(link)}' 
			on:focus='{prefetch(link)}'
			on:mouseenter="{triggerSpring}")
			p(style='{style}') {arrow}
</template>

<style lang="scss">
	.a {
		text-decoration: none;
		padding: 0.5rem;

		cursor: pointer;
	}
	p {
		margin: auto;

		color: var(--brand-a);

		user-select: none;

		font-family: var(--font-mono);
		font-size: 2rem;
	}
</style>
