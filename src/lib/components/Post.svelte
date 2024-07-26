<script lang="ts">
	import type { BlogPost } from '$lib/types';
	import { relative_time } from '$lib/utils';
	import Tag from './Tag.svelte';

	export let data: BlogPost | null = null;
	export let char_limit = 42;
	let post: BlogPost;

	$: if (data) {
		post = data;
	}

	function title_trim(title: string) {
		if (title.length <= char_limit) return title;
		return `${title.slice(0, char_limit)}...`;
	}
</script>

{#if post}
	<a href={post.path} class="p-4 group">
		<li>
			<h2>{title_trim(post.title)}</h2>
			<div class="flex flex-col">
				{#if post.tags}
					<div class="flex items-center gap-2 py-1">
						{#each post.tags as tag}
							<Tag {tag} />
						{/each}
					</div>
				{/if}
				{#if post.date_modified}
					<p>
						{relative_time(post.date_created)}, updated {relative_time(
							post.date_modified
						)}
					</p>
				{:else}
					<p>
						{relative_time(post.date_created)}
					</p>
				{/if}
			</div>
		</li>
	</a>
{:else}
	<li>
		<h2>Loading</h2>
		<p>Fetching data</p>
	</li>
{/if}

<style lang="postcss">
	li {
		@apply p-4 rounded-xl bg-white group-hover:bg-gray-100 dark:bg-darkest 
	  dark:group-hover:bg-darker w-full cursor-pointer transition-colors duration-200 
		ease-in-out z-0 drop-shadow-glow flex flex-col justify-center h-full;
	}
	h2 {
		@apply lg:text-3xl mb-2 font-normal tracking-tight font-mono 
		group-hover:text-brand-c transition-colors duration-200 ease-in-out;
	}
	p {
		@apply text-sm opacity-50 text-black dark:text-white;
	}
</style>
