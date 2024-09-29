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
<div class="relative flex items-center h-6 w-16 bg-darker rounded-xl drop-shadow-glow">
	<label for="theme-toggle" class="inline-block absolute">
		<div
			class="flex items-center justify-center bg-white dark:bg-dark dark:translate-x-full cursor-pointer rounded-full h-8 w-8 transition-all duration-200 ease-in-out"
		>
			<Moon class="hidden dark:inline-block" />
			<Sun class="inline-block dark:hidden" />
		</div>
	</label>
</div>
