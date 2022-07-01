<script lang="ts">
	import { devGallery } from '$lib/data'
</script>

<template lang="pug">
	h1.title Developing

	+each('devGallery as s, i')
		.project
			+if('i % 2 == 0')
				.project-info.left
					h2.left {s.caption}
					p.left {s.description}
				+else()
				.project-info.right
					h2.right {s.caption}
					p.right {s.description}
</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.title {
		font-weight: 800;
		font-size: 3rem;

		text-transform: uppercase;
		letter-spacing: 0px;
	}
	.project {
		margin: 1.5rem 0;
	}
	h2 {
		margin: 1rem;

		text-align: center;

		font-weight: 200;
		font-size: 2rem;
	}
	@include media('>desktop') {
		.title {
			margin: 1rem 2rem;

			font-size: 4rem;
			letter-spacing: 2px;
		}
		.project-info {
			max-width: 50vw;
			&.left {
				margin-right: auto;
			}
			&.right {
				margin-left: auto;
			}
		}
		h2,
		p {
			margin: 1rem 15%;
		}
		h2 {
			font-size: 4rem;
		}
		.left {
			text-align: left;
		}
		.right {
			text-align: right;
		}
	}
</style>
