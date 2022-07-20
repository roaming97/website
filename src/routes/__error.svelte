<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	export const load: Load = ({ error, status }) => {
		return {
			props: {
				status,
				error
			}
		}
	}
</script>

<script lang="ts">
	import { CodeBlock } from '$lib/ui'
	import { dev } from '$app/env'
	export let status: string
	export let error: Error

	if (dev) console.error(error)
</script>

<template lang="pug">
	h1 {status}
	CodeBlock(code!='{error.message}' lang="plaintext")

	+if('dev')
		.error
			pre {error.stack}
</template>

<style lang="scss">
	@use '../../styles/media' as *;
	::selection {
		background-color: rgb(145, 15, 26) !important;
	}
	h1 {
		margin: 2rem 0;
		font-size: 40vw;
		font-weight: 100;
		color: rgb(228, 48, 63);
	}
	pre {
		color: var(--dark-a);
		opacity: 0.75;

		white-space: pre-wrap;
	}
	@include media('>desktop') {
		h1 {
			font-size: 20vw;
		}
		.error {
			margin: 0 auto;
			width: 60vw;
		}
	}
</style>
