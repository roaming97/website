<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import Paginator from '$lib/components/Paginator.svelte';
	import type { PageData } from './$types';
	import type { BlogPost } from '$lib/types';

	export let data: PageData;

	$: posts = data.posts.map((p) => {
		return {
			...p,
			path: `/blog/${p.path}`
		} satisfies BlogPost;
	});
	$: pagination = data.pagination;
</script>

<svelte:head>
	<title>Blog - roaming97</title>
</svelte:head>
<ul class="flex flex-col items-center lg:w-[70vw] lg:mx-auto">
	<Paginator {pagination} />
	<p>
		Showing posts {pagination.offset}-{Math.min(
			pagination.offset + pagination.per_page,
			pagination.total_items
		)} out of {pagination.total_items}
	</p>
	<div class="flex flex-col items-stretch w-full justify-center">
		{#each posts as post}
			<Post data={post} />
		{/each}
	</div>
</ul>
