<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	export const load: Load = ({ error, status }) => {
		return {
			props: {
				title: `${status}`,
				description: `${error.message}`
			}
		}
	}
</script>

<script lang="ts">
	export let title: string
	export let description: string
</script>

<template lang="pug">
	h1 {title}
	p {description}
</template>

<style lang="scss">
	::selection {
		background-color: rgb(145, 15, 26);
	}
	h1 {
		margin: 2rem 0;
		font-size: 20vw;
		font-weight: 100;
		color: rgb(228, 48, 63);
	}
	p {
		font-size: 1em;
		text-align: center;
		margin: 2rem 0 2rem 0;
	}
</style>
