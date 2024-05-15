<script lang="ts">
	import { Artwork, Category, Log, Posts } from '$lib/components/vault';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<p>Welcome to the vault!</p>
<div class="grid items-center justify-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	<Category
		href="/quake"
		src="/img/ico/quake.svg"
		caption="Quake"
		background="linear-gradient(73deg, rgba(217,176,70,1) 30%, rgba(135,106,0,1) 85%)"
	/>
	<Category href="/blog" src="/img/ico/bookmark_tabs.svg" caption="Blog" background="#5a98f4" />
</div>
<Artwork {data} />
<Posts {data} />
<Log />
