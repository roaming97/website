<script lang="ts">
	import type { PageServerData } from './../../../../.svelte-kit/types/src/routes/alcove/$types.d.ts';
	import Post from '../Post.svelte';

	export let data: PageServerData;
</script>

<div class="flex flex-col w-full">
	<h1 class="text-4xl lg:text-6xl font-blond text-center xl:text-left">
		<span>Newest posts</span>
	</h1>
	<div class="py-2 grid grid-cols-1 lg:grid-cols-3 items-stretch justify-center gap-4">
		{#await data.posts}
			<Post />
			<Post />
			<Post />
		{:then posts}
			{#each posts as data}
				<Post {data} />
			{/each}
		{:catch err}
			<p class="text-red-500">Error fetching</p>
			<p>{err}</p>
		{/await}
	</div>
	<a href="/blog" class="font-semibold text-lg tracking-wide text-right lg:ml-auto"
		>Read more <span class="font-medium font-mono">&rightarrow;</span></a
	>
</div>
