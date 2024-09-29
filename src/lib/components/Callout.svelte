<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		level
	}: Partial<{ children: Snippet }> & { level: 'info' | 'warning' | 'critical' } = $props();

	let title = $derived.by(() => {
		switch (level) {
			case 'info':
				return 'ℹ️ NOTE';
			case 'warning':
				return '⚠️ WARNING';
			case 'critical':
				return '❌ ERROR';
		}
	});

	let bg = $derived.by(() => {
		switch (level) {
			case 'info':
				return 'bg-sky-500/20';
			case 'warning':
				return 'bg-amber-500/20';
			case 'critical':
				return 'bg-red-500/20';
		}
	});

	let border = $derived.by(() => {
		switch (level) {
			case 'info':
				return 'border-sky-400';
			case 'warning':
				return 'border-amber-400';
			case 'critical':
				return 'border-red-400';
		}
	});
</script>

<p class="p-2 my-2 rounded-xl {bg} border {border}">
	<span class="font-black">{title}:</span>
	{#if children}
		{@render children()}
	{/if}
</p>
