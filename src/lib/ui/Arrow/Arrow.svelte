<script lang="ts">
	import { thumbnailIsActive } from '$lib/stores'
	import { goto, preloadData } from '$app/navigation'
	import { opacity } from '$lib/stores'
	import { spring } from 'svelte/motion'

	export let direction: 'left' | 'right'
	export let link: string
	export let disabled = false
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
		if (!animating && !disabled) animating = true
	}
	let navigating = false

	const navigate = (path: string) => {
		if (navigating || disabled) return

		navigating = true

		$opacity = 0

		setTimeout(() => {
			goto(path)
			if ($thumbnailIsActive) $thumbnailIsActive = false

			setTimeout(() => {
				$opacity = 1
				navigating = false
			}, 249)
		}, 500)
	}
</script>

<template lang="pug">
	.arrow-container
		.a(
			on:click!='{navigate(link)}'
			on:mouseover!='{preloadData(link)}' 
			on:focus!='{preloadData(link)}'
			on:mouseenter!="{triggerSpring}"
			class:disabled)
			p(style='{style}' class:disabled) {arrow}
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
		font-size: 1.5rem;
	}
	.disabled {
		color: var(--light-d);
		opacity: 0.5;

		cursor: default;
	}
</style>
