<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, level }: { children: Snippet; level: 'info' | 'warning' | 'critical' } =
		$props();

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

<div class="my-2 flex flex-col rounded-xl p-2 {bg} border {border} font-primary">
	<span class="text-lg font-black">{title}</span>
	<hr class="my-2 opacity-20" />
	<div>
		{@render children()}
	</div>
</div>
