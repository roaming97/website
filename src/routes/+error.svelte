<script lang="ts">
	import { page } from '$app/state';
</script>

{#snippet svg()}
	<svg class="w-screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 37.4311 1440 282.6">
		<linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
			<stop offset="30%" stop-color="#F14545" />
			<stop offset="100%" stop-color="#F14545" stop-opacity="0" />
		</linearGradient>
		<path
			d="M0 96C74.052 100.654 94.565 212.123 117.902 213.3 139.818 214.406 155.746 183.398 183.746 146.098 212.346 108.398 226 75 254 80 282.4 85 311 139 339 144 367.1 149 395 107 424 74.7 451.8 43 480 21 508 53.3 536.5 85 565 171 593 181.3 621.2 192 649 128 678 122.7 705.9 117 734 171 762 202.7 790.6 235 819 245 847 245.3 875.3 245 904 235 932 208 960 181 988 139 1016 133.3 1044.7 128 1073 160 1101 192 1129.4 224 1158 256 1186 245.3 1214.1 235 1238.93 190.993 1271 165.3 1314.3 130.606 1336 159 1368 131 1397 112 1412 102 1440 96L1440 320 0 320 0 96Z"
			fill="url(#grad1)"
		/>
	</svg>
{/snippet}

<div class="flex flex-col items-center p-8 pb-0">
	<h1 class="text-9xl font-black text-error lg:text-[200px]">
		{page.status}
	</h1>
	<h2 class="text-4xl font-normal text-error">{page.error?.message}</h2>
	<p class="mt-8">
		You might want to go <a href="/" class="text-error underline">back</a>.
	</p>
	<div class="scroll mt-8 flex items-center">
		{@render svg()}
		{@render svg()}
		{@render svg()}
		{@render svg()}
	</div>
</div>

<style lang="postcss">
	.scroll {
		@apply relative left-0 overflow-hidden whitespace-nowrap;
		animation: move 30s linear infinite;
	}

	@keyframes move {
		from {
			translate: 0;
		}
		to {
			translate: -25% 0;
		}
	}
</style>
