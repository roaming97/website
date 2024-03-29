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

	$: columns = $mobile ? 1 : 3
	$: artworkList = [artworkGallery[0], artworkGallery[3], artworkGallery[4]].slice(0, columns)
	$: videoList = [videoGallery[0], videoGallery[3], videoGallery[4]].slice(0, columns)

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
						a(href!='{l.link}' target='_blank' rel="noreferrer") {l.link}
							.tr(in:fly!="{{y: 20, duration: 400, easing: quintOut, delay: i*100}}" style='background-color: {linkSVGColors[i]}')
								IconSVG(svg!='{l}' ignoreColor=true)
			p
				| E-mail:
				|
				b contact@roaming97.com
	.section
		h2 Commissions pricing
		p(style="color:var(--fg-d); font-weight: normal;") All prices are in USD.
		.section-content.prices-section
			h3 Video
			Samples(samples!='{videoList}')
			.prices(style="--cols: {columns}")
				+each('pricesA as a, i')
					.price(in:fly!='{{y: -20, duration: 700, easing: quintOut, delay: i*200}}')
						PricePanel(name!='{a.category}', price!="{a.price}", description!=`{a.description}`, deal_price!='{a.deal_price}')
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
								PricePanel(name!='{b.category}', price!="{b.price}", description!=`{b.description}` deal_price!='{b.deal_price}')

</template>

<style lang="scss">
	@use '../../../styles/media' as *;
	.section {
		justify-content: center;
		flex-direction: column;
		align-items: center;
		text-align: center;
		display: flex;

		background-color: rgba(var(--bg-d-rgb), 0.1);

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
		grid-template-columns: repeat(2, 1fr);
		justify-content: center;
		align-items: center;
		display: grid;

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
	/*
	.callout {
		background-color: var(--always-dark);
		outline: 2px solid var(--brand-b);
		box-shadow: 0 0 16px var(--brand-b);
		color: white;

		font-weight: normal;
		font-size: 1rem;

		padding: 1rem;
		margin: 1rem;
		b {
			font-weight: 800;
		}
	}
	*/
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
			grid-template-columns: none;
			transform: scale(0.8);
			flex-direction: row;
			display: flex;
		}
		.prices {
			padding: 0.5rem;
		}
		/*
		.callout {
			font-size: 1.25rem;
		}
		*/
	}
</style>
