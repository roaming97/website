<script lang="ts">
	import { cn } from '$lib/utils';
	import Tooltip from '../Tooltip.svelte';

	interface Props {
		title: string;
		icons: string[][];
		className?: string;
	}

	let { title, icons, className = '' }: Props = $props();
</script>

<div
	class="flex flex-col gap-4 rounded-xl border-2 bg-gradient-to-tl from-darkest/10 p-4 dark:bg-gradient-to-br {className}"
>
	<h3 class={cn('font-normal', className)}>{title}</h3>
	<div class="grid grid-cols-3 justify-evenly gap-4 md:grid-cols-4">
		{#each icons as ico, i}
			<Tooltip content={ico[0]} {i}>
				<img
					src="/img/ico/{ico[1]}.svg"
					class="aspect-square transition-all duration-300
					ease-in-out hover:scale-110 hover:drop-shadow-glow"
					width="64"
					height="64"
					alt="{ico[0].toLowerCase()} icon"
				/>
			</Tooltip>
		{/each}
	</div>
</div>
