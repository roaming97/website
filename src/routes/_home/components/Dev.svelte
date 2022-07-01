<script lang="ts">
	import { devGallery } from '$lib/data'
	import { Button } from '$lib/ui'
</script>

<template lang="pug">
	h1.title Developing

	+each('devGallery as s, i')
		.project
			+if('i % 2 == 0')
				.project-info.left
					.text
						h2.left {s.caption}
						p.left {s.description}
						.btn
							Button(text='Source code' link!='{s.link}')
					img(src!="{s.picture}" alt!=`{s.caption}`)
				+else()
				.project-info.right
					.text
						h2.right {s.caption}
						p.right {s.description}
						.btn
							Button(text='Source code' link!='{s.link}')
					img(src!="{s.picture}" alt!=`{s.caption}`)
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
		flex-direction: column;
		align-items: center;
		margin: 1.5rem 0;
		display: flex;
	}
	.left,
	.right {
		text-align: center;
		margin: 0;
	}
	.btn {
		justify-content: center;
		display: flex;
	}
	h2 {
		margin: 1rem;

		text-align: center;

		font-weight: 200;
		font-size: 2rem;
	}
	img {
		padding: 2rem;
		width: 50vw;
	}
	@include media('>desktop') {
		.title {
			margin: 1rem 2rem;

			font-size: 4rem;
			letter-spacing: 2px;
		}
		.project-info {
			justify-content: space-around;
			display: flex;

			width: 75vw;
			&.left {
				flex-direction: row;
			}
			&.right {
				flex-direction: row-reverse;
			}
		}
		h2,
		p {
			margin: 1rem 15%;
		}
		h2 {
			font-size: 4rem;
		}
		.text {
			margin: auto 0;
		}
		.left {
			margin-right: 6rem;
			text-align: left;
		}
		.right {
			margin-left: 6rem;
			text-align: right;
			.btn {
				width: max-content;
				margin-left: auto;
			}
		}
		.btn {
			justify-content: initial;
		}
		img {
			padding: 4rem;
			width: 25vw;
		}
	}
</style>
