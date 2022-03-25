<script lang="ts">
	export let name: string
	export let icon: string
	export let percent: number
</script>

<template lang="pug">
	.progress-bar-container
		img(src='{icon}', alt="{name}")
		.progress
			.bar(style="height: calc((12rem / 100) * {percent});")
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.progress-bar-container {
		justify-content: center;
		flex-direction: column;
		margin: 0.5rem 0.2rem;
		align-items: center;
		display: flex;
		width: 50%;
	}
	img {
		max-width: 6rem;
		padding: 1rem;
		height: auto;
	}
	.progress,
	.bar {
		width: 4rem;

		border-radius: 1rem;
	}
	.progress {
		height: 12rem;

		background-color: rgba(0, 0, 0, 0.5);
	}
	.bar {
		background-color: rgb(128, 240, 231);
		transition: 500ms;
	}
	@include media('>desktop') {
		.progress-bar-container {
			margin: 1rem 2rem;
		}
	}
</style>
