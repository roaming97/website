<script lang="ts">
	import type { SvelteComponent } from 'svelte'
	import { onMount } from 'svelte'
	import { atomOneDark, atomOneLight } from 'svelte-highlight/styles'
	import { theme } from 'fractils'
	import Icon from '@iconify/svelte'

	export let code: string
	export let lang: string
	export let header: string
	export let footer: string

	export let showIcon: 'top' | 'bottom'
	export let icon: string

	let src: string
	let language: string
	let component: typeof SvelteComponent

	$: style = $theme === 'dark' ? atomOneDark : atomOneLight
	$: svelte = lang === 'svelte'

	if (icon == undefined) icon = lang

	onMount(async () => {
		if (svelte) {
			component = (await import('svelte-highlight')).HighlightSvelte
		} else {
			component = lang
				? (await import('svelte-highlight')).Highlight
				: (await import('svelte-highlight')).HighlightAuto
			const l = await import(`../../../../node_modules/svelte-highlight/languages/${lang}.js`)
			language = l.default
		}
	})
</script>

<template lang="pug">
	svelte:head
		+html('style')
	.codeblock
		+if('header')
			.header
				+if('showIcon == "top"')
					.icon
						Icon(icon!="{icon}")
				span {header}
			hr
		+if('svelte')
			svelte:component(this!='{component}' code!=`{code}`)
			+else()
			svelte:component(this!='{component}' code!=`{code}` language!="{language}")
		+if('footer')
			hr
			.footer
				+if('showIcon == "bottom"')
					.icon
						Icon(icon!="{icon}")
				span {footer}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
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

		box-shadow: 0 16px 24px rgba(0, 0, 0, 0.2);

		hr {
			color: var(--light-b);
			margin: 0;
		}

		.footer,
		.header {
			padding: 0.75rem;

			align-items: center;
			display: flex;
			span {
				color: var(--dark-d);
				font-size: 0.75rem;
			}
			.icon {
				margin-right: 0.5rem;

				transform: scale(1.5);
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
