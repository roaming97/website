<script lang="ts">
	import { onMount } from 'svelte'

	export let svg: SVGAnchor
	export let ignoreColor = false

	onMount(() => {
		if (ignoreColor) svg.color = '#fff'
	})

	$: vx = svg.viewX ? svg.viewX : 0
	$: vy = svg.viewY ? svg.viewY : 0
	$: vw = svg.viewW ? svg.viewW : 512
	$: vh = svg.viewH ? svg.viewH : 512
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xml:space="preserve"
	fill-rule="evenodd"
	stroke-linejoin="round"
	stroke-miterlimit="2"
	clip-rule="evenodd"
	width={svg.size}
	height={svg.size}
	viewBox="{vx} {vy} {vw} {vh}"
>
	<path fill={svg.color} fill-rule="nonzero" d={svg.d} />
</svg>
