<script lang="ts">
	import { quintIn, quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	function copy() {
		navigator.clipboard.writeText('contact@roaming97.com');
		copied = true;

		setTimeout(() => (copied = false), 3000);
	}

	let copied = $state(false);
</script>

<div class="relative flex flex-col lg:flex-row items-center gap-3">
	<button
		class="flex items-center gap-2 w-max rounded-lg p-2 px-4 bg-white dark:bg-darkest transition-colors hover:bg-gray-200 hover:dark:bg-darker cursor-pointer border border-zinc-500 dark:border-dark"
		onclick={copy}
	>
		<span class="font-mono">contact@roaming97.com</span>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
			><path
				class="stroke-black dark:stroke-white"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M20 9h-9a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z"
			/><path
				class="stroke-black dark:stroke-white"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
			/></svg
		>
	</button>
	{#if copied}
		<span
			in:fly={{ y: 10, easing: quintOut, duration: 300 }}
			out:fly={{ y: 10, easing: quintIn, duration: 300 }}
			class="w-max text-xs rounded-lg py-2 px-4 bg-green-500 text-white"
		>
			Copied!
		</span>
	{/if}
</div>
