<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		level
	}: { children: Snippet; level: 'info' | 'warning' | 'critical' | 'success' } = $props();

	let title = $derived.by(() => {
		switch (level) {
			case 'info':
				return 'ℹ️ Note';
			case 'warning':
				return '⚠️ Warning';
			case 'critical':
				return '❌ Error';
			case 'success':
				return '✅ Success';
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
			case 'success':
				return 'bg-green-500/20';
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
			case 'success':
				return 'border-green-400';
		}
	});

	let text = $derived.by(() => {
		switch (level) {
			case 'info':
				return 'text-sky-600 dark:text-sky-300';
			case 'warning':
				return 'text-amber-600 dark:text-amber-300';
			case 'critical':
				return 'text-red-600 dark:text-red-300';
			case 'success':
				return 'text-green-600 dark:text-green-300';
		}
	});
</script>

<div class="my-2 flex flex-col rounded-xl p-4 {bg} border {border} font-primary">
	<span class="text-lg font-black {text}">{title}</span>
	<hr class="my-2 opacity-20" />
	<div>
		{@render children()}
	</div>
</div>
