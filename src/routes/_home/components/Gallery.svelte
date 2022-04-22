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
			+each('thumbs as t')
				Tile(
					caption='{t.caption}'
					picture='{t.picture}',
					link='{t.link}'
				)

</template>

<style lang="scss">
	h1 {
		margin: 1rem;
	}
	.tiles {
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		display: flex;
	}
</style>
