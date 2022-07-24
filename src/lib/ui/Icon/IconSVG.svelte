<script lang="ts">
	import { Tooltip } from '$lib/ui'
	export let id: number
	export let svg: SVGAnchor

	$: vx = svg.viewX ? svg.viewX : 0
	$: vy = svg.viewY ? svg.viewY : 0
</script>

{#if svg.caption}
	<Tooltip content={svg.caption} i={id}>
		<a href={svg.link} target="_blank">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xml:space="preserve"
				fill-rule="evenodd"
				stroke-linejoin="round"
				stroke-miterlimit="2"
				clip-rule="evenodd"
				width={svg.size}
				height={svg.size}
				viewBox="{vx} {vy} 512 512"
			>
				<path fill={svg.color} fill-rule="nonzero" d={svg.d} />
			</svg>
		</a>
	</Tooltip>
{:else}
	<a href={svg.link} target="_blank">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xml:space="preserve"
			fill-rule="evenodd"
			stroke-linejoin="round"
			stroke-miterlimit="2"
			clip-rule="evenodd"
			width={svg.size}
			height={svg.size}
			viewBox="{vx} {vy} 512 512"
		>
			<path fill={svg.color} fill-rule="nonzero" d={svg.d} />
		</svg>
	</a>
{/if}
