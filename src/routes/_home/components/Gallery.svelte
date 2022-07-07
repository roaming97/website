<script lang="ts">
	import { Tile } from '$lib/ui'
	export let title: string
	export let thumbs: Anchor[]
</script>

<template lang="pug">

	h1 {title}
	.tiles 
		+each('thumbs as thumb')
			Tile("{thumb}")

</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	h1 {
		margin: 1rem;

		text-transform: uppercase;
		text-align: center;

		font-weight: 800;
		font-size: 3rem;
	}
	.tiles {
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		display: flex;
		margin: 1rem 0;
	}
</style>
