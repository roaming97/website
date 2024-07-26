<script lang="ts">
	import Email from './home/Email.svelte';
	export let bg_class = 'bg-brand-a';
</script>

<div
	class="flex flex-col md:flex-row items-center justify-between p-8 md:p-32 lg:px-48 xl:px-60 2xl:px-80 w-full {bg_class}"
>
	<div class="flex flex-col text-white">
		<h2>Did anything catch your eye?</h2>
		<p>Feel free to reach out. Let's work together!</p>
	</div>
	<Email />
</div>
