<script lang="ts">
	export let level: 'info' | 'warning' | 'critical';

	$: title = () => {
		switch (level) {
			case 'info':
				return 'ℹ️ NOTE';
			case 'warning':
				return '⚠️ WARNING';
			case 'critical':
				return '❌ ERROR';
		}
	};

	$: bg = () => {
		switch (level) {
			case 'info':
				return 'bg-sky-500/20';
			case 'warning':
				return 'bg-amber-500/20';
			case 'critical':
				return 'bg-red-500/20';
		}
	};

	$: border = () => {
		switch (level) {
			case 'info':
				return 'border-sky-400';
			case 'warning':
				return 'border-amber-400';
			case 'critical':
				return 'border-red-400';
		}
	};
</script>

<p class="p-2 my-2 rounded-xl {bg()} border {border()}">
	<span class="font-black">{title()}:</span>
	<slot>This is a callout!</slot>
</p>
