<script>
	import { Group } from 'three';
	import { T, forwardEventHandlers } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { theme } from '$lib/stores';

	export const ref = new Group();

	const gltf = useGltf('/models/logo24.gltf');

	const component = forwardEventHandlers();

	$: color = $theme === 'dark' ? '#CCB3FB' : '#040309';
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
	{#await gltf}
		<slot name="fallback" />
	{:then gltf}
		<T.Mesh geometry={gltf.nodes.Detailed.geometry}>
			<T.MeshPhysicalMaterial {color} roughness={0.01} />
		</T.Mesh>
	{:catch error}
		<slot name="error" {error} />
	{/await}

	<slot {ref} />
</T>
