<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		href?: string;
		target?: string;
	}

	let { children, href = '/#', target = '_blank' }: Props = $props();
</script>

<a
	class="flex w-full select-none items-center justify-center gap-4
		rounded-lg bg-brand-a/60 p-3 text-center text-sm text-black
		shadow-black/10 drop-shadow-glow transition-all duration-200 ease-out
		hover:scale-110 hover:bg-brand-a/80 dark:text-white dark:shadow-white/10 lg:max-w-40 xl:max-w-48"
	{target}
	{href}
	aria-label="link to {href.split('/')[1]}"
>
	{@render children()}
</a>
