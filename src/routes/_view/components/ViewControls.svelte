<script lang="ts">
	import { viewData } from '$lib/data'
	import { page } from '$app/stores'
	import { Arrow } from '$lib/ui'
	$: id = parseInt($page.url.pathname.split('/')[2])
</script>

<template lang="pug">
	.view-controls
		+if('id == 1')
			Arrow(link='' direction='left' disabled=true)
			+else()
			Arrow(link='/view/{id-1}' direction='left')
		p {id}
		+if('id >= viewData.length')
			Arrow(link='' direction='right' disabled=true)
			+else()
			Arrow(link='/view/{id+1}' direction='right')
</template>

<style lang="scss">
	.view-controls {
		justify-content: space-around;
		flex-direction: row;
		display: flex;

		/*
		background-color: rgba(var(--bg-b-rgb), 0.5);
		box-shadow: 0 0.5rem 32px rgba(0, 0, 0, 0.25);
		border-radius: 16px;
		*/

		width: 100%;
		p {
			margin: auto 0;

			font-family: var(--font-mono);
			font-size: 1.25rem;

			color: var(--fg-b);
		}
	}
</style>
