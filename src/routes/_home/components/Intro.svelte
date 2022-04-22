<script lang="ts">
	import { Logo } from '$lib/ui'
</script>

<template lang="pug">
    .intro-container
        .text
            h1 WELCOME.
            span This is my website. Here you can check out my portfolio which showcases my recent digital art and video production work. I also made a small personal blog where I post about any other projects I'm doing.
        .logo
           Logo 

</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	.intro-container {
		width: 100vw;

		padding: 0 1rem 1.5rem 1rem;

		justify-content: center;
		flex-direction: column;
		align-items: center;
		display: flex;
	}
	.logo {
		padding: 2rem;
		width: clamp(20vw, 4rem, 30vw);
	}
	.text {
		text-align: center;
		h1 {
			font-size: clamp(3.5rem, 7vw, 8rem);
			font-weight: 100;
		}
		span {
			color: var(--dark-a);
		}
	}
	@include media('>desktop') {
		.intro-container {
			justify-content: space-around;
			flex-direction: row;
			align-items: initial;

			padding: 4rem;
			.logo {
				width: clamp(12.5vw, 3rem, 50vw);
				padding: 2rem;
				margin: 1rem;
			}
			.text {
				padding: 1rem;
				text-align: left;
				width: 65%;
				h1 {
					text-align: left;
				}
				span {
					font-size: clamp(0.75rem, 1.5rem, 2rem);
				}
			}
		}
	}
</style>
