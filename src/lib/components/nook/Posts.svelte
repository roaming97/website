<script lang="ts">
	import type { PageServerData } from './../../../../.svelte-kit/types/src/routes/alcove/$types.d.ts';
	import Post from '../Post.svelte';
	import Button from '../Button.svelte';

	export let data: PageServerData;
</script>

<div class="flex flex-col w-full">
	<h1 class="text-4xl lg:text-6xl font-blond text-center xl:text-left">
		<span>Newest posts</span>
	</h1>
	<div class="py-2 grid grid-cols-1 lg:grid-cols-3 items-stretch justify-between gap-4">
		{#await data.posts}
			<Post />
			<Post />
			<Post />
		{:then posts}
			{#each posts as data}
				<Post {data} char_limit={23} />
			{/each}
		{:catch err}
			<p class="text-red-500">Error fetching</p>
			<p>{err}</p>
		{/await}
	</div>
	<Button href="/blog">
		<span class="text-xl">Go to blog</span>
	</Button>
</div>
