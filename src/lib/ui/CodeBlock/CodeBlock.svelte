<script lang="ts">
	import { theme } from 'fractils'
	import { onMount } from 'svelte'
	import { Highlight, HighlightAuto } from 'svelte-highlight'
	import { materialDarker, atomOneLight } from 'svelte-highlight/styles'
	export let code: string
	export let lang: string | undefined = undefined
	export let footer: string | undefined = undefined

	let language: any

	onMount(async () => {
		if (lang != undefined) {
			const l = await import(`../../../../node_modules/svelte-highlight/languages/${lang}.js`)
			language = l.default
		}
	})
</script>

<template lang="pug">
	svelte:head
		+if('$theme == "dark"')
			+html('materialDarker')
			+else()
				+html('atomOneLight')
	.codeblock
		+if('lang')
			Highlight(language!="{language}" '{code}') 
			+else()
				HighlightAuto('{code}')
		+if('footer')
			hr
			.footer
				span {footer}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	:global(.hljs) {
		background: transparent !important;
	}
	.codeblock {
		border-radius: 0.5rem;

		text-align: left;
		font-size: 12px;
		tab-size: 4;

		margin: 1rem auto;
		width: 90vw;

		outline: solid 2px var(--light-b);
		background-color: var(--light-a);
		color: var(--dark-a);

		white-space: pre-wrap;

		box-shadow: 0 0.5rem 16px rgba(0, 0, 0, 0.5);

		hr {
			color: var(--light-b);
			margin: 0;
		}

		.footer {
			padding: 1rem;
			span {
				color: var(--dark-b);
				font-size: 0.75rem;
			}
		}
	}
	@include media('>desktop') {
		.codeblock {
			font-size: 1rem;
			max-width: 60vw;
		}
	}
</style>
