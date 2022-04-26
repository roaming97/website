<script>
	import { quartOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'
	export let title
	export let date
</script>

<template lang="pug">

	h1(in:fly='{{x: -10, duration: 500, easing: quartOut}}') {title}
	.content(in:fly='{{x: -10, delay: 100, duration: 500, easing: quartOut}}')
		p(style="font-size:1rem;opacity:0.5;font-style:italic;") {new Date(Date.parse(date)).toLocaleDateString('en-US', {timeZone: 'Etc/GMT+5'})}
		slot
</template>

<style>
	.content {
		margin: 0 1.5rem;
	}
	h1 {
		margin: 1rem;

		font-weight: bold;
		text-align: left;
		font-size: 3.5rem;
	}
</style>
