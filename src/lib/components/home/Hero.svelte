<script lang="ts">
	import Socials from '../Socials.svelte';
	import * as THREE from 'three';
	// import vertexShader from './../../shaders/plane.vert?raw';
	// import fragmentShader from './../../shaders/plane.frag?raw';
	import { Canvas, T } from '@threlte/core';
	import { Environment, OrbitControls, HTML } from '@threlte/extras';
	import Model from './Model.svelte';

	import { SphereGeometry, Vector3 } from 'three';
	import { mode } from 'mode-watcher';
	import Email from '../Email.svelte';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import { onDestroy, onMount } from 'svelte';

	let innerWidth = $state(1);
	let innerHeight = $state(1);

	const geometry = new SphereGeometry(15);
	geometry.computeVertexNormals();

	const url = '/img/panorama/kloofendal_48d_partly_cloudy_puresky_1k.hdr';

	onDestroy(() => {
		geometry.dispose();
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="relative flex h-[240px] w-screen items-center justify-center lg:h-[480px] xl:h-[640px]">
	<Canvas>
		<Environment {url} isBackground />
		<T.PerspectiveCamera makeDefault filmOffset={6.5} position={[5, 0, 5.5]} fov={30}>
			<OrbitControls
				autoRotate
				enableDamping
				enablePan={false}
				enableZoom={false}
				autoRotateSpeed={1}
				minPolarAngle={Math.PI / 2 - degToRad(20)}
				maxPolarAngle={Math.PI / 2 + degToRad(20)}
			/>
		</T.PerspectiveCamera>
		<T.AmbientLight />
		<HTML position={[0, 0.65, 0]}>
			<div class=" flex translate-x-1/2 flex-col gap-2">
				<div class="mb-3 flex flex-col text-black drop-shadow-glow">
					<h1
						class="white animate-bg_scroll select-none bg-gradient-to-br from-brand-a
										from-20% via-brand-b to-brand-c to-70% bg-[length:400%_400%] px-1 pb-4
										pr-4 pt-2 text-left text-3xl tracking-tight
										shadow-solid sm:text-4xl md:pb-6 md:pr-8 md:pt-4 lg:pr-12 lg:text-7xl"
					>
						roaming97
					</h1>
					<h2
						class="w-max select-none bg-brand-a p-1 pr-4 text-left
									font-mono text-xs font-medium shadow-solid sm:text-sm md:pr-8
									lg:pb-2 lg:pr-12 lg:text-xl"
					>
						Digital creative.
					</h2>
				</div>
				<div class="hidden flex-col gap-3 lg:flex">
					<Email />
					<Socials respondToTheme />
				</div>
			</div>
		</HTML>
		<Model />
	</Canvas>
</div>
