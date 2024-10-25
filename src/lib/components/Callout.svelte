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

<div class="flex flex-col p-2 my-2 rounded-xl {bg} border {border} font-primary">
	<span class="font-black text-lg">{title}</span>
	<hr class="my-2 opacity-20" />
	<div>
		{@render children()}
	</div>
</div>
