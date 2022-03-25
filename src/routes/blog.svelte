<script lang="ts">
	export let posts: string[]
</script>

<template lang="pug">
	h1 Blog
	h2 My purely personal corner, anything goes.
	hr
	p {posts}
</template>

<style>
	h1 {
		font-weight: 200;
		text-align: left;
		font-size: 6rem;
	}
	h1,
	h2 {
		margin: 0.5rem 2rem;
	}
	hr {
		margin: 1rem;
	}
	p {
		font-size: 1.5rem;
		margin: 0 2rem;
	}
</style>
