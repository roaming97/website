<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children: Snippet;
	}

	let { className, children }: Props = $props();
</script>

<div class={cn('mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 ', className)}>
	{@render children()}
</div>
