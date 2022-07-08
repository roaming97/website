<script lang="ts">
	import type { VisibilityEvent } from 'fractils'
	import { visibility } from 'fractils'
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { socialLinks, pricesA, pricesB } from '$lib/data'
	import { Social, PricePanel } from './_contact'

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
				+each('socialLinks as l, i')
					.socialtransition(in:fly="{{y: 20, duration: 400, delay: i*100}}")
						Social(link='{l}') 
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
					.price(in:fly='{{x: -30, duration: 700, easing: quintOut, delay: i*200}}')
						PricePanel(name='{a.category}', price="{a.price}", description=`{a.description}`)
					+else()
					.price(in:fly='{{x: 30, duration: 700, easing: quintOut, delay: i*200}}')
						PricePanel(name='{a.category}', price="{a.price}", description=`{a.description}`)
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
							.price(in:fly='{{x: 30, duration: 400, easing: quintOut, delay: j*200}}')
								PricePanel(name='{b.category}', price="{b.price}", description=`{b.description}`)
							+else()
							.price(in:fly='{{x: -30, duration: 400, easing: quintOut, delay: j*200}}')
								PricePanel(name='{b.category}', price="{b.price}", description=`{b.description}`)

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
	}
	.section-content {
		margin: 1rem auto;
		width: 100%;
	}
	@include media('>desktop') {
		.links {
			margin: 1rem auto;
			padding: 1rem;
		}
		.section-content {
			width: 30vw;
			margin: 1rem;
		}
	}
</style>
