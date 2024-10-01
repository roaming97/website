<script lang="ts">
	import { parse_date } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let { children, date }: { children: Snippet; date: Date } = $props();
</script>

<article class="py-2">
	<h2 class="text-xl font-normal">{parse_date(date)}</h2>
	{@render children()}
</article>
