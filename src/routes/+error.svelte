<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div class="flex flex-col lg:p-8">
	<h1 class="text-9xl lg:text-[200px] text-error">{$page.status}</h1>
	<h2 class="text-4xl text-error">{$page.error?.message}</h2>
</div>
