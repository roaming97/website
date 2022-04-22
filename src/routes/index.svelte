<script lang="ts">
	import { artworkGallery, videoGallery, everydayGallery, pictureGallery } from '$lib/data'
	import { onMount } from 'svelte'
	import Gallery from './_home/components/Gallery.svelte'
	import Intro from './_home/components/Intro.svelte'
	export const prerender = true

	const roles: string[] = ['Visual Artist', 'Graphic Designer', 'Photographer']
	const len = roles.length

	let index = 0
	$: curr = roles[index]

	const changeRole = () => {
		index = (index + 1) % len
		curr = roles[index]
	}

	let filename = 'banner.webp'

	onMount(() => setInterval(() => changeRole(), 2500))
</script>

<template lang="pug">

	.hello
		.banner-bg(style="background-image: url({filename});")
		h1(style="font-size: clamp(3rem, 12vw, 6rem); font-weight: 100") roaming97
		h1.curr {curr}

	.content
		Intro
		Gallery(title='Artwork', thumbs="{artworkGallery}")
		Gallery(title='Videos', thumbs="{videoGallery}")
		Gallery(title='Everydays', thumbs="{everydayGallery}")
		Gallery(title='Photography', thumbs="{pictureGallery}")

</template>

<style lang="scss">
	.hello {
		padding: 8rem 0 8rem 0;

		background-color: rgba(0, 0, 0, 0.5);

		h1 {
			color: white;
		}
	}
	.banner-bg {
		position: absolute;
		left: 0;
		top: 0;

		min-height: min(50vh, 20rem);
		min-width: 100vw;

		background-position: center;
		background-size: cover;

		mask-image: -webkit-gradient(
			linear,
			left 90%,
			left bottom,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);

		z-index: -1;
	}
	.curr {
		font-size: clamp(1rem, 2vw, 2rem);
		text-transform: uppercase;
		font-weight: 700;
	}
	.content {
		padding: 1rem 0 1rem 0;
		z-index: 2;
	}
</style>
