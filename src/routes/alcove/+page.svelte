<script lang="ts">
	import { Category, Log, Posts } from '$lib/components/alcove';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<p>Welcome to the alcove!</p>
<div class="flex flex-col gap-16">
	<div class="py-4 grid items-center justify-center grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		<Category
			href="/quake"
			src="/img/ico/quake.svg"
			caption="Quake"
			background="linear-gradient(104deg, rgba(217,176,70,1) 30%, rgba(135,106,0,1) 85%)"
		/>
		<Category
			href="/flash"
			src="/img/ico/flash.svg"
			caption="Flash"
			background="linear-gradient(31deg, rgba(255,142,142,1) 5%, rgba(255,103,57,1) 36%, rgba(251,43,43,1) 100%)"
		/>
		<Category
			href="/patchouli"
			src="/img/ico/patchy.png"
			caption="Patchouli"
			background="linear-gradient(275deg, rgba(176,67,239,1) 0%, rgba(182,145,227,1) 100%)"
		/>
	</div>
	<Posts {data} />
	<Log />
</div>
