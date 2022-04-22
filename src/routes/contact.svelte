<script lang="ts">
	import { socialLinks, pricesA, pricesB } from '$lib/data'
	import PricePanel from './_contact/components/PricePanel.svelte'
	import Social from './_contact/components/Social.svelte'
</script>

<template lang="pug">
	h1 Contact
	.section
		h2 Social links
		.section-content
			.links
				+each('socialLinks as l')
					Social(link='{l}')
	.section
		h2 Commissions pricing
		p(style="color:var(--light-d)") All prices are in USD.
		.section-content
			h3 Video
			+each('pricesA as a')
				PricePanel(name='{a.category}', price="{a.price}", description=`{a.description}`)
		hr(style="width:80vw;color:var(--light-d)")
		.section-content
			h3 Artwork 
			+each('pricesB as b')
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
