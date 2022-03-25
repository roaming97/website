<script lang="ts">
	import { ThemeToggle } from 'fractils'
	import Nav from './Nav.svelte'
	import Menu from './Menu.svelte'

	const links = [
		['/', 'Home'],
		['/about', 'About'],
		['/contact', 'Contact'],
		['/blog', 'Blog']
	]
</script>

<template lang="pug">

	header
		Menu({links})

		span
			Nav({links})

		#theme.corner
			ThemeToggle

</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	header {
		justify-content: space-between;
		position: fixed;
		display: flex;

		background-color: var(--light-a);

		width: 100vw;
		height: 3rem;

		z-index: 50;
	}

	span {
		justify-content: center;
		display: flex;
	}

	.corner {
		display: flex;

		margin: auto 1rem auto 0;
		align-items: flex-end;
		position: relative;

		width: 2rem;
	}

	:global(#theme .icon) {
		font-size: 1.5rem;
	}

	@include media('>desktop') {
		header {
			position: relative;
		}
	}
</style>
