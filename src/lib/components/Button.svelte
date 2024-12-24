<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		href = '/#',
		target = '_self'
	}: { children: Snippet } & Partial<{ href: string; target: string }> = $props();
</script>

<a
	class="select-none; flex w-full items-center justify-center gap-4
		rounded-lg bg-brand-a/60 p-2 text-center text-sm text-black
		shadow-black/10 drop-shadow-glow transition-all duration-200 ease-out
		hover:scale-110 hover:bg-brand-a/80 dark:text-white dark:shadow-white/10 lg:w-40"
	{target}
	{href}
	aria-label="link to {href.split('/')[1]}"
>
	{@render children()}
</a>
