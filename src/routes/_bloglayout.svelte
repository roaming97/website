<script>
	import { Logo } from '$lib/ui'
	import { quartOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'
	export let title, date_created, date_modified
</script>

<template lang="pug">

	.article-container
		h1(in:fly='{{x: -10, duration: 500, easing: quartOut}}') {title}
		.article-info
			.logo
				Logo
			.date
				p Written by roaming97
				p(in:fly='{{x: -10, delay: 100, duration: 500, easing: quartOut}}' style="font-size:1rem;opacity:0.5;font-style:italic;") {new Date(Date.parse(date_created)).toLocaleDateString('en-US', {timeZone: 'Etc/GMT+5'})}
				+if('date_modified')
					p(in:fly='{{x: -10, delay: 100, duration: 500, easing: quartOut}}' style="font-size:0.75rem;opacity:0.5;font-style:italic;") Last edited: {new Date(Date.parse(date_modified)).toLocaleDateString('en-US', {timeZone: 'Etc/GMT+5'})}
		hr
		.content(in:fly='{{x: -10, delay: 250, duration: 500, easing: quartOut}}')
			slot

</template>

<style>
	.content {
		margin: 0 1.5rem;
	}
	.article-info {
		display: flex;
	}
	.article-info .logo {
		border-radius: 50%;

		padding: 0.75rem;
		margin: 1rem;
		width: 64px;

		outline: solid 2px var(--light-d);
		background-color: var(--light-b);
	}
	.article-info .date {
		justify-content: center;
		flex-direction: column;
		display: flex;
	}
	.date p {
		margin: 0;
	}
	h1 {
		margin: 0.5rem 1.5rem;

		font-weight: bold;
		text-align: left;
		font-size: 3rem;
	}
	p {
		margin: 0.5rem 1.5rem;
	}
	hr {
		color: rgba(var(--dark-d-rgb), 0.25);
		margin: 1.5rem 0;
	}
	@media (min-width: 1024px) {
		h1 {
			font-size: 3.5rem;
		}
		.article-container {
			margin: 2rem auto;
			width: 70vw;
		}
	}
</style>
