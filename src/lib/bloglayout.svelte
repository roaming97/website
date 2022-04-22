<script>
	export let title
	export let date
</script>

<template lang="pug">

	h1 {title}
	.content
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
