<script lang="ts">
	export let samples: Anchor[]
</script>

<template lang="pug">
    .samples-container
        +each('samples as i')
            a(href!='{i.link}' target="_blank" rel="noreferrer")
                img(src!='{i.picture}' alt!="{i.caption}")
</template>

<style lang="scss">
	.samples-container {
		display: flex;

		a {
			padding: 0.5rem;
			margin: 2rem 0;

			width: 100%;

			transform: scale(0.975);

			transition: 350ms cubic-bezier(0.22, 1, 0.36, 1);
			img {
				width: 100%;
			}
			&:hover {
				transform: scale(1);
			}
		}
	}
</style>
