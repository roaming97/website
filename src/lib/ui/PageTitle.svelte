<script lang="ts">
	import { page } from '$app/stores'
	import { pageTitle } from '$lib/utils'

	$: pathname = $page.url.pathname
	$: title = pageTitle(pathname)
</script>

<template lang="pug">
	svelte:head
		title {title}
</template>
