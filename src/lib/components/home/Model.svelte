<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@3.0.0-next.7 ./static/models/logo24.gltf --transform --types
-->

<script lang="ts">
	import * as THREE from 'three';

	import { onDestroy, type Snippet } from 'svelte';
	import { T, type Props } from '@threlte/core';
	import { useGltf, useDraco, useMeshopt } from '@threlte/extras';
	import { mode } from 'mode-watcher';

	let {
		fallback,
		error,
		children,
		ref = $bindable(new THREE.Group()),
		...props
	}: Props<THREE.Group> & {
		ref?: THREE.Group;
		children?: Snippet<[{ ref: THREE.Group }]>;
		fallback?: Snippet;
		error?: Snippet<[{ error: Error }]>;
	} = $props();

	type GLTFResult = {
		nodes: {
			Detailed: THREE.Mesh;
		};
		materials: {
			Material: THREE.MeshStandardMaterial;
		};
	};

	const dracoLoader = useDraco();
	const meshoptDecoder = useMeshopt();

	const gltf = useGltf<GLTFResult>('/models/logo24.glb', {
		dracoLoader,
		meshoptDecoder
	});

	let color = $derived($mode === 'dark' ? '#FFFFFF' : '#040309');
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		{@render fallback?.()}
	{:then gltf}
		<T.Mesh geometry={gltf.nodes.Detailed.geometry} scale={0.75}>
			<T.MeshPhysicalMaterial {color} ior={1.333} metalness={1.2} roughness={0.00001} />
		</T.Mesh>
	{:catch err}
		{@render error?.({ error: err })}
	{/await}

	{@render children?.({ ref })}
</T.Group>
