<script lang="ts">
	import { file_stem } from '$lib/utils';

	export let border = '#555555';
	export let background = '#444444';
	export let name: string;
	export let src: string;
	export let description: string;
	export let tools: string[] = [];
	export let href: string | null = null;
	export let blog: string | null = null;
	export let github: string | null = null;
</script>

<div class="rounded-xl p-4 w-full border-2" style="border-color: {border}" style:background>
	<div class="flex flex-col justify-between h-full gap-4">
		<div class="flex flex-col gap-2">
			<img class="tile" width="64" height="64" {src} alt="{name} icon" />
			<h2 class="font-mono tracking-normal">{name}</h2>
			<p class="mb-4">{description}</p>
			<slot />
			<hr class="opacity-20 my-2" />
			{#if tools.length > 0}
				<h3 class="text-base font-mono font-semibold leading-3">Tools used</h3>
				<div class="flex flex-row items-center gap-2">
					{#each tools as src}
						<img
							class="aspect-square"
							width="32"
							height="32"
							{src}
							alt="{file_stem(src)} icon"
						/>
					{/each}
				</div>
			{/if}
		</div>
		<hr class="invisible" />
		<div class="flex items-center flex-row-reverse gap-2">
			{#if href}
				<a {href} class="tile clickable" aria-label="Link that takes to {href}">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M15 3H21V9"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10 14L21 3"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			{/if}
			{#if blog}
				<a href={blog} class="tile clickable" aria-label="Link that takes to {blog}">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14.5 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7.5L14.5 2Z"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M14 2V8H20"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M16 13H8"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M16 17H8"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10 9H8"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			{/if}
			{#if github}
				<a
					href={github}
					class="tile clickable"
					aria-label="GitHub link that takes to {github}"
				>
					<img src="/img/ico/github.svg" width="24" height="24" alt="github icon" />
				</a>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	.tile {
		@apply p-2 rounded-lg bg-white/40 shadow-lg;
	}
	.clickable {
		@apply transition-all duration-200 ease-out hover:scale-[1.2] hover:bg-white/60;
	}
</style>
