<script lang="ts">
	import { thumbnailIsActive } from '$lib/stores'
	import { page } from '$app/stores'
	import { ViewControls } from '../../_view'
	import { quintOut, backOut } from 'svelte/easing'
	import { fade, fly } from 'svelte/transition'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: item = data.item

	const date_options: Intl.DateTimeFormatOptions = {
		weekday: undefined,
		year: '2-digit',
		month: '2-digit',
		day: '2-digit',
		timeZone: 'Etc/GMT+5'
	}

	$: parsed_date = item.date.toLocaleDateString('en-US', date_options).replaceAll('/', '.')
	$: message = $thumbnailIsActive ? 'shrink' : 'expand'

	const toggleActive = () => ($thumbnailIsActive = !$thumbnailIsActive)
</script>

<template lang="pug">
	.view-container
		.controls(in:fade!='{{duration: 600, delay: 100}}')
			ViewControls
		img(
			in:fade!='{{duration: 500, delay: 200}}'
			src!="{item.picture}"
			alt!=`{item.title}`
			on:click!="{toggleActive}"
			on:keypress!="{() => {}}"
			class:active!='{$thumbnailIsActive}'
		)
		p.hint Click on the image to {message}.
		hr
		.description
			.initial-info
				h1 {item.title}
				h3 {parsed_date}
			+if('item.collection')
				.collection
					p(in:fly!='{{x: 40, duration: 800, delay: 450, easing: quintOut}}') Collection
					h1(in:fly!='{{x: 40, duration: 800, delay: 750, easing: quintOut}}') {item.collection}
		+if('item.description')
			p(in:fly!='{{y: 20, duration: 800, delay: 1000, easing: backOut }}') {item.description}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.view-container {
		/*
		background-color: rgba(var(--bg-b-rgb), 0.3);
		box-shadow: 0 0.5rem 16px rgba(0, 0, 0, 0.5);
		border-radius: 24px;
		*/

		padding: 2.5rem;
		margin: 1rem;

		justify-content: center;
		flex-direction: column;
		display: flex;
		h1 {
			text-align: left;

			letter-spacing: 0px;
			font-weight: bold;
			font-size: 2rem;
		}
		h3 {
			font-family: var(--font-mono);
			color: var(--bg-d);
			font-weight: 400;
		}
		img {
			margin: 0.5rem auto;
			cursor: pointer;
		}
		p {
			margin: 1.5rem 0;
			font-size: 1rem;
			&.hint {
				display: none;
			}
		}
		.collection {
			text-align: left;
			h1 {
				font-family: var(--font-mono);
				font-weight: 100;
				font-size: 2rem;
			}
			p {
				color: var(--fg-d);
				margin: 0.5rem 0;
			}
		}
	}
	hr {
		color: var(--fg-b);
		width: 100%;
	}
	@include media('>desktop') {
		.view-container {
			margin: 1rem auto;

			width: 70vw;
			h1 {
				text-align: left;
				font-size: 4vw;
			}
			img {
				padding: 1rem;
				width: 50%;
			}
			p {
				font-size: 1rem;
				&.hint {
					display: block;

					color: var(--fg-d);
					text-align: center;

					margin-bottom: 1.5rem;
					margin-top: 0;
				}
			}
			.active {
				width: 100%;
			}
			.description {
				flex-direction: row;
				display: flex;

				.collection {
					margin-left: auto;

					text-align: right;
					h1 {
						font-size: 3vw;
					}
				}
			}
		}
	}
</style>
