<script lang="ts">
	import { fly } from 'svelte/transition'
	import Stat from './_about/components/Stat.svelte'
	import { mobile, visibility } from 'fractils'
	import { CodeBlock, Icon } from '$lib/ui'
	import { creativeSkills, softwareSkills, devSkills, statsArray } from '$lib/data'
	import Logo from '$lib/ui/Logo.svelte'
	import ProgressBar from './_about/components/ProgressBar.svelte'
	import { quintOut } from 'svelte/easing'

	const bio = `Hi, I am roaming97, a visual artist and graphic designer who had been creating, designing, 
	developing, and producing content since 2016. Despite my work usually consisting of experimental, 
	abstract, geometric compositions in both static art and image sequences, I am very capable of approaching 
	different styles of design and art when creating.`

	let visible: boolean
	let options = { threshold: 0.5, once: true }

	const handleChange = (e: CustomEvent) => (visible = e.detail.isVisible)

	$: action = !$mobile ? 'Hover over' : 'Tap'
</script>

<template lang="pug">

	h1 About
	.section
		h2(style='font-size:3rem;font-weight:200') Who am I?
		.section-content
			.paragraphs
				p {bio}
			.logo
				Logo
		hr(style="width:80vw;color:var(--light-d);")
		.section-content
				+each("statsArray as s, i")
					Stat(num='{s.num}', stat="{s.name}", suffix=`{s.suffix}`, delay='{i*100}')
	.visibleControl(
		use:visibility='{options}'
		on:change='{handleChange}'
	)
			.section
				p(style="padding:1rem;color:var(--light-d)") Tip: {action} the icons for more information.
				h2 Creative skills
				+if('visible')
					.bars
						+each("creativeSkills as s, i")
							ProgressBar(name="{s.caption}", icon='{s.picture}', percent=`{s.percent}`, index='{i}')
				hr(style="width:80vw;color:var(--light-d)")
				h2 Creative software experience 
				+if('visible')
					.bars
						+each("softwareSkills as s, i")
							ProgressBar(name="{s.caption}", icon='{s.picture}', percent=`{s.percent}`, index='{i+10}')

</template>

<style lang="scss">
	@use '../../styles/media' as *;
	.section {
		background-color: rgba(var(--light-d-rgb), 0.1);
		flex-direction: column;
		text-align: center;
		display: flex;
		margin: 1rem 0;
		padding: 1rem;
	}

	.section-content {
		flex-direction: column;
		align-items: center;
		display: flex;
		.logo {
			border-radius: 100%;

			background-color: var(--light-b);
			outline: solid 2px var(--light-d);

			width: clamp(35vw, 3rem, 50vw);
			padding: 2rem;
		}
		.paragraphs {
			text-align: 2rem center;
			margin: 0.5rem 1rem;
			p {
				margin: 1rem 0;
			}
		}
	}
	.bars {
		justify-content: center;
		flex-direction: column;
		margin: 0.5rem 0;
		display: flex;
		width: 85vw;
	}
	@include media('>desktop') {
		.section-content {
			justify-content: space-around;
			flex-direction: row;
			align-items: center;
			margin: 0.5rem auto;
			width: 80vw;
			.paragraphs {
				margin: 1rem 2rem;
				text-align: left;
				p {
					font-size: 1.5rem;
				}
			}
			.logo {
				padding: 3.5rem;
			}
		}
		.bars {
			flex-direction: row;
			align-items: center;
			margin: 1rem auto;
			width: 70vw;
		}
	}
</style>
