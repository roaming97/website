<script lang="ts">
	import Email from './Email.svelte';
</script>

<div
	class="flex flex-col md:flex-row items-center
	justify-between p-8 md:p-32 lg:px-48 xl:px-60 2xl:px-80 w-full gap-8 bg-brand-a/50"
>
	<div class="flex flex-col">
		<h2>Did anything catch your eye?</h2>
		<p>Feel free to reach out. Let's work together!</p>
	</div>
	<Email />
</div>
