<script lang="ts">
	import type { BlogPost } from '$lib/types';
	import { relative_time } from '$lib/utils';

	let { data, char_limit = 42 }: Partial<{ data: BlogPost; char_limit: number }> = $props();
	let post: BlogPost | null = $state(null);

	interface TagColor {
		name: string;
		fill: string;
		text: string;
	}

	const tag_colors: TagColor[] = [
		{ name: 'legacy', fill: '#6a6a6a', text: '#ddd' },
		{ name: 'spanish', fill: '#84d620', text: '#000' },
		{ name: 'first post', fill: '#f9d242', text: '#000' },
		{ name: 'development', fill: '#a32916', text: '#fff' },
		{
			name: 'art',
			fill: 'linear-gradient(160deg, rgba(131,58,180,1) 5%, rgba(29,78,253,1) 62%, rgba(69,252,247,1) 100%)',
			text: '#000'
		},
		{ name: 'personal', fill: '#312a6b', text: '#fff' },
		{ name: 'review', fill: '#37c4cc', text: '#151b1c' },
		{ name: 'update', fill: '#8216e9', text: '#fff' }
	];

	function tag_fill_color(tag: string) {
		return tag_colors.find((t) => t.name === tag)?.fill;
	}

	function tag_text_color(tag: string) {
		return tag_colors.find((t) => t.name === tag)?.text;
	}

	$effect(() => {
		if (data) {
			post = data;
		}
	});

	function title_trim(title: string) {
		if (title.length <= char_limit) return title;
		return `${title.slice(0, char_limit)}...`;
	}
</script>

{#snippet tag_snippet(tag: string)}
	<p
		class="p-1 px-3 rounded-2xl w-max text-xs"
		style="background: {tag_fill_color(tag)}; color: {tag_text_color(tag)}"
	>
		{tag}
	</p>
{/snippet}

{#if post}
	<a href={post.path} class="p-4 group">
		<li class="post">
			<h2>{title_trim(post.title)}</h2>
			<div class="flex flex-col">
				{#if post.tags}
					<div class="flex items-center gap-2 py-1">
						{#each post.tags as tag}
							{@render tag_snippet(tag)}
						{/each}
					</div>
				{/if}
				{#if post.date_modified}
					<p class="date">
						{relative_time(post.date_created)}, updated {relative_time(
							post.date_modified
						)}
					</p>
				{:else}
					<p class="date">
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
	.post :global {
		@apply p-4 rounded-xl bg-white group-hover:bg-gray-100 dark:bg-darkest 
	  dark:group-hover:bg-darker w-full cursor-pointer transition-colors duration-200 
		ease-in-out z-0 drop-shadow-glow flex flex-col justify-center h-full;
	}
	h2 {
		@apply lg:text-3xl mb-2 font-normal tracking-tight font-mono 
		group-hover:text-brand-c transition-colors duration-200 ease-in-out;
	}
	.date :global {
		@apply opacity-50 text-sm text-black dark:text-white;
	}
</style>
