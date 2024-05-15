<script lang="ts">
	import MenuToggle from './MenuToggle.svelte';
	import Menu from './Menu.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
</script>

<div
	class="fixed flex items-center justify-between h-16 w-screen bg-white/50 dark:bg-black/50 backdrop-blur-lg p-8 z-50"
>
	<MenuToggle />
	<ThemeSwitch />
</div>
<Menu />
