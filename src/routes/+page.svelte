<script lang="ts">
	import { roles, artworkGallery, videoGallery, everydayGallery, pictureGallery } from '$lib/data'
	import { Button } from '$lib/ui'
	import { capitalized } from '$lib/utils'
	import { mobile, theme } from 'fractils'
	import { fly } from 'svelte/transition'
	import { onMount, onDestroy } from 'svelte'
	import { quartInOut } from 'svelte/easing'
	import { preloadData } from '$app/navigation'

	import { Waves, WaveDown, Gallery, Intro, Dev } from './_home'

	$: index = 0
	$: unit = $mobile ? 'rem' : 'vw'
	$: off = $mobile ? 2.5 : 5.45
	$: src = $theme === 'light' ? 'logo2022.webp' : 'logo2022_dark.webp'
	$: ag = artworkGallery.slice(0, 5)
	$: vg = videoGallery.slice(0, 5)

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

	.hello
		.banner
			img(src!="banner/{src}" alt="banner")
		.hello-content
			h1 roaming97
			.roles(style="transform: translateY(-{index*off}{unit})")
				+each('roles as r, i')
						h1.curr(class:active='{i === index}') {capitalized(r[0])}

	.content
		Intro
		Waves
		.actual-content
			Gallery(title='Artwork' thumbs!="{ag}")
			+if('ag.length !== artworkGallery.length')
				.show-more(on:click!='{() => {ag = artworkGallery}}' on:keypress!="{() => {}}")
					Button(text="Show more")
			Gallery(title='Videos' thumbs!="{vg}")
			+if('vg.length !== videoGallery.length')
				.show-more(on:click!='{() => {vg = videoGallery}}' on:keypress!="{() => {}}")
					Button(text="Show more")
			Gallery(title='Photo' thumbs!="{pictureGallery}")
			Dev
		WaveDown

</template>

<style lang="scss">
	@use '../../styles/media' as *;
	.hello {
		padding: 6rem 0;
	}
	.banner {
		align-items: center;
		display: flex;

		position: absolute;
		top: 3rem;
		img {
			width: 100vw;
			height: auto;
			mask-image: radial-gradient(ellipse at center, white, rgba(0, 0, 0, 0.05) 90%);
		}
	}
	.hello-content {
		flex-direction: column;
		display: flex;

		padding: 2rem 0;
		h1 {
			color: var(--fg-a);
			font-size: clamp(4rem, 12vw, 6rem);
			font-weight: 100;
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
		justify-content: center;
		flex-direction: column;
		align-items: center;
		display: flex;

		background: linear-gradient(var(--brand-b), var(--brand-a));
		margin: 0;

		transform: translateY(1rem);

		position: relative;
		z-index: 3;
	}
	@include media('>desktop') {
		.banner {
			top: 0;
			img {
				mask-image: radial-gradient(ellipse at right, white, rgba(0, 0, 0, 0.05) 70%);
			}
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
