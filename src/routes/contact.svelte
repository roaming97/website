<script lang="ts">
	import { visibility } from 'fractils'
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { socialLinks, pricesA, pricesB } from '$lib/data'
	import PricePanel from './_contact/components/PricePanel.svelte'
	import Social from './_contact/components/Social.svelte'

	let visible: boolean
	let options = { threshold: 0.9, once: true }

	const handleChange = (e: any) => (visible = e.detail.isVisible)
</script>

<template lang="pug">
	h1 Contact
	.section
		h2 Social links
		.section-content
			.links
				+each('socialLinks as l, i')
					.socialtransition(in:fly="{{y: 20, duration: 400, delay: i*100}}")
						Social(link='{l}') 
	.section
		h2 Commissions pricing
		p(style="color:var(--light-d)") All prices are in USD.
		.section-content
			h3 Video
			.visibleControl(
				use:visibility='{options}' 
				on:change='{handleChange}'
			)
			+if('visible')
				+each('pricesA as a')
					.price(in:fly='{{y: -20, duration: 400, easing: quintOut}}')
						PricePanel(name='{a.category}', price="{a.price}", description=`{a.description}`)
		hr(style="width:80vw;color:var(--light-d)")
		.section-content
			h3 Artwork 
			.visibleControl(
				use:visibility='{options}' 
				on:change='{handleChange}'
			)
			+if('visible')
				+each('pricesB as b')
					.price(in:fly='{{y: -20, duration: 300, easing: quintOut}}')
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

		padding: 1rem;
	}
	.section-content {
		margin: 2rem auto;
		width: 100%;
	}
	@include media('>desktop') {
		.links {
			margin: 1rem auto;
		}
		.section-content {
			width: 30vw;
			margin: 1rem;
		}
	}
</style>
