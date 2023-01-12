<script lang="ts">
	import { Tooltip } from '$lib/ui'
	export let src: string
	export let alt: string
	export let tip = ''
	export let tipindex = '-1'
	export let size = '5rem'
</script>

<template lang="pug">
	+if('tip != ""')
		Tooltip(content!="{tip}" i!='{tipindex}')
			.icon-container(style="--size: {size}")
				img(src!='{src}', alt!="{alt}")
		+else()
			.icon-container(style="--size: {size}")
				img(src!='{src}', alt!="{alt}")
</template>

<style lang="scss">
	.icon-container {
		border: 0;

		padding: 0.5rem;
		height: var(--size, 5rem);
		width: var(--size, auto);

		img {
			height: 100%;
			width: 100%;
		}
	}
</style>
