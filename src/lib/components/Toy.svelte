<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
</script>

<T.PerspectiveCamera
	makeDefault
	position={[3, 0.75, 0]}
	fov={50}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<OrbitControls autoRotate={true} enableZoom={true} />
</T.PerspectiveCamera>

<T.DirectionalLight position={[-2, -3, -4]} color="violet" />
<T.DirectionalLight position={[3, 2, 2]} color="hotpink" />
<T.DirectionalLight position={[0, 8, 0]} color="cyan" intensity={2} />

<T.Mesh>
	<T.TorusKnotGeometry args={[2]} />
	<T.MeshStandardMaterial color="white" />
</T.Mesh>
