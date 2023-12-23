<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.postcss';
</script>

<Header />
<div class="pt-16">
	<slot />
</div>
{#if !$page.error}
	<Footer />
{/if}
