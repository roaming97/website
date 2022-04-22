<script lang="ts">
	import { Icon } from '$lib/ui'
	import type { Anchor } from '$lib/types'
	export let link: Anchor
</script>

<template lang="pug">
	.scoped
		.social-container 
			a(href="{link.link}" target="_blank")
				Icon(src="{link.picture}", alt='{link.caption}', tip=`{link.caption}` '--size'='12rem')
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.social-container {
		align-items: center;
		flex-direction: row;
		width: max-content;
	}
	:global(.scoped .icon-container) {
		width: 20vw !important;
	}
	@include media('>desktop') {
		:global(.scoped .icon-container) {
			width: 10vw !important;
			margin: 0.5rem;
		}
	}
</style>
