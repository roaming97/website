<script lang="ts">
	import Email from '../Email.svelte';
	import Button from '../Button.svelte';
</script>

<div class="mx-auto flex flex-col justify-center gap-4 pt-24 lg:w-3/4">
	<div class="flex flex-col items-center justify-between gap-2 lg:items-start">
		<h1
			class="w-max bg-brand-c p-3 text-center text-5xl tracking-tight text-black drop-shadow-glow xl:text-7xl"
		>
			Hello!
		</h1>
		<p class="w-full px-4 md:p-0 xl:text-xl">
			Welcome to my website, and just to be different, allow me to show before telling!
		</p>
	</div>
	<div class="flex w-full flex-col items-center gap-3 px-4 md:w-auto md:flex-row md:p-0">
		<Button href="/portfolio">
			<img
				src="/img/ico/briefcase.svg"
				class="invert dark:invert-0"
				width="24"
				height="24"
				alt="briefcase icon"
			/>
			<span>Portfolio</span>
		</Button>
		<Button target="_blank" href="https://github.com/roaming97/">
			<img
				src="/img/ico/github.svg"
				class="dark:invert"
				width="24"
				height="24"
				alt="github icon"
			/>
			<span>GitHub</span>
		</Button>
		<Email />
	</div>
</div>
