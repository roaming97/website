<script lang="ts">
	import { screenW, screenH } from 'fractils'
</script>

<div class="background">
	<svg viewBox="0 0 {$screenW} {$screenH}" fill="none" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<radialGradient
				id="grad0"
				cx="12%"
				cy="4%"
				r="100%"
				fx="12%"
				fy="4%"
				gradientUnits="objectBoundingBox"
			>
				<stop offset="0" stop-color="rgba(30,41,246,1)" stop-opacity="1" />
				<stop offset="0.5" stop-color="rgba(30,41,246,0)" stop-opacity="0" />
			</radialGradient>
			,
			<radialGradient
				id="grad1"
				cx="68%"
				cy="37%"
				r="100%"
				fx="68%"
				fy="37%"
				gradientUnits="objectBoundingBox"
			>
				<stop offset="0" stop-color="rgba(250,56,56,1)" stop-opacity="1" />
				<stop offset="0.5" stop-color="rgba(250,56,56,0)" stop-opacity="0" />
			</radialGradient>
			,
			<radialGradient
				id="grad2"
				cx="74%"
				cy="10%"
				r="100%"
				fx="74%"
				fy="10%"
				gradientUnits="objectBoundingBox"
			>
				<stop offset="0" stop-color="rgba(16,149,244,1)" stop-opacity="1" />
				<stop offset="0.5" stop-color="rgba(16,149,244,0)" stop-opacity="0" />
			</radialGradient>
			,
			<radialGradient
				id="grad3"
				cx="79%"
				cy="3%"
				r="100%"
				fx="79%"
				fy="3%"
				gradientUnits="objectBoundingBox"
			>
				<stop offset="0" stop-color="rgba(243,94,218,1)" stop-opacity="1" />
				<stop offset="0.5" stop-color="rgba(243,94,218,0)" stop-opacity="0" />
			</radialGradient>
			,
			<radialGradient
				id="grad4"
				cx="92%"
				cy="39%"
				r="100%"
				fx="92%"
				fy="39%"
				gradientUnits="objectBoundingBox"
			>
				<stop offset="0" stop-color="rgba(55,163,241,1)" stop-opacity="1" />
				<stop offset="0.5" stop-color="rgba(55,163,241,0)" stop-opacity="0" />
			</radialGradient>
		</defs>
		<rect x="0" y="0" width={$screenW} height={$screenH} fill="#7785ff" />
		<rect x="0" y="0" width={$screenW} height={$screenH} fill="url(#grad0)" />
		,
		<rect x="0" y="0" width={$screenW} height={$screenH} fill="url(#grad1)" />
		,
		<rect x="0" y="0" width={$screenW} height={$screenH} fill="url(#grad2)" />
		,
		<rect x="0" y="0" width={$screenW} height={$screenH} fill="url(#grad3)" />
		,
		<rect x="0" y="0" width={$screenW} height={$screenH} fill="url(#grad4)" />
		,
	</svg>
</div>

<style lang="scss">
	.background {
		position: absolute;
		height: 100vh;
		width: 100vw;

		z-index: 0;
		svg {
			position: fixed;
			height: 100%;
			width: 100%;
		}
	}
</style>
