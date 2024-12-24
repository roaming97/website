<script lang="ts">
	import { page } from '$app/state';
	import type { Pagination } from '$lib/types';
	let { pagination }: { pagination: Pagination } = $props();
</script>

<div class="flex items-center justify-evenly gap-2 p-2">
	{#each Array(pagination.total_pages) as _, i}
		{#if pagination.page == i}
			<div
				class="flex h-8 w-8 select-none items-center justify-center rounded-lg p-5 opacity-50 shadow-sm shadow-black dark:shadow-white"
			>
				<span class="select-none">{i + 1}</span>
			</div>
		{:else}
			<a href="{page.url.pathname}?page={i + 1}">
				<div
					class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg p-5 shadow-sm shadow-black dark:shadow-white"
				>
					<span class="select-none">{i + 1}</span>
				</div>
			</a>
		{/if}
	{/each}
</div>
