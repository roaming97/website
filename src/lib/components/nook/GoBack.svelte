<script lang="ts">
	let { name = 'nook' }: { name?: string } = $props();
	let href = $derived(`/${name}`);
</script>

<a {href} class="w-max hover:text-brand-c">&leftarrow; Back to {name}</a>
