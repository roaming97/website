<script lang="ts">
	import * as THREE from 'three';
	import vertexShader from './../../shaders/plane.vert?raw';
	import fragmentShader from './../../shaders/plane.frag?raw';
	import { Canvas, T } from '@threlte/core';
	import { Environment, OrbitControls, HTML } from '@threlte/extras';
	import Model from './Model.svelte';

	import { SphereGeometry, Vector3 } from 'three';
	import { theme } from '$lib/stores';

	let innerWidth = $state(1);
	let innerHeight = $state(1);

	const geometry = new SphereGeometry(15);
	geometry.computeVertexNormals();
	let uniforms = $state({
		iTime: { value: 0 },
		iResolution: { value: new Vector3(1, 1, 1.0) },
		iDarkMode: { value: $theme === 'dark' }
	});

	$effect(() => {
		let frame = requestAnimationFrame(function update() {
			uniforms.iResolution.value.set(innerWidth, innerHeight, 1.0);
			uniforms.iTime.value += 0.01;
			uniforms.iDarkMode.value = $theme === 'dark';
			frame = requestAnimationFrame(update);
		});
		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="relative flex h-[240px] w-screen items-center justify-center lg:h-[400px] xl:h-[600px]">
	<div class="absolute -z-10 h-full w-full">
		<Canvas>
			<T.Mesh {geometry}>
				<T.ShaderMaterial
					side={THREE.DoubleSide}
					{vertexShader}
					{fragmentShader}
					{uniforms}
				/>
			</T.Mesh>
			<Environment path="/img/hdr/" files="kloppenheim_06_puresky_1k.hdr" />
			<T.PerspectiveCamera makeDefault filmOffset={6} position={[5, 0, 4]} fov={30}>
				<OrbitControls
					autoRotate
					enableDamping
					enablePan={false}
					enableZoom={false}
					autoRotateSpeed={4}
				/>
			</T.PerspectiveCamera>
			<T.AmbientLight />
			<HTML position={[0, 0.5, 0]}>
				<div class="flex translate-x-1/2 select-none flex-col text-black">
					<h1
						class="white animate-bg_scroll bg-gradient-to-br from-brand-a from-20%
								via-brand-b to-brand-c to-70% bg-[length:400%_400%] px-1 pb-4 pr-4
								pt-2 text-left text-3xl tracking-tight
								shadow-solid sm:text-4xl md:pb-6 md:pr-8 md:pt-4 lg:pr-12 lg:text-7xl"
					>
						roaming97
					</h1>
					<h2
						class="w-max bg-brand-a p-1 pr-4 text-left
							font-mono text-xs font-medium shadow-solid sm:text-sm md:pr-8
							lg:pb-2 lg:pr-12 lg:text-xl"
					>
						Digital creative.
					</h2>
				</div>
			</HTML>
			<Model />
		</Canvas>
	</div>
</div>
