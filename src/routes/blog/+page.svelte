<script lang="ts">
	import { relative_time } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;

	$: posts = data.posts;

	const BLOG_TITLE_CHARS = 48;

	function title_trim(title: string) {
		if (title.length <= BLOG_TITLE_CHARS) return title;
		return `${title.slice(0, BLOG_TITLE_CHARS)}...`;
	}
</script>

<div class="flex flex-col px-4 py-8 lg:my-8 lg:p-0">
	<ul class="flex flex-col items-center lg:w-[70vw] lg:mx-auto">
		<div class="flex flex-col gap-3 text-left w-full px-4">
			<h1 class="lg:text-6xl">Blog</h1>
			<p>
				Here's where I write about any updates, projects I am working on, or thoughts that
				cross my mind.
			</p>
			<p>
				Gold outlined articles are legacy posts. These have been partially rewritten to be
				clearer as well as to fix grammatical and syntactic errors from the originals. Keep
				in mind <b>legacy posts don't represent my views or opinions today</b>, they have
				been included only for archival purposes.
			</p>
			<p>
				Blue outlined articles are reviews, these can tackle a piece of music, cinema,
				literature, or anything really. <b
					>My reviews only reflect my pesonal opinion, but I still try to include some
					objectivity to them</b
				>.
			</p>
		</div>
		{#each posts as post}
			<a href="/blog/{post.path}" class="p-4 group w-full">
				<div
					class="p-4 rounded-lg bg-white group-hover:bg-gray-100 dark:bg-darkest dark:group-hover:bg-darker w-full outline outline-black dark:outline-white cursor-pointer transition-colors duration-200 ease-in-out z-0"
					class:legacy={post.legacy}
					class:review={post.rating?.toString()}
				>
					<li class="flex flex-col w-full">
						<h2
							class="lg:text-4xl font-mono group-hover:text-brand-c transition-colors duration-200 ease-in-out"
						>
							{title_trim(post.title)}
						</h2>
						<p class="lg:text-lg opacity-50 text-black dark:text-white">
							{relative_time(post.date_created)}{#if post.date_modified}, updated {relative_time(
									post.date_modified
								)}
							{/if}
						</p>
					</li>
				</div>
			</a>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.legacy {
		@apply outline-yellow-500 dark:outline-yellow-300;
	}
	.review {
		@apply outline-cyan-600 dark:outline-cyan-400;
	}
</style>
