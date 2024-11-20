<script lang="ts">
	import Sun from '../../icons/Sun.svelte';
	import Moon from '../../icons/Moon.svelte';
	import type { Theme } from '$lib/types';
	import { find_cookie } from '$lib/utils';
	import { theme } from '$lib/stores';

	function switch_mode() {
		$theme = $theme === 'dark' ? 'light' : 'dark';
		document.cookie = `theme=${$theme};max-age=1735707600;sameSite=Strict`;
		$theme === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	$effect.pre(() => {
		$theme = find_cookie('theme') as Theme | 'light';
		$theme === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	});
</script>

<input
	checked={$theme === 'dark'}
	onclick={switch_mode}
	type="checkbox"
	id="theme-toggle"
	class="invisible h-0 w-0"
/>
<div class="relative flex h-6 w-16 items-center rounded-xl bg-darker drop-shadow-glow">
	<label for="theme-toggle" class="absolute inline-block">
		<div
			class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-200 ease-in-out dark:translate-x-full dark:bg-dark"
		>
			<Moon class="hidden dark:inline-block" />
			<Sun class="inline-block dark:hidden" />
		</div>
	</label>
</div>
