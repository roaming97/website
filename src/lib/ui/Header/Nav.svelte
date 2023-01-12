<script lang="ts">
	import { page } from '$app/stores'
	import { getContext } from 'svelte'
	import Link from './Link.svelte'

	let links: string[][] = getContext('links')
	let open = false
</script>

<template lang="pug">

	nav
		ul
			+each('links as [path, title], i (title)')
				li(class:active!='{$page.url.pathname === path}')
					Link(path!="{path}", title!='{title}')

</template>

<style lang="scss">
	@use '../../../../styles/media' as *;
	nav {
		display: none;
		justify-content: center;
	}

	ul {
		display: flex;

		z-index: 1;
	}

	li {
		list-style: none;
	}
	@include media('>desktop') {
		nav {
			display: flex;
		}
	}
</style>
