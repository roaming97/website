<script lang="ts">
	import { mobile } from 'fractils'
	import type { FlyParams } from 'svelte/transition'
	import { fly, fade } from 'svelte/transition'
	import { roles } from '$lib/data'
	import { capitalized } from '$lib/utils'
	import { quintOut } from 'svelte/easing'
	import { Icon } from '$lib/ui'
	import { onMount } from 'svelte'

	$: index = 0
	$: size = $mobile ? '9rem' : '16rem'
	let interval: NodeJS.Timeout

	const flyOptions: FlyParams = {
		x: 20,
		duration: 800,
		easing: quintOut
	}

	onMount(() => {
		interval = setInterval(() => {
			pageInterval()
		}, 10000)
	})

	const pageInterval = () => {
		const newIndex = (index + 1) % roles.length
		changePage(newIndex)
	}

	const changePage = (ind: number) => {
		if (ind === index) return
		flyOptions.x = ind > index ? 20 : -20
		index = ind
	}
</script>

<template lang="pug">
	.intro-container
		+key('index')
			.text(in:fly!='{{...flyOptions}}')
				h1 I am a 
					b(style="color: {roles[index][1]}") {roles[index][0]}
					| .
				.description(in:fly!='{{...flyOptions, delay: 200}}')
					Icon(src='icons/role_{roles[index][3]}.svg' alt!="{roles[index][0]} icon" size!='{size}')
					span(in:fly!='{{...flyOptions, delay: 400}}') {roles[index][2]}
		.btns
			+each('roles as r, i')
				button(class:current!='{i===index}' on:click!="{() => changePage(i)}" id=`role_page{i+1}` aria-label='Role page {i+1}')
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.intro-container {
		height: 16rem;
		width: 100vw;

		padding: 1rem;
		margin-top: 2rem;

		background-color: var(--bg-a);

		justify-content: center;
		flex-direction: column;
		align-items: center;
		display: flex;
	}
	.description {
		flex-direction: column;
		align-items: center;
		display: flex;
	}
	.btns {
		justify-content: center;
		margin: 1rem 0;
		display: flex;
		width: 100%;
	}
	button {
		height: 1.5rem;
		width: 1.5rem;

		margin: 0.5rem;

		background-color: transparent;

		border: solid 1px var(--fg-a);
		border-radius: 50%;
		outline: none;

		transition: 150ms;

		&.current {
			background-color: var(--fg-a);
			border: 0;
		}
	}
	.text {
		text-align: center;
		h1 {
			letter-spacing: normal;
			font-size: 32px;
		}
		b {
			font-weight: 800;
		}
		span {
			color: var(--fg-a);
			font-size: 14px;
		}
	}
	@include media('>desktop') {
		.intro-container {
			justify-content: space-around;
			align-items: center;
			height: auto;
			.description {
				flex-direction: row;
			}
			.text {
				padding: 1rem;
				text-align: left;
				width: 65%;
				h1 {
					text-align: left;
					font-size: 4rem;
				}
				span {
					font-size: 1.5rem;
					max-width: 80%;
					padding: 2rem;
				}
			}
		}
	}
</style>
