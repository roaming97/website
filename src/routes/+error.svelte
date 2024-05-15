<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.error}
	<div class="flex flex-col lg:p-8">
		<h1 class="text-9xl font-black lg:text-[200px] text-error">{$page.status}</h1>
		<h2 class="text-4xl font-normal text-error">{$page.error?.message}</h2>
	</div>
{/if}
