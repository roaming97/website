<script lang="ts">
	import { onMount } from 'svelte'
	import { quartInOut, quintOut } from 'svelte/easing'
	import { tweened } from 'svelte/motion'
	import { fly } from 'svelte/transition'

	export let num: number
	export let stat: string
	export let suffix: string | undefined = undefined
	export let delay = 0

	const count = tweened(0, {
		duration: 5000,
		delay: delay,
		easing: quartInOut
	})

	onMount(() => ($count = num))
</script>

<template lang="pug">
	.stat-container(in:fly!='{{y: 20, duration: 600, delay: delay+200, easing: quintOut}}')
		+if('suffix')
			h1 {Math.round($count)}{suffix}
			+else()
			h1 {Math.round($count)}
		p {stat}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.stat-container {
		margin: 1rem;
		h1 {
			font-family: var(--font-mono);
			font-weight: 800;
			font-size: 6rem;

			text-align: center;

			transition: 200ms ease-out;
			cursor: default;
			&:hover {
				color: var(--brand-a);
			}
		}
		p {
			text-transform: capitalize;
			color: var(--dark-d);
		}
	}
	@include media('>desktop') {
		h1 {
			font-size: 8rem;
		}
	}
</style>
