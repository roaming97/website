<script lang="ts">
	import { IconSVG, Tooltip } from '$lib/ui'
	import type { VisibilityEvent } from 'fractils'
	import { visibility } from 'fractils'
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { linkSVGs, pricesA, pricesB } from '$lib/data'
	import { PricePanel } from './_contact'

	let visible: boolean
	let options = { threshold: 0.6, once: true }

	const handleChange = (e: VisibilityEvent) => (visible = e.detail.isVisible)
</script>

<template lang="pug">

	h1.page-title Contact 
	.section
		h2 Social links
		.section-content
			.links
				+each('linkSVGs as l, i')
					Tooltip(content!='{l.caption}' index!="{i}")
						a(href!='{l.link}' target='_blank')
							.tr(in:fly!="{{y: 20, duration: 400, delay: i*100}}")
								IconSVG(svg!='{l}' id!="{i}") 
			p 
				b E-mail
				| : 
				| roaming98a@gmail.com
	.section
		h2 Commissions pricing
		p(style="color:var(--dark-d)") All prices are in USD.
		.section-content
			h3 Video
			+each('pricesA as a, i')
				+if('i % 2 == 0')
					.price(in:fly!='{{x: -30, duration: 700, easing: quintOut, delay: i*200}}')
						PricePanel(name!='{a.category}', price!="{a.price}", description!=`{a.description}`)
					+else()
					.price(in:fly!='{{x: 30, duration: 700, easing: quintOut, delay: i*200}}')
						PricePanel(name!='{a.category}', price!="{a.price}", description!=`{a.description}`)
		hr(style="width:80vw;color:var(--light-d)")
		.section-content
			h3 Artwork 
			.visibleControl(
				use:visibility!='{options}' 
				on:f-change!='{handleChange}'
			)
				+if('visible')
					+each('pricesB as b, j')
						+if('j % 2 == 0')
							.price(in:fly!='{{x: 30, duration: 400, easing: quintOut, delay: j*200}}')
								PricePanel(name!='{b.category}', price!="{b.price}", description!=`{b.description}`)
							+else()
							.price(in:fly!='{{x: -30, duration: 400, easing: quintOut, delay: j*200}}')
								PricePanel(name!='{b.category}', price!="{b.price}", description!=`{b.description}`)

</template>

<style lang="scss">
	@use '../../styles/media' as *;
	.section {
		justify-content: center;
		flex-direction: column;
		align-items: center;
		text-align: center;
		display: flex;

		background-color: rgba(var(--light-d-rgb), 0.1);

		margin: 1rem 0;
		padding: 1rem;
	}
	.links {
		justify-content: center;
		flex-direction: row;
		align-items: center;
		display: flex;

		width: 100%;

		transform: scale(0.45);
		.tr {
			padding: 2rem;
			margin: 1rem;

			border-radius: 2rem;
			background-color: var(--light-a);
			box-shadow: inset 0px 1.5px 1.7px -4px rgba(0, 0, 0, 0.032),
				inset 0px 4.7px 5.9px -4px rgba(0, 0, 0, 0.058),
				inset 0px 9.5px 13.2px -4px rgba(0, 0, 0, 0.078),
				inset 0px 16px 24.7px -4px rgba(0, 0, 0, 0.092),
				inset 0px 24.7px 42.4px -4px rgba(0, 0, 0, 0.104),
				inset 0px 36.6px 69.3px -4px rgba(0, 0, 0, 0.116),
				inset 0px 54.4px 109.7px -4px rgba(0, 0, 0, 0.131),
				inset 0px 96px 163px -4px rgba(0, 0, 0, 0.15);
		}
	}
	.section-content {
		margin: 1rem auto;
		width: 100%;
	}
	@include media('>desktop') {
		.section-content {
			width: 40vw;
			margin: 1rem;
		}
		.links {
			transform: scale(0.8);
		}
	}
</style>
