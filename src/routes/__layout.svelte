<script lang="ts">
	import { Fractils, mobileThreshold, initTheme, OnMount } from 'fractils'
	import { fade } from 'svelte/transition'
	import { pageTitle, excludedURLs } from '$lib/data'
	import { Header, Footer } from '$lib/ui'
	import { opacity } from '$lib/stores'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import 'greset/greset.css'
	import '../../styles/app.scss'

	$: pathname = $page.url.pathname
	$: title = pageTitle(pathname)
	$: exclude = excludedURLs.includes(pathname)

	$mobileThreshold = 1024

	onMount(() => initTheme())
</script>

<template lang="pug">

	svelte:head
		title {title}

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
