<script lang="ts">
	import { parse_date } from '$lib/utils';
	export let date: Date;
</script>

<article class="py-2">
	<h2 class="text-xl">{parse_date(date)}</h2>
	<slot>
		<p>Add text to the update here.</p></slot
	>
</article>
