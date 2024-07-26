<script lang="ts">
	export let user: string;
	export let role: string;
	export let period: string;
	export let location = 'Remote';
</script>

<div class="p-4 border-2 bg-white dark:bg-darkest border-gray-500 dark:border-dark rounded-lg mb-4">
	<div class="flex flex-col md:flex-row justify-between">
		<div>
			<h2 class="leading-none">{role}</h2>
			<h3 class="opacity-75 font-semibold text-base">{user}</h3>
		</div>
		<div class="md:text-right">
			<p class="opacity-75">{location}</p>
			<p class="opacity-40 text-xs">{period}</p>
		</div>
	</div>
	<hr class="mt-2 p-2 opacity-20" />
	<slot />
</div>
