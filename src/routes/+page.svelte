<script lang="ts">
	import { artworkGallery, videoGallery, everydayGallery, pictureGallery } from '$lib/data'
	import { mobile } from 'fractils'
	import { fly } from 'svelte/transition'
	import { onMount, onDestroy } from 'svelte'
	import { quartInOut } from 'svelte/easing'
	import { preloadData } from '$app/navigation'

	import { Waves, WaveDown, Gallery, Intro, Dev } from './_home'

	const roles = ['Visual Artist', 'Designer', 'Photographer', 'Developer']
	const image_list = ['dr2021', '193', 'flower', 'code']
	const path_list = image_list.map((p) => `/banner/${p}.webp`)

	$: index = 0
	$: unit = $mobile ? 'rem' : 'vw'
	$: off = $mobile ? 2.5 : 5.45
	$: current_image = path_list[index]

	let interval: NodeJS.Timeout

	let fading = false
	let opacity = 0.4
	const fadeImage = () => {
		if (fading) return
		fading = true
		opacity = 0

		setTimeout(() => {
			index = (index + 1) % roles.length
			setTimeout(() => {
				opacity = 0.4
				fading = false
			}, 1)
		}, 300)
	}

	onMount(() => {
		interval = setInterval(() => {
			fadeImage()
		}, 2500)
	})

	onDestroy(() => clearInterval(interval))
</script>

<template lang="pug">

	svelte:head
		+each('path_list as image')
			link(rel="preload" as="image" href!="{image}")

	.hello
		.opacity(style="opacity: {opacity}")
			img(src!="{current_image}" alt="banner")
		.hello-content
			h1(style="font-size: clamp(4rem, 12vw, 6rem); font-weight: 100") roaming97
			.roles(style="transform: translateY(-{index*off}{unit})")
				+each('roles as r, i')
						h1.curr(class:active='{i === index}') {r}

	.content
		Intro
		Waves
		.actual-content
			Gallery(title='Artwork', thumbs!="{artworkGallery}")
			Gallery(title='Videos', thumbs!="{videoGallery}")
			Gallery(title='Photo', thumbs!="{pictureGallery}")
		WaveDown
		Dev

</template>

<style lang="scss">
	@use '../../styles/media' as *;
	.hello {
		padding: 6rem 0;
	}
	.opacity {
		align-items: center;
		display: flex;

		position: absolute;
		top: 3rem;

		transition: opacity 150ms;
		img {
			width: 100vw;
			height: auto;

			filter: blur(8px);
		}
	}
	.hello-content {
		flex-direction: column;
		display: flex;

		h1 {
			color: var(--dark-a);
		}
		.curr {
			opacity: 0;

			user-select: none;

			font-size: clamp(1rem, 2vw, 2rem);
			font-family: var(--font-mono);
			font-weight: 700;

			transition: opacity 300ms;
		}
	}
	.active {
		opacity: 1 !important;

		transition: opacity 300ms;
	}
	.roles {
		flex-direction: column;
		display: flex;

		h1 {
			margin: 0.5rem;
		}

		transition: transform 600ms cubic-bezier(0.25, 1, 0.5, 1);
	}
	.content {
		position: relative;
		z-index: 1;
	}
	.actual-content {
		background: linear-gradient(var(--brand-b), var(--brand-a));
		margin: 0;

		transform: translateY(1rem);

		position: relative;
		z-index: 3;
	}
	@include media('>desktop') {
		.opacity {
			top: 0;
		}
		.hello-content {
			justify-content: center;
			flex-direction: row;

			transform: translateY(30%);

			h1 {
				text-align: left;
				margin: 0 4rem;
			}
			.curr {
				opacity: 0.05;

				font-size: 4vw;
			}
		}
		.roles {
			flex-direction: column;
			z-index: -2;
			margin: 0;
			h1 {
				margin: 0.5rem;
			}
		}
	}
</style>
