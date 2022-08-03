<script lang="ts">
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { mobile } from 'fractils'
	import { clientArray } from '$lib/data'
	import { client_index } from '$lib/stores'
	$: size = $mobile ? '10' : '15'
</script>

<template lang="pug">
	.client-list-container(style='--x: calc({-size}rem * {$client_index}); --size: {size}rem')
		+each('clientArray as i, d')
			.client-container(in:fly!='{{y: 50, duration: 900, easing: quintOut, delay: 150*d}}')
				img(
					src!=`{i.picture}` 
					alt!="{i.caption}" 
					class:inactive!=`{d!=$client_index}` 
					style='--d: {$client_index - d}; --size: {size}rem'
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
		font-size: 2.5rem;
	}
	p {
		font-size: 1rem;
	}
	.client-list-container {
		flex-direction: row;
		display: flex;

		height: var(--size);
		width: var(--size);

		margin: 1rem auto;

		transform: translateX(var(--x));
		transition: 400ms transform cubic-bezier(0.23, 1, 0.32, 1);
		.client-container {
			img {
				border-radius: 1rem;

				user-select: none;

				height: var(--size);
				width: var(--size);

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
	@include media('>desktop') {
		h1 {
			font-size: 3rem;
		}
	}
</style>
