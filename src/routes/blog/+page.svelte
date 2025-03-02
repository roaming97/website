<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import Paginator from '$lib/components/Paginator.svelte';
	import type { PageData } from './$types';
	import type { BlogPost } from '$lib/types';
	import GoBack from '$lib/components/nook/GoBack.svelte';

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

<!-- Reset the title when exiting an article -->
<svelte:head>
	<title>Blog - roaming97</title>
</svelte:head>

<GoBack />
<div
	class="my-4 flex flex-col gap-4 text-balance border-l-4 border-indigo-400 bg-indigo-400/10 py-4 pl-3"
>
	<p>
		When I was creating the first version of my website, I always had two main goals in mind
		with it: host my videos, and have my own <b class="text-indigo-700 dark:text-indigo-400"
			>blog</b
		> where I could unwrap my mind (guts, in hindsight) out without the constraints enforced by social
		media, definitely a juvenile thought at the time. However, I still believe in owning a space
		to share something valuable to your users, which can potentially become your readers in the future.
	</p>
	<p>
		Therefore this page is where my personal writing outlet resides, it also functions as a
		channel to recount my thoughts and experiences in different topics.
	</p>
</div>
<ul class="flex flex-col items-center lg:mx-auto">
	<Paginator {pagination} />
	<p>
		Showing posts {pagination.offset}-{Math.min(
			pagination.offset + pagination.per_page,
			pagination.total_items
		)} out of {pagination.total_items}
	</p>
	<div class="flex w-full flex-col">
		{#each posts as post}
			<Post data={post} />
		{/each}
	</div>
</ul>
