<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		href = '/#',
		target = '_self'
	}: { children: Snippet } & Partial<{ href: string; target: string }> = $props();
</script>

<a
	class="flex w-full lg:w-40 bg-brand-a/60 text-sm items-center
		justify-center gap-4 p-2 shadow-black/10 text-black dark:text-white
		dark:shadow-white/10 rounded-lg transition-all hover:scale-110 hover:bg-brand-a/80
		ease-out duration-200 text-center drop-shadow-glow select-none;"
	{target}
	{href}
	aria-label="link to {href.split('/')[1]}"
>
	{@render children()}
</a>
