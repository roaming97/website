<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		title?: string | HTMLElement;
		description?: string | HTMLElement;
		icon?: Snippet;
		header?: Snippet;
	}

	let { className, title, description, icon, header }: Props = $props();
</script>

<div
	class={cn(
		'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-2 rounded-xl border border-black/[0.2] bg-white p-4 drop-shadow-glow transition duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
		className
	)}
>
	{@render header?.()}
	<div class="transition duration-200 group-hover/bento:text-brand-a">
		{@render icon?.()}
		{#if title}
			<div class="mb-2 mt-2 font-primary font-bold">
				{title}
			</div>
		{/if}
		{#if description}
			<div class="font-primary text-xs font-normal">
				{description}
			</div>
		{/if}
	</div>
</div>
