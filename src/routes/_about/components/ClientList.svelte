<script lang="ts">
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { clientArray } from '$lib/data'
	import { client_index } from '$lib/stores'
</script>

<template lang="pug">
	.client-list-container(style='--x: {$client_index}')
		+each('clientArray as i, d')
			.client-container(in:fly!='{{y: 50, duration: 900, easing: quintOut, delay: 150*d}}')
				img(
					src!=`{i.picture}` 
					alt!="{i.caption}" 
					class:inactive!=`{d!=$client_index}` 
					style='--d: {$client_index - d}'
					on:click!='{() => { if (d == $client_index) {window.open(i.link, "_blank")} else $client_index = d}}'
				)
	+key('$client_index')
		h1(in:fly!='{{y: 10, duration: 500, easing: quintOut}}') {clientArray[$client_index].caption} 
		p(in:fly!='{{y: 10, duration: 500, easing: quintOut}}') {clientArray[$client_index].description}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	h1 {
		letter-spacing: 1px;
		font-weight: 800;
		font-size: 3rem;
	}
	p {
		font-size: 1rem;
	}
	.client-list-container {
		flex-direction: row;
		display: flex;

		margin: 0.5rem;

		transform: translateX(calc(calc(15rem * 1.5) + calc(-15rem * var(--x))));
		transition: 400ms transform cubic-bezier(0.23, 1, 0.32, 1);
		.client-container {
			img {
				border-radius: 1rem;

				user-select: none;

				height: 15rem;
				width: 15rem;

				transition: 400ms cubic-bezier(0.23, 1, 0.32, 1);

				cursor: pointer;
				&.inactive {
					filter: grayscale(100%) brightness(0.05);
					transform: perspective(450px) scale(0.75)
						rotateY(clamp(-90deg, calc(22.5deg * var(--d)), 90deg));
				}
			}
		}
	}
	/*
	@include media('>desktop') {
		.client-list-container {
			transform: translateX(calc(36.6vw + calc(-15rem * var(--x))));
		}
	}
	*/
</style>
