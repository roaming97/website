<script lang="ts">
	import { page } from '$app/stores'
	import { OnMount } from 'fractils'
	import { Arrow } from '$lib/ui'
	$: id = parseInt($page.url.pathname.split('/')[2])
</script>

<template lang="pug">
	OnMount
		.view-controls
			Arrow(link='/view/{id-1}' direction='left')
			p {id}
			Arrow(link='/view/{id+1}' direction='right')
</template>

<style lang="scss">
	.view-controls {
		justify-content: space-around;
		flex-direction: row;
		display: flex;

		width: 100%;
		p {
			margin: auto 0;

			font-family: var(--font-mono);
			font-size: 1.5rem;

			color: var(--dark-b);
		}
	}
</style>
