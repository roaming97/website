<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { slide, fade } from 'svelte/transition';

	let value = 1;
	let editing = false;

	let done: HTMLButtonElement;

	const min = 1;
	const max = 99999;
	const transition_duration = 600;

	const toggle = () => (editing = !editing);

	function handle_key(e: KeyboardEvent) {
		const key = e.key;
		if (key === 'Enter') {
			done.click();
		}
	}

	function handle_input(e: Event) {
		value = parseFloat((e.target as HTMLInputElement).value.replace(/[^0-9.]/g, '')) || 0;
		value = Math.min(Math.max(value, min), max);
	}
</script>

<div class="h-[50vh] p-8 flex flex-col items-center justify-center">
	{#if editing}
		<div
			in:slide={{ axis: 'y', easing: quintOut, duration: transition_duration }}
			class="flex justify-center items-center"
		>
			<span class="big-text font-black">$</span>
			<input
				type="number"
				{min}
				{max}
				bind:value
				on:keydown={handle_key}
				on:input={handle_input}
				placeholder="0"
				name="money-amount"
				class="textbox"
			/>
			<span class="big-text font-black opacity-30">.00</span>
		</div>
		<button
			bind:this={done}
			in:fade={{ delay: 200, easing: quintOut, duration: transition_duration }}
			class="p-4 border-brand-a border-2 rounded-xl text-center font-primary text-xl md:text-2xl lg:text-4xl m-4"
			on:click={toggle}>Done</button
		>
		<span class="opacity-40"><b>Important: </b>the amount is in USD.</span>
	{:else}
		<span
			role="textbox"
			tabindex="-1"
			on:keydown={() => {}}
			on:click={toggle}
			class="big-text text-center w-full cursor-pointer font-black"
			>{value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span
		>
		<span class="opacity-40">Click to edit amount.</span>
	{/if}
</div>

<style lang="postcss">
	.big-text {
		@apply text-4xl lg:text-8xl font-mono;
	}
	.textbox {
		@apply text-4xl lg:text-8xl mx-2 px-2 w-1/2 lg:w-[400px] 
		outline-none dark:border-opacity-10 border-2 
		border-black dark:border-white text-right placeholder:opacity-30 
		focus:border-brand-a dark:focus:border-brand-a focus:border-opacity-100 
		border-opacity-10 font-black font-mono text-black 
		dark:text-white bg-transparent rounded-xl;

		appearance: textfield;
	}
</style>
