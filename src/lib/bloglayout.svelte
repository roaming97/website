<script>
	import { quartOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'
	export let title
	export let date
</script>

<template lang="pug">

	h1(in:fly='{{x: -10, duration: 500, easing: quartOut}}') {title}
	p(in:fly='{{x: -10, delay: 100, duration: 500, easing: quartOut}}' style="font-size:1rem;opacity:0.5;font-style:italic;") {new Date(Date.parse(date)).toLocaleDateString('en-US', {timeZone: 'Etc/GMT+5'})}
	.content(in:fly='{{x: -10, delay: 250, duration: 500, easing: quartOut}}')
		slot
</template>

<style lang="scss">
	.content {
		margin: 0 1.5rem;
	}
	h1 {
		margin: 0.5rem 1.5rem;

		font-weight: bold;
		text-align: left;
		font-size: 3.5rem;
	}
	p {
		margin: 0.5rem 1.5rem;
	}
</style>
