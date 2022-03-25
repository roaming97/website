<script lang="ts">
	import { page } from '$app/stores'
	import { fade } from 'svelte/transition'
	import { Header, Footer } from '$lib/ui'
	import 'greset/css/greset.css'
	import '../../styles/app.scss'

	const pageTitle = (path: string) => {
		if (path === '/') return 'roaming97'
		const title = path.split('/')[1]
		return title.charAt(0).toUpperCase() + title.slice(1) + ' - roaming97'
	}
</script>

<template lang="pug">

	svelte:head
		title {pageTitle($page.url.pathname)}

	Header

	slot

	Footer

</template>
