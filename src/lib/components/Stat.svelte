<script lang="ts">
	export let amount: number;
	export let title: string;
	export let subtitle = '';
	export let suffix = '';
</script>

<div class="flex flex-col items-center lg:flex-row">
	<h1 class="text-7xl tracking-normal lg:text-9xl">{amount}{suffix}</h1>
	<div class="flex flex-col">
		<h2 class="text-4xl font-normal">{title}</h2>
		<div class="subtitle">
			{#each subtitle.split('#') as line}
				<p class="font-blond leading-tight text-center lg:text-left">{line}</p>
			{/each}
		</div>
	</div>
</div>
