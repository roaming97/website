<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	export const load: Load = async ({ url }) => ({ props: { url } })
</script>

<script lang="ts">
	import { Fractils } from 'fractils'
	import { mobileThreshold } from 'fractils/stores/Device.svelte'
	import { fade } from 'svelte/transition'
	import { Header, Footer } from '$lib/ui'
	import { opacity } from '$lib/transitionStore'
	import { page } from '$app/stores'
	import 'greset/css/greset.css'
	import '../../styles/app.scss'

	const pageTitle = (path: string) => {
		if (path === '/') return 'roaming97'
		const title = path.split('/')[1]
		return title.charAt(0).toUpperCase() + title.slice(1) + ' - roaming97'
	}

	$mobileThreshold = 1024
	$: key = $page.url
</script>

<template lang="pug">

	svelte:head
		title {pageTitle($page.url.pathname)}

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
