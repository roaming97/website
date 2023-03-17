<script lang="ts">
	import type { PageData } from './$types'
	import 'greset/greset.css'

	import { Fractils, MacScrollbar, mobileThreshold, initTheme, theme } from 'fractils'
	import { browser } from '$app/environment'
	import { fade } from 'svelte/transition'
	import { Header, Footer, PageTitle } from '$lib/ui'
	import { opacity } from '$lib/stores'
	import { onMount } from 'svelte'
	import { parse } from 'cookie'
	import '../../styles/app.scss'

	export let data: PageData
	let _theme = data.theme

	$: if (browser && $theme !== parse(document.cookie).theme) {
		document.cookie = `theme=${$theme}`
	}

	$mobileThreshold = 1024

	onMount(() => initTheme())
</script>

<template lang="pug">

	PageTitle

	MacScrollbar

	Header

	div(style='opacity:{$opacity};')
		slot

	Footer

	Fractils

</template>

<style>
	div {
		transition: opacity 250ms;
	}
</style>
