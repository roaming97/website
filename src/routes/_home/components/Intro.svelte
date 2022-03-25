<script lang="ts">
	import Logo from '$lib/ui/Logo.svelte'
</script>

<template lang="pug">
    .intro-container
        .logo
           Logo 
        .text
            h1 WELCOME.
            span This is my website, here you can check out my portfolio which showcases my recent digital art and video production work. I also made a small personal blog where I post about any other projects I'm doing.

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
		width: clamp(35vw, 4rem, 50vw);
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
			flex-direction: row-reverse;
			align-items: initial;

			padding: 4rem;
			.logo {
				width: clamp(12.5vw, 3rem, 50vw);

				margin: auto;
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
