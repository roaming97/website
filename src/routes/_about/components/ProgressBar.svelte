<script lang="ts">
	import { Icon } from '$lib/ui'
	import { mobile } from 'fractils'
	import { onMount } from 'svelte'
	import { quintOut } from 'svelte/easing'
	import { slide } from 'svelte/transition'

	$: direction = !$mobile ? 'height' : 'width'
	export let name: string
	export let icon: string
	export let index = -1
	export let percent: number = 100
	let animate: boolean
	let mounted = false

	onMount(() => (mounted = true))
</script>

<template lang="pug">
	+key('animate')
		+if('mounted')
			.progress-bar-container(in:slide="{{duration: 1000, easing: quintOut}}")
				Icon(src!='{icon}', alt!="{name}", tipindex!=`{index}`, tip!="{name}" '--size'="5rem") 
				.progress
					.bar-container(style!="{direction}: {100 - percent}%")
						.bar
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.progress-bar-container {
		justify-content: center;
		flex-direction: row;
		align-items: center;
		margin: 0.5rem;
		display: flex;
		width: 100%;
		height: 100%;
	}
	.progress,
	.bar {
		border-radius: 1rem;
		width: 4rem;
	}
	.bar-container {
		width: 100%;
		height: 100%;
	}
	.progress {
		justify-content: flex-end;
		display: flex;
		background-image: linear-gradient(to right, pink, var(--brand-c), var(--brand-a));
		height: 4rem;
		width: 50vw;
	}
	.bar {
		background-color: var(--light-b);

		border-radius: 0.8rem;
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;

		width: 100%;
		height: 200%;

		animation: fill 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
		animation-delay: 400ms;
	}
	@keyframes fill {
		from {
			height: 200%;
		}
		to {
			height: 100%;
		}
	}
	@include media('>desktop') {
		.progress-bar-container {
			flex-direction: column;
		}
		.progress {
			justify-content: flex-start;
			min-height: 12rem;
			max-width: 4rem;
			background-image: linear-gradient(to top, pink, var(--brand-c), var(--brand-a));
		}
		.bar {
			border-radius: 0.8rem;
			border-bottom-right-radius: 0;
			border-bottom-left-radius: 0;
		}
	}
</style>
