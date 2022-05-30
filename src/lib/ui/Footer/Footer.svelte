<template lang="pug">

	footer
		hr
		p roaming97© 2016-2022 - Powered by #[a(href="https://github.com/FractalHQ/frackit/", target="_blank") Frackit]
		p(style="color:var(--dark-d);") Website 5.0 Alpha

</template>

<style lang="scss">
	footer {
		padding: 1rem 0;

		text-align: center;
		font-size: clamp(0.6rem, 1vw, 0.75rem);

		hr {
			max-width: 80vw;
			opacity: 0.1;
		}

		p {
			font-weight: 300;
			margin-top: 1rem;
		}
	}
</style>
