<script lang="ts">
	import { ThemeToggle, scrollY } from 'fractils'
	import Nav from './Nav.svelte'
	import Menu from './Menu.svelte'

	const links = [
		['/', 'Home'],
		['/about', 'About'],
		['/contact', 'Contact'],
		['/blog', 'Blog']
	]

	let headerHeight = '3rem'
	// 3rem = 48px
	let scrollThreshold = 48
	$: scroll = $scrollY > scrollThreshold
</script>

<template lang="pug">

	header(class:scroll style="--height: {headerHeight};")
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
		position: relative;
		display: flex;

		background-color: rgba(var(--light-a-rgb), 0.9);
		// not supported in firefox stable yet :(
		backdrop-filter: blur(16px);

		width: 100vw;
		height: var(--height);

		z-index: 50;
		&.scroll {
			position: fixed;
		}
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
			&.scroll {
				position: relative;
			}
		}
	}
</style>
