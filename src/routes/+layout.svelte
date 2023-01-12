<script lang="ts">
	import type { PageData } from './$types'
	import 'greset/greset.css'

	import { Fractils, MacScrollbar, mobileThreshold, initTheme, theme } from 'fractils'
	import { browser } from '$app/environment'
	import { fade } from 'svelte/transition'
	import { excludedURLs } from '$lib/data'
	import { pageTitle } from '$lib/utils'
	import { Header, Footer } from '$lib/ui'
	import { opacity } from '$lib/stores'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import { parse } from 'cookie'
	import '../../styles/app.scss'

	$: pathname = $page.url.pathname
	$: title = pageTitle(pathname)
	$: exclude = excludedURLs.includes(pathname)

	export let data: PageData
	let _theme = data.theme

	$: if (browser && $theme !== parse(document.cookie).theme) {
		document.cookie = `theme=${$theme}`
	}

	$mobileThreshold = 1024

	onMount(() => initTheme())
</script>

<template lang="pug">

	svelte:head
		title {title}

	MacScrollbar

	+if('!exclude && !$page.error')
		Header

	div(style='opacity:{$opacity};')
		slot

	+if('!exclude && !$page.error')
		Footer

	Fractils

</template>

<style>
	div {
		transition: opacity 250ms;
	}
</style>
