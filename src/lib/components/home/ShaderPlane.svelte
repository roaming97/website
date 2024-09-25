<script lang="ts">
	import { T } from '@threlte/core';
	import vertexShader from './../../shaders/plane.vert?raw';
	import fragmentShader from './../../shaders/plane.frag?raw';
	import { PlaneGeometry, Vector3 } from 'three';
	import { onDestroy, onMount } from 'svelte';
	import { theme } from '$lib/stores';

	const geometry = new PlaneGeometry(99, 99);
	const uniforms = {
		iTime: { value: 0 },
		iResolution: { value: new Vector3() }
	};
	let started = false;

	$: if (started) {
		requestAnimationFrame(() => {
			uniforms.iResolution.value.set(window.innerWidth, window.innerHeight, 1.0);
			uniforms.iTime.value += 0.01;
		});
	}

	onMount(() => (started = true));
	onDestroy(() => (started = false));
</script>

<T.Mesh {geometry} position={[0, 0, -5]}>
	<T.ShaderMaterial {vertexShader} {fragmentShader} {uniforms} />
</T.Mesh>
