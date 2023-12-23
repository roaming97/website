<script lang="ts">
	import type { PageServerData } from './$types';
	import Toy from '$lib/components/Toy.svelte';
	import { Canvas } from '@threlte/core';
	import ImageTile from '$lib/components/ImageTile.svelte';
	import { r97_age } from '$lib/utils';
	import Stat from '$lib/components/Stat.svelte';

	export let data: PageServerData;
</script>

<div class="banner">
	<img
		src="/img/logo23_dark.png"
		alt="logo"
		class="hidden dark:block aspect-square h-1/2 lg:h-full"
	/>
	<img src="/img/logo23_light.png" alt="logo" class="dark:hidden aspect-square h-1/2 lg:h-full" />
	<div class="p-2 xl:p-8">
		<h1 class="text-2xl sm:text-4xl lg:text-9xl text-right font-thin tracking-tighter">
			roaming<span class="font-normal">97</span>
		</h1>
		<h2 class="text-xs sm:text-sm lg:text-2xl text-right font-medium">Digital creative.</h2>
	</div>
</div>

<div class="flex flex-col items-center gap-48 p-4 xl:p-16">
	<div class="flex flex-col xl:flex-row items-center justify-between">
		<div class="flex flex-col xl:w-1/2 items-center gap-4 xl:items-start justify-between">
			<h1
				class="text-5xl xl:text-8xl font-medium text-center bg-brand-c w-max text-black p-3"
			>
				Hey!
			</h1>
			<p class="p-intro">
				Welcome to this space! This website is where I host past and will be hosting future
				content made by me as well as work I have done professionally for clients. Think of
				this place as a portfolio-showcase site hybrid. I still want to keep it from being
				too formal so I am trying to balance both ends of it.
			</p>
			<p class="p-intro">
				<span class="hidden xl:inline-flex"
					>Feel free to play around with the toy next to this paragraph! Use your keyboard
					and mouse to interact with it. If it doesn't load, your browser might not have
					web canvas support enabled or available.</span
				>
				<span class="xl:hidden"
					>Feel free to play around with the toy next to this paragr- wait, you don't see
					any 3D toy? Oh, I disabled it on mobile so your device doesn't burst into
					flames.</span
				>
			</p>
			<p class="p-intro">
				A simple blog is hosted here too, although that one is more of a personal corner
				where I just ramble about whatever topic interests me at the moment or review any
				piece of media that I've liked.
			</p>
		</div>
		<div
			class="hidden xl:flex items-center justify-center w-[640px] aspect-[4/3] border border-black dark:border-white"
		>
			<Canvas size={{ width: 640, height: 480 }}>
				<Toy />
			</Canvas>
		</div>
	</div>
	<div class="w-full flex flex-col-reverse xl:flex-row xl:justify-around items-center">
		<div class="flex flex-col items-center w-screen lg:w-auto">
			<div class="grid grid-cols-2 items-center gap-4 lg:gap-12 lg:flex">
				{#await data.streamed.latest}
					<ImageTile />
					<ImageTile />
					<ImageTile />
					<ImageTile />
				{:then value}
					{#each value as b64}
						<ImageTile src={b64} />
					{/each}
				{/await}
			</div>
			<div class="flex flex-row-reverse items-center w-full pt-10 pb-2 pr-2 lg:pr-0">
				<a href="/viewer" class="font-semibold text-lg tracking-wide text-right"
					>View more <span class="font-medium font-mono">&dash;&gt;</span></a
				>
			</div>
			<hr class="w-full" />
		</div>
		<div class="flex flex-col items-center gap-12">
			<h1 class="text-5xl lg:text-7xl mb-4 font-blond text-center xl:text-right">
				<div class="hidden lg:block">
					<span class="block">Latest</span>
					<span class="block leading-10">artwork</span>
				</div>
				<span class="block lg:hidden">Latest artwork</span>
			</h1>
			<img
				src="/img/latestwork_deco.png"
				alt="decoration"
				class="hidden w-[240px] h-auto invert dark:invert-0 xl:inline-block"
			/>
		</div>
	</div>
	<div class="flex flex-col items-center gap-12 w-full xl:w-2/3">
		<div class="lg:mr-auto">
			<Stat amount={r97_age()} title="years" subtitle="since 2016" />
		</div>
		<Stat
			amount={data.streamed.amount}
			suffix="+"
			title="media pieces"
			subtitle="Images + videos"
		/>
		<div class="lg:ml-auto">
			<Stat
				amount={20}
				suffix="+"
				title="clients"
				subtitle="Including:#04 Collective#Xynth Audio#Loopable"
			/>
		</div>
		<a href="/about" class="font-semibold text-lg tracking-wide text-right lg:ml-auto"
			>Know more <span class="font-medium font-mono">&dash;&gt;</span></a
		>
	</div>
</div>

<style lang="postcss">
	.banner {
		background-image: linear-gradient(
			120deg,
			rgba(154, 112, 255, 0.2) 23.59%,
			rgba(119, 133, 255, 0.1) 76.94%
		);
		@apply w-full h-[240px] lg:h-[480px] xl:h-[640px] flex items-end justify-normal md:justify-around;
	}
	.p-intro {
		@apply xl:text-lg font-blond;
	}
</style>
