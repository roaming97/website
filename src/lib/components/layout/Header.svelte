<script lang="ts">
	import MenuToggle from './MenuToggle.svelte';
	import Menu from './Menu.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';

	let open = $state(false);
</script>

<div
	class="fixed z-50 flex h-16 w-screen items-center justify-between bg-white/50 p-8 backdrop-blur-lg dark:bg-black/50"
>
	<MenuToggle {open} onclick={() => (open = !open)} />
	<ThemeSwitch />
</div>
<Menu {open} onclick={() => (open = false)} />
