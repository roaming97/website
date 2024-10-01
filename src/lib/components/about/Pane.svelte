<script lang="ts">
	import Tooltip from '../Tooltip.svelte';

	let { title, icons, className }: { title: string; icons: string[][]; className: string } =
		$props();
</script>

<div
	class="flex flex-col gap-4 rounded-xl p-4 border-2 bg-gradient-to-tl dark:bg-gradient-to-br from-darkest/10 {className}"
>
	<h3 class="font-normal {className}">{title}</h3>
	<div class="grid grid-cols-3 lg:grid-cols-4 gap-4 justify-evenly">
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
