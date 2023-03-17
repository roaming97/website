<script lang="ts">
	import { page } from '$app/stores'
	import { excludedURLs } from '$lib/data'

	$: exclude = excludedURLs.includes($page.url.pathname)
</script>

<template lang="pug">

	+if('!exclude && !$page.error')
		footer
			hr
			p roaming97© 2016-2023
			p(style="color:var(--fg-c);") Website 5.1 - Powered by #[a(href="https://github.com/FractalHQ/frackit/", target="_blank" rel="noreferrer") Frackit]

</template>

<style lang="scss">
	footer {
		padding: 1rem 0;

		font-size: clamp(0.6rem, 1vw, 0.75rem);
		text-align: center;
		p {
			font-weight: 400;
		}
		hr {
			margin: 1rem auto;
			max-width: 80vw;
			opacity: 0.1;

			color: var(--fg-d);
		}
	}
</style>
