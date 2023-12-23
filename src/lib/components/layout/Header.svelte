<script lang="ts">
	import MenuToggle from './MenuToggle.svelte';
	import Menu from './Menu.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
</script>

<Menu />
<div class="fixed flex items-center justify-between h-16 w-screen bg-black p-8 z-20">
	<MenuToggle />
	<ThemeSwitch />
</div>
