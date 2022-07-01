<script lang="ts">
	import { fly } from 'svelte/transition'
	import { clientArray } from '$lib/data'
	import { client_index } from '$lib/stores'
	import type { Anchor } from '$lib/types'
	import { quintOut } from 'svelte/easing'
	import { onMount } from 'svelte'
	$: item_prev = clientArray[$client_index - 1]
	$: item = clientArray[$client_index]
	$: item_next = clientArray[$client_index + 1]
	const handleChange = (val: number) => {
		$client_index = val % clientArray.length
	}
</script>

<template lang="pug">
	.client-container
		+if('item_prev != undefined')
			.link.not-current.click(on:click!='{handleChange($client_index-1)}')
				img(src!="{item_prev.picture}" alt!=`{item_prev.caption}`)
			+else()
			.link.not-current.default
		.link
			.current 
				a(href!="{item.link}")
					img(src!="{item.picture}" alt!=`{item.caption}`)
		+if('item_next != undefined')
			.link.not-current.click(on:click!='{handleChange($client_index+1)}')
				img(src!="{item_next.picture}" alt!=`{item_next.caption}`)
			+else()
			.link.not-current.default
	+key('$client_index')
		h1(in:fly!='{{y: 10, duration: 500, easing: quintOut}}') {item.caption}
		p(in:fly!='{{y: 10, duration: 500, delay: 200, easing: quintOut}}') {item.description}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.client-container {
		justify-content: space-evenly;
		margin: 1.5rem 0;
		display: flex;
	}
	h1 {
		letter-spacing: 1px;
		font-weight: 800;
		font-size: 2rem;
	}
	p {
		font-size: 1rem;
	}
	.link {
		margin: 1rem auto;
		img {
			border-radius: 1rem;
			width: 17.5vh;
			height: auto;
		}
	}
	.not-current {
		filter: grayscale(50%) brightness(0.2);
		transform: scale(50%);
	}
	.default {
		background-color: var(--light-c);
		border-radius: 1rem;
		width: 17.5vh;
		height: auto;
	}
	.click {
		cursor: pointer;
	}
	@include media('>desktop') {
		.client-container {
			margin: auto;
			width: 70vw;
		}
		h1 {
			font-size: 3.5rem;
		}
		.link {
			img {
				border-radius: 2rem;
				width: 40vh;
			}
		}
		.default {
			border-radius: 2rem;
			width: 40vh;
		}
	}
</style>
