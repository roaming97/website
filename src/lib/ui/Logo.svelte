<script lang="ts">
	import { draw } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { OnMount } from 'fractils'

	export let animate = true
</script>

<OnMount>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-16 0 454 454">
		{#if animate}
			<path
				in:draw={{ duration: 25000, easing: quintOut }}
				d="M88 199v34m0 0v1m0-1L2 167m86 67v108m0-108v-1m0 1h-1M1 167h1m0 0-1 1m1-1 86-65m0 131 1 1m-1-1 44-33m-44-98 1-1m-1 1 86 65m-86-65-1-1m88 66h-1m0 0-42 33m42-33h1m-43 33-1-1m1 1 258 169M137 137 351 3m0 0 1-1m-1 1-1-1m1 1 40 25M278 452l1-1m0 0 111-82m-111 82-147-94m147 94 1 1m110-83h1m-1 0 1 1v-1m0 0 1-1m-1 1V207m0-180v1m0 0v110m0-110 1 1m-1 109v69m0-69L274 52m117 155-117 85"
				stroke="var(--dark-a)"
				stroke-width="4"
				stroke-miterlimit="10"
			/>
		{:else}
			<path
				d="M88 199v34m0 0v1m0-1L2 167m86 67v108m0-108v-1m0 1h-1M1 167h1m0 0-1 1m1-1 86-65m0 131 1 1m-1-1 44-33m-44-98 1-1m-1 1 86 65m-86-65-1-1m88 66h-1m0 0-42 33m42-33h1m-43 33-1-1m1 1 258 169M137 137 351 3m0 0 1-1m-1 1-1-1m1 1 40 25M278 452l1-1m0 0 111-82m-111 82-147-94m147 94 1 1m110-83h1m-1 0 1 1v-1m0 0 1-1m-1 1V207m0-180v1m0 0v110m0-110 1 1m-1 109v69m0-69L274 52m117 155-117 85"
				stroke="var(--dark-a)"
				stroke-width="4"
				stroke-miterlimit="10"
			/>
		{/if}
	</svg>
</OnMount>
