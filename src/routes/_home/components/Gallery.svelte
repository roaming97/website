<script lang="ts">
	import { Tile } from '$lib/ui'
	import type { Anchor } from '$lib/types'
	export let title: string
	export let thumbs: Anchor[]
</script>

<template lang="pug">

	h1 {title}
	+if('thumbs') 
		.tiles 
			+each('thumbs as t, i')
				Tile(
					caption='{t.caption}'
					picture='{t.picture}',
					link='{t.link}',
					index='{i}'
				)

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
