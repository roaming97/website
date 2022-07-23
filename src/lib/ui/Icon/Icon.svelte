<script lang="ts">
	import { Tooltip } from '$lib/ui'
	export let src: string
	export let alt: string
	export let tip: string
	export let tipindex: string
</script>

<template lang="pug">
	+if('tip')
		Tooltip(content="{tip}" i='{tipindex}')
			.icon-container
				img(src='{src}', alt="{alt}")
		+else()
			.icon-container
				img(src='{src}', alt="{alt}")
</template>

<style lang="scss">
	.icon-container {
		border: 0;

		padding: 0.5rem;
		height: var(--size, auto);
		width: var(--size, 5rem);

		img {
			height: 100%;
			width: 100%;
		}
	}
</style>
