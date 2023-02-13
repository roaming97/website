<script lang="ts">
	import { CodeBlock } from '$lib/ui'
	import { dev } from '$app/environment'
	import { page } from '$app/stores'

	if (dev) console.error($page.error.stack)
</script>

<template lang="pug">
	h1 {$page.status}
	CodeBlock(code!='{$page.error.message}' lang="plaintext")

	+if('dev && $page.error.stack')
		.error
			pre {$page.error.stack}
</template>

<style lang="scss">
	@use '../../styles/media' as *;
	::selection {
		background-color: rgb(145, 15, 26) !important;
	}
	h1 {
		margin: 1rem 0;
		font-size: 40vw;
		font-weight: 100;
		color: #e4303f;
		text-shadow: 60px 0 80px #f05, -60px 0 80px #f20;
	}
	pre {
		color: var(--fg-a);
		opacity: 0.75;

		font-size: 0.8rem;

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
