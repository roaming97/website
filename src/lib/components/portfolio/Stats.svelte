<script lang="ts">
	import { r97_age } from '$lib/utils';
	import Stat from '../Stat.svelte';

	interface Props {
		amount: number;
		repos: number;
	}

	let { amount, repos }: Props = $props();
</script>

<div
	class="mx-auto my-4 grid w-full grid-cols-1 items-center justify-center
		gap-8 rounded-xl border-2 border-dark bg-dark/10 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
>
	<Stat amount={r97_age()} title="years" />
	<Stat {amount} suffix="+" title="multimedia pieces" delay={200} />
	<Stat amount={repos} title="repositories" delay={400} />
	<Stat amount={25} suffix="+" title="clients" delay={600} />
</div>
