<script lang="ts">
	import { page } from '$app/stores';
	import type { Pagination } from '$lib/types';
	let { pagination }: { pagination: Pagination } = $props();
</script>

<div class="flex items-center justify-evenly gap-2 p-2">
	{#each Array(pagination.total_pages) as _, i}
		{#if pagination.page == i}
			<div
				class="opacity-50 select-none flex items-center justify-center w-8 h-8 p-5 shadow-black dark:shadow-white rounded-lg shadow-sm"
			>
				<span class="select-none">{i + 1}</span>
			</div>
		{:else}
			<a href="{$page.url.pathname}?page={i + 1}">
				<div
					class="cursor-pointer flex items-center justify-center w-8 h-8 p-5 shadow-black dark:shadow-white rounded-lg shadow-sm"
				>
					<span class="select-none">{i + 1}</span>
				</div>
			</a>
		{/if}
	{/each}
</div>
