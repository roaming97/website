<script lang="ts">
	import Button from '../ui/Button.svelte';
</script>

<div class="relative flex w-full flex-col">
	<h2
		class="absolute right-4 top-4 select-none text-4xl font-light tracking-tight opacity-30 lg:text-8xl"
	>
		Animation
	</h2>
	<div class="dotted flex flex-col items-center py-10">
		<div class="my-24 flex w-full flex-col items-center justify-center gap-8 lg:flex-row">
			<lite-youtube videoid="_R3Ml1tboYA"></lite-youtube>
			<lite-youtube videoid="MjEqbqaJeEk"></lite-youtube>
		</div>
		<Button href="https://youtube.com/@roaming97">
			<div class="flex items-center gap-3">
				<svg
					viewBox="0 0 256 180"
					width="32"
					height="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="fill-black dark:fill-white"
						fill-rule="evenodd"
						d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134zM102.421 128.06l66.328-38.418-66.328-38.418z"
					/>
				</svg>
				<span class="text-xl">View more</span>
			</div>
		</Button>
	</div>
</div>

<style lang="postcss">
	lite-youtube {
		@apply aspect-video md:w-1/3;
	}
</style>
