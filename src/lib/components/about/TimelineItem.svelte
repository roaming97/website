<script lang="ts">
	import type { Snippet } from 'svelte';

	type WorkArea = 'web' | 'yellow' | 'design';

	interface Props {
		work_area: WorkArea;
		period: string;
		role: string;
		client: string;
		bottom?: boolean;
		children: Snippet;
	}

	let { work_area, period, role, client, bottom = false, children }: Props = $props();

	let circle_class = $derived.by(() => {
		switch (work_area) {
			case 'web':
				return 'border-indigo-900 bg-indigo-500';
			case 'design':
				return 'border-teal-900 bg-teal-500';
			case 'yellow':
				return 'border-yellow-900 bg-yellow-500';
		}
	});
</script>

<div class="flex gap-3">
	<div class="flex flex-col items-center">
		<div
			class="aspect-square h-4 w-4 rounded-full border {circle_class} drop-shadow-glow"
		></div>
		<div class="h-full w-[1px] border border-neutral-300 dark:border-dark"></div>
	</div>
	<div class="flex w-full flex-col" class:pb-10={!bottom}>
		<p class="text-xs font-bold text-neutral-500 dark:text-neutral-400">
			{period}
		</p>
		<h2>{role}</h2>
		<h3 class="text-sm text-neutral-400">{client}</h3>
		<hr class="mt-2 p-2 opacity-20" />
		{@render children()}
	</div>
</div>
