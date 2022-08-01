<script lang="ts">
	export let samples: Anchor[]
</script>

<template lang="pug">
    .samples-container
        +each('samples as i')
            a(href!='{i.link}' target="_blank")
                img(src!='{i.picture}' alt!="{i.caption}")
</template>

<style lang="scss">
	.samples-container {
		display: flex;

		a {
			padding: 0.5rem;
			margin: 2rem 0;

			width: 100%;
			img {
				width: 100%;
			}
		}
	}
</style>
