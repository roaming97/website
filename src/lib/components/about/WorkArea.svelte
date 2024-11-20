<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		area: string;
		period: string;
		color: 'teal' | 'indigo';
	}
	let { children, area, period, color }: Props = $props();

	const container_classes = $derived(
		color === 'teal' ? 'border-teal-500 bg-teal-500/10' : 'border-indigo-500 bg-indigo-500/10'
	);
	const h2_class = $derived(color === 'teal' ? 'text-teal-500' : 'text-indigo-500');
	const p_class = $derived(color === 'teal' ? 'text-teal-400' : 'text-indigo-400');
</script>

<div class="flex flex-col gap-2 rounded-xl border p-4 {container_classes} border-">
	<div class="flex flex-col justify-between lg:flex-row lg:items-center">
		<h2 class={h2_class}>{area}</h2>
		<p class={p_class}>{period}</p>
	</div>
	{@render children()}
</div>
