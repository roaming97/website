<script lang="ts">
	import type { GalleryTile } from '$lib/ui'
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

	const artworkGallery: GalleryTile[] = [
		{
			caption: 'CHAMBER',
			picture: './artwork/219.webp',
			link: './artwork/219.webp'
		},
		{
			caption: 'FIELD RINGS',
			picture: './artwork/236.webp',
			link: './artwork/236.webp'
		},
		{
			caption: 'Splash screen',
			picture: './artwork/273.webp',
			link: './artwork/273.webp'
		},
		{
			caption: 'REBUILT',
			picture: './artwork/301.webp',
			link: './artwork/301.webp'
		},
		{
			caption: 'BUMPS',
			picture: './artwork/307.webp',
			link: './artwork/307.webp'
		},
		{
			caption: 'RESTRUCTURE',
			picture: './artwork/319.webp',
			link: './artwork/319.webp'
		},
		{
			caption: 'WA',
			picture: './artwork/329.webp',
			link: './artwork/329.webp'
		},
		{
			caption: '333',
			picture: './artwork/333.webp',
			link: './artwork/333.webp'
		},
		{
			caption: 'COMPONENT',
			picture: './artwork/335.webp',
			link: './artwork/335.webp'
		},
		{
			caption: 'MINDCASTER',
			picture: './artwork/338.webp',
			link: './artwork/338.webp'
		}
	]

	const videoGallery: GalleryTile[] = [
		{
			caption: 'Demo Reel 2021',
			picture: './videothumbs/dr2021.webp',
			link: 'https://vimeo.com/659859916'
		},
		{
			caption: 'Demo Reel 2020',
			picture: './videothumbs/dr2020.webp',
			link: 'https://vimeo.com/495956496'
		},
		{
			caption: 'Monomosh',
			picture: './videothumbs/mono.webp',
			link: 'https://vimeo.com/443884104'
		},
		{
			caption: 'Demo Reel 2019',
			picture: './videothumbs/dr2019.webp',
			link: 'https://vimeo.com/381472194'
		},
		{
			caption: 'Umbral',
			picture: './videothumbs/cap.webp',
			link: 'https://vimeo.com/381550497'
		}
	]

	const everydayGallery: GalleryTile[] = [
		{
			caption: 'Season 3',
			picture: './everydays/season3.webp',
			link: './everydays/season3.webp'
		},
		{
			caption: 'Season 2',
			picture: './everydays/season2.webp',
			link: './everydays/season2.webp'
		},
		{
			caption: 'Season 1',
			picture: './everydays/season1.webp',
			link: './everydays/season1.webp'
		}
	]

	const pictureGallery: GalleryTile[] = [
		{
			caption: '2019',
			picture: './photo/flower.webp',
			link: 'photo2019'
		}
	]

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
		Gallery(title='Photos', thumbs="{pictureGallery}")

</template>

<style lang="scss">
	.hello {
		padding: 8rem 0 8rem 0;
		margin: 0 0 1rem 0;

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
