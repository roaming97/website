<script lang="ts">
	import Email from './Email.svelte';
	import Button from '../Button.svelte';
</script>

<div class="flex flex-col gap-4 mx-auto justify-center lg:w-3/4 pt-24">
	<div class="flex flex-col items-center gap-2 lg:items-start justify-between">
		<h1
			class="text-5xl xl:text-7xl tracking-tight text-center bg-brand-c w-max text-black p-3 drop-shadow-glow"
		>
			Hello!
		</h1>
		<p class="w-full xl:text-xl">
			Welcome to my website, and just to be different, allow me to show before telling!
		</p>
	</div>
	<div class="w-full lg:w-auto flex flex-col lg:flex-row items-center gap-3">
		<Button href="/portfolio">
			<img src="/img/ico/briefcase.svg" width="24" height="24" alt="briefcase icon" />
			<span>Portfolio</span>
		</Button>
		<Button target="_blank" href="https://github.com/roaming97/">
			<img
				src="/img/ico/github.svg"
				class="invert"
				width="24"
				height="24"
				alt="github icon"
			/>
			<span>GitHub</span>
		</Button>
		<Email />
	</div>
</div>
