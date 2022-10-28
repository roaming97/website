<script lang="ts">
	import { IconSVG, Tooltip } from '$lib/ui'
	import type { VisibilityEvent } from 'fractils'
	import { visibility, mobile } from 'fractils'
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import {
		artworkGallery,
		videoGallery,
		linkSVGs,
		linkSVGColors,
		pricesA,
		pricesB
	} from '$lib/data'
	import { PricePanel, Samples } from '../_contact'

	let visible: boolean
	let options = { threshold: 0.6, once: true }

	$: columns = $mobile ? 2 : 3
	$: artworkList = artworkGallery.slice(2, columns + 2)
	$: videoList = videoGallery.slice(1, columns + 1)

	const handleChange = (e: VisibilityEvent) => (visible = e.detail.isVisible)
</script>

<template lang="pug">

	h1.page-title Contact
	.section
		h2 Social links
		.section-content
			.links
				+each('linkSVGs as l, i')
					Tooltip(content!='{l.caption}' i!="{i}")
						a(href!='{l.link}' target='_blank') {l.link}
							.tr(in:fly!="{{y: 20, duration: 400, easing: quintOut, delay: i*100}}" style='background-color: {linkSVGColors[i]}')
								IconSVG(svg!='{l}' ignoreColor=true)
			p
				b E-mail:
				|
				| roaming98a@gmail.com
	.section
		h2 Commissions pricing
		p(style="color:var(--dark-d)") All prices are in USD.
		.section-content.prices-section
			h3 Video
			Samples(samples!='{videoList}')
			.prices(style="--cols: {columns}")
				+each('pricesA as a, i')
					.price(in:fly!='{{y: -20, duration: 700, easing: quintOut, delay: i*200}}')
						PricePanel(name!='{a.category}', price!="{a.price}", description!=`{a.description}`)
		.section-content.prices-section
			h3 Artwork 
			Samples(samples!='{artworkList}')
			.visibleControl(
				use:visibility!='{options}' 
				on:v-change!='{handleChange}'
			)
				+if('visible')
					.prices(style="--cols: {columns}")
						+each('pricesB as b, j')
							.price(in:fly!='{{y: -20, duration: 400, easing: quintOut, delay: j*200}}')
								PricePanel(name!='{b.category}', price!="{b.price}", description!=`{b.description}`)

</template>

<style lang="scss">
	@use '../../../styles/media' as *;
	.section {
		justify-content: center;
		flex-direction: column;
		align-items: center;
		text-align: center;
		display: flex;

		background-color: rgba(var(--light-d-rgb), 0.1);

		margin: 1rem 0;
		padding: 1rem 0;
	}
	a {
		text-decoration: none;
		line-height: 0;
		font-size: 0;

		color: transparent;
	}
	.links {
		justify-content: center;
		flex-direction: row;
		align-items: center;
		display: flex;

		width: 100%;

		transform: scale(0.5);
		.tr {
			padding: 2rem;
			margin: 1rem;

			border-radius: 2rem;
			box-shadow: 0px 1.5px 1.7px -4px rgba(0, 0, 0, 0.032),
				0px 4.7px 5.9px -4px rgba(0, 0, 0, 0.058),
				0px 9.5px 13.2px -4px rgba(0, 0, 0, 0.078),
				0px 16px 24.7px -4px rgba(0, 0, 0, 0.092),
				0px 24.7px 42.4px -4px rgba(0, 0, 0, 0.104),
				0px 36.6px 69.3px -4px rgba(0, 0, 0, 0.116),
				0px 54.4px 109.7px -4px rgba(0, 0, 0, 0.131),
				0px 96px 163px -4px rgba(0, 0, 0, 0.15);
		}
	}
	.prices {
		grid-template-columns: repeat(var(--cols), 1fr);
		justify-content: center;
		align-items: center;
		display: grid;
	}
	.price {
		height: 100%;
	}
	.section-content {
		width: 100%;
		&.prices-section {
			margin: 0.5rem 0;
			padding: 1rem 0;
		}
	}
	@include media('>desktop') {
		.section {
			padding: 1rem;
		}
		.links {
			transform: scale(0.8);
		}
		.prices {
			padding: 0.5rem;
		}
	}
</style>
