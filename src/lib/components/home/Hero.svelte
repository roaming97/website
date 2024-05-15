<script lang="ts">
	import ShaderPlane from './ShaderPlane.svelte';
	import { Canvas, T } from '@threlte/core';
	import { Environment, OrbitControls } from '@threlte/extras';
	import Model from './Model.svelte';
</script>

<div class="w-screen relative h-[240px] lg:h-[400px] xl:h-[600px] flex items-center justify-center">
	<div class="absolute w-full h-full opacity-[0.25]">
		<Canvas>
			<ShaderPlane />
		</Canvas>
	</div>
	<div class="w-1/4 h-full drop-shadow-glow">
		<Canvas>
			<Environment path="/img/hdr/" files="the_sky_is_on_fire_1k.hdr" />
			<T.PerspectiveCamera makeDefault position={[5, 0, 7]} fov={30}>
				<OrbitControls autoRotate enableDamping enableZoom={false} autoRotateSpeed={4} />
			</T.PerspectiveCamera>
			<T.AmbientLight />
			<Model />
		</Canvas>
	</div>
	<div class="p-2 xl:p-8">
		<h1
			class="text-3xl sm:text-5xl lg:text-8xl text-left font-normal tracking-tighter
						drop-shadow-glow bg-clip-text text-transparent bg-gradient-to-br from-20%
						from-brand-a via-brand-b to-70% to-brand-c"
		>
			roaming97
		</h1>
		<h2 class="text-xs sm:text-sm lg:text-xl text-left font-medium lg:mb-4 drop-shadow-glow">
			Digital creative.
		</h2>
	</div>
</div>
