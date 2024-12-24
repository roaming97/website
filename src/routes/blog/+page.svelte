<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import Paginator from '$lib/components/Paginator.svelte';
	import type { PageData } from './$types';
	import type { BlogPost } from '$lib/types';

	let { data }: { data: PageData } = $props();

	let posts = $derived(
		data.posts.map((p) => {
			return {
				...p,
				path: `/blog/${p.path}`
			} satisfies BlogPost;
		})
	);
	let pagination = $derived(data.pagination);
</script>

<svelte:head>
	<title>Blog - roaming97</title>
</svelte:head>
<a href="/nook" class="hover:text-brand-c">&leftarrow; Back to nook</a>
<ul class="flex flex-col items-center lg:mx-auto lg:w-[70vw]">
	<Paginator {pagination} />
	<p>
		Showing posts {pagination.offset}-{Math.min(
			pagination.offset + pagination.per_page,
			pagination.total_items
		)} out of {pagination.total_items}
	</p>
	<div class="flex w-full flex-col items-stretch justify-center">
		{#each posts as post}
			<Post data={post} />
		{/each}
	</div>
</ul>
