<template lang="pug">

	footer
		hr
		p roaming97© 2016-2022
		p(style="color:var(--dark-c);") Website 5.0 - Powered by #[a(href="https://github.com/FractalHQ/frackit/", target="_blank") Frackit]

</template>

<style lang="scss">
	footer {
		padding: 1rem 0;

		text-align: center;
		font-size: clamp(0.6rem, 1vw, 0.75rem);
		hr {
			margin: 1rem auto;
			max-width: 80vw;
			opacity: 0.1;

			color: var(--dark-d);
		}
		p {
			font-weight: 300;
		}
	}
</style>
