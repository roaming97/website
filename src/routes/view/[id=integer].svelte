<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'

	export const load: Load = async ({ params }) => {
		const dataFile = await import('$lib/data')
		const targetArray = dataFile.viewData
		const index = parseInt(params.id) - 1
		const errorMessage = `Item ${index + 1} not found, max is ${targetArray.length}`
		const getItem = () =>
			new Promise<ViewItem>(async (res, rej) => {
				try {
					const item = targetArray[index]
					res({
						title: item.title,
						collection: item.collection,
						picture: item.picture,
						date: item.date,
						description: item.description
					})
				} catch (err) {
					console.error(err)
					rej()
				}
			}).catch(() => {
				return undefined
			})

		const data = await getItem()
		if (data) {
			return {
				props: {
					data
				}
			}
		}
		return {
			status: 404,
			error: errorMessage
		}
	}
</script>

<script lang="ts">
	import { thumbnailIsActive } from '$lib/stores'
	import { page } from '$app/stores'
	import type { VisibilityEvent } from 'fractils'
	import { OnMount, visibility } from 'fractils'
	import { quintOut, backOut } from 'svelte/easing'
	import { fade, fly } from 'svelte/transition'
	import ViewControls from '../_view/components/ViewControls.svelte'
	import Error from '../__error.svelte'
	import About from '../about.svelte'

	export let data: ViewItem

	let visible: boolean
	let options = { threshold: 0.75, once: true }
	$: parsed_date = data.date.toLocaleDateString('en-US', { timeZone: 'Etc/GMT+5' })
	$: message = !$thumbnailIsActive ? 'expand' : 'shrink'

	const handleChange = (e: VisibilityEvent) => (visible = e.detail.isVisible)
	const toggleActive = () => ($thumbnailIsActive = !$thumbnailIsActive)
</script>

<template lang="pug">
	OnMount
		.view-container
			.controls(in:fade!='{{duration: 600, delay: 100}}')
				ViewControls
			img(
				in:fade!='{{duration: 500, delay: 200}}'
				src!="{data.picture}"
				alt!=`{data.title}`
				on:click!="{toggleActive}"
				class:active!='{$thumbnailIsActive}'
			)
			p.hint Click on the image to {message}. 
			hr
			.visibleControl(
				use:visibility!='{options}'
				on:f-change!='{handleChange}'
			)
				+if('visible')
					.description
						.initial-info
							h1(in:fly!='{{x: -40, duration: 800, delay: 300, easing: quintOut}}') {data.title}
							h3(in:fly!='{{x: -40, duration: 800, delay: 600, easing: quintOut}}') {parsed_date}
						+if('data.collection')
							.collection
								p(in:fly!='{{x: 40, duration: 800, delay: 450, easing: quintOut}}') Collection
								h1(in:fly!='{{x: 40, duration: 800, delay: 750, easing: quintOut}}') {data.collection}
					+if('data.description')
						p(in:fly!='{{y: 20, duration: 800, delay: 1000, easing: backOut }}') {data.description}
</template>

<style lang="scss">
	@use '../../../styles/media' as *;
	.view-container {
		background-color: rgba(var(--light-b-rgb), 0.3);
		box-shadow: 0 0.5rem 16px rgba(0, 0, 0, 0.5);

		border-radius: 24px;
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
			color: var(--light-d);
			font-weight: 400;
		}
		img {
			margin: 0.5rem auto;
			cursor: pointer;
		}
		hr {
			background-color: var(--light-d);

			width: 100%;
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
				color: var(--dark-d);
				margin: 0.5rem 0;
			}
		}
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
			hr {
				width: 100%;
			}
			p {
				font-size: 1rem;
				&.hint {
					display: block;

					color: var(--dark-d);
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
