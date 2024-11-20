<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		user: string;
		role: string;
		period: string;
		location: string;
	}

	let { children, user, role, period, location = 'Remote' }: Props = $props();
</script>

<div class="mb-4 rounded-lg border-2 border-gray-500 bg-white p-4 dark:border-dark dark:bg-darkest">
	<div class="flex flex-col justify-between md:flex-row">
		<div>
			<h2 class="leading-none">{role}</h2>
			<h3 class="text-base font-semibold opacity-75">{user}</h3>
		</div>
		<div class="md:text-right">
			<p class="opacity-75">{location}</p>
			<p class="text-xs opacity-40">{period}</p>
		</div>
	</div>
	<hr class="mt-2 p-2 opacity-20" />
	{@render children()}
</div>
