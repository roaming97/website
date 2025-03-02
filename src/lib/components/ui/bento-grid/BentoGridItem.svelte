<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		title?: string;
		description?: string;
		icon?: Snippet;
		header?: Snippet;
		children?: Snippet;
	}

	let { className, title, description, icon, header, children }: Props = $props();
</script>

<div
	class={cn(
		'group/bento row-span-1 flex flex-col justify-between space-y-2 rounded-xl border border-black/[0.2] bg-white p-4 drop-shadow-glow transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
		className
	)}
>
	{@render header?.()}
	<div class="transition duration-200">
		<div class="flex items-center gap-2 py-2">
			{@render icon?.()}
			{#if title}
				<p class="my-2 font-bold">
					{title}
				</p>
			{/if}
		</div>
		{#if description}
			<div class="font-primary text-xs font-normal">
				{description}
			</div>
		{/if}
		{@render children?.()}
	</div>
</div>
