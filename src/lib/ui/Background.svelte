<script lang="ts">
	export let src: string
</script>

<template lang="pug">
	.background
		img(src!='{src}' alt='background')
</template>

<style lang="scss">
	.background {
		position: absolute;
		height: 100vh;
		width: 100vw;

		z-index: 0;
		img {
			position: fixed;
			height: 100%;
			width: 100%;
		}
	}
</style>
