<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	export const prerender = true

	export const load: Load = async () => {
		const images = import.meta.glob('../../static/artwork/*.webp', { as: 'raw' })
		let artwork: URL[] = []
		for (const i in images) {
			const u = new URL(i, import.meta.url)
			if (!cardExclude.includes(u.href.split('/').pop().split('.')[0])) artwork.push(u)
		}
		const names = artwork.map((a) => a.href.split('/').pop())
		return {
			props: {
				artwork,
				names
			}
		}
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation'
	import { OnMount, screenW, screenH } from 'fractils'
	import { quintOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'
	import { artworkGallery, socialLinks, pricesA, pricesB, bio, cardExclude } from '$lib/data'
	import { Canvas } from './_intro'
	import { Logo } from '$lib/ui'

	export let artwork: URL[]
	export let names: string[]
	$: image = `artwork/${names[Math.round(Math.random() * artwork.length)]}`
</script>

<template lang="pug">
	OnMount
		Canvas
		.card(in:fly!='{{y: 50, duration: 2000, easing: quintOut}}')
			.name
				.logo
					Logo(animate!='{false}')
				h1 roaming97
				.links
					+each('socialLinks as i')
						a(href!='{i.link}' target="_blank") 
							p {i.caption}
			.content
				.text-container
					h2(in:fly!='{{y: 25, duration: 500, easing: quintOut, delay: 350}}') Hi!
					p(style="padding-bottom: 1rem" in:fly!='{{x: -50, duration: 1000, easing: quintOut, delay: 500}}') {bio.split('.')[0].substr(4)}.
					h2(in:fly!='{{y: 25, duration: 500, easing: quintOut, delay: 700}}') Commission Info
					p(style="color:var(--dark-d)" in:fly!='{{y: 25, duration: 750, easing: quintOut, delay: 700}}') All prices are in USD.
					.comms
						.comm-section(in:fly!='{{x: -50, duration: 1000, easing: quintOut, delay: 1000}}')
							h3 Video
							+each('pricesA.slice(0, 3) as a')
								p 
									| {a.category}: 
									b ${a.price} 
						.comm-section(in:fly!='{{x: -50, duration: 1000, easing: quintOut, delay: 1250}}')
							h3 Artwork
							+each('pricesB as b')
								p 
									| {b.category}: 
									b ${b.price} 
				hr
				.img-container
					img(src!="{image}" alt="roaming97" width="100%")
			hr
			a(href='/') Go to full website
</template>

<style lang="scss">
	@use './../../styles/media' as *;
	.card {
		flex-direction: column;
		align-items: center;
		position: relative;
		display: flex;

		background-color: rgba(var(--light-b-rgb), 0.5);
		backdrop-filter: blur(16px);
		box-shadow: 0px 1.5px 1.7px -4px rgba(0, 0, 0, 0.032),
			0px 4.7px 5.9px -4px rgba(0, 0, 0, 0.058), 0px 9.5px 13.2px -4px rgba(0, 0, 0, 0.078),
			0px 16px 24.7px -4px rgba(0, 0, 0, 0.092), 0px 24.7px 42.4px -4px rgba(0, 0, 0, 0.104),
			0px 36.6px 69.3px -4px rgba(0, 0, 0, 0.116),
			0px 54.4px 109.7px -4px rgba(0, 0, 0, 0.131), 0px 96px 163px -4px rgba(0, 0, 0, 0.15);

		border-radius: 24px;

		margin: 0.5rem auto;
		padding: 1rem;

		text-align: center;

		transition: 200ms;
		.logo {
			width: clamp(25vh, 3rem, 70vh);

			margin: 0 auto;
			padding: 1.5rem;
		}
		h1 {
			font-weight: 100;
		}
		.links {
			justify-content: space-around;
			flex-direction: row;
			align-items: center;
			display: flex;

			width: 100%;
			a {
				text-decoration: none;
				margin: 0 1rem;
				p {
					font-weight: 800;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
		.content {
			flex-direction: column;
			display: flex;
			.img-container {
				align-items: center;
				display: flex;

				aspect-ratio: 1;
				img {
					padding: 1rem;
				}
			}
			.text-container {
				flex-direction: column;
				display: flex;

				padding: 1rem 0;
				h2 {
					font-weight: 800;
				}
				h3 {
					font-size: 1.2rem;
					font-weight: 600;
				}
				p {
					font-size: 1rem;
				}
			}
			.comm-section {
				padding: 0.5rem 0;
			}
		}
		a {
			font-family: var(--font-mono);
			text-decoration: none;

			color: var(--dark-d);

			transition: 200ms;
			&:hover {
				color: var(--brand-b);
			}
		}
		hr {
			color: var(--light-c);
			width: 80%;
			height: 0;
		}
	}
	@include media('>desktop') {
		.card {
			max-width: 50vw;
			h1 {
				padding: 0;
			}
			.logo {
				padding: 2rem;
			}
			.content {
				flex-direction: row;
				align-items: center;
				flex-grow: 1;

				margin: 0.5rem;
				padding: 1rem;
				hr {
					height: 25vh;
					width: 0;
				}
				.text-container {
					padding: 0.5rem;
					width: 40%;

					text-align: left;
				}
				.img-container {
					max-width: 50%;
				}
				.comms {
					justify-content: space-between;
					display: flex;
					flex: 1 50%;
				}
			}
		}
	}
</style>
