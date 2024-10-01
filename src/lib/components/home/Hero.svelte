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

<div class="w-screen relative h-[240px] lg:h-[400px] xl:h-[600px] flex items-center justify-center">
	<div class="absolute w-full h-full -z-10">
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
				<div class="flex flex-col select-none text-black translate-x-1/2">
					<h1
						class="text-3xl sm:text-4xl lg:text-7xl text-left tracking-tight
								bg-gradient-to-br white from-20% from-brand-a pr-4 md:pr-8 lg:pr-12
								via-brand-b to-70% to-brand-c bg-[length:400%_400%]
								pt-2 pb-4 md:pt-4 md:pb-6 px-1 animate-bg_scroll shadow-solid"
					>
						roaming97
					</h1>
					<h2
						class="text-xs sm:text-sm lg:text-xl font-mono text-left
							font-medium lg:pb-2 p-1 bg-brand-a w-max shadow-solid
							pr-4 md:pr-8 lg:pr-12"
					>
						Digital creative.
					</h2>
				</div>
			</HTML>
			<Model />
		</Canvas>
	</div>
</div>
