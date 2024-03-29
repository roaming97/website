<script lang="ts">
	import { fly } from 'svelte/transition'
	import { mobile, visibility, type VisibilityEvent } from 'fractils'
	import { CodeBlock, Icon } from '$lib/ui'
	import { creativeSkills, softwareSkills, devSkills, statsArray, bio } from '$lib/data'
	import { quintOut } from 'svelte/easing'
	import { Logo, Stat } from '$lib/ui'
	import { ClientList, ProgressBar } from '../_about'

	let visible: boolean
	let options = { threshold: 0.7, once: true }
	const handleChange = (e: VisibilityEvent) => (visible = e.detail.isVisible)

	$: action = !$mobile ? 'Hover over' : 'Tap'
</script>

<template lang="pug">

	h1.page-title About
	.section
		h2(style='font-size:3rem;font-weight:200') Who am I?
		.section-content
			.paragraphs
				+each('bio.split("#") as p')
					p {p}
			.logo
				Logo(animate!='{false}')
		hr(style="width:80vw;margin: 1rem auto;color:var(--bg-d);")
		.section-content
				+each("statsArray as s, i")
					Stat(num!='{s.num}', stat!="{s.name}", suffix!=`{s.suffix}`, delay!='{i*100}')
	.visibleControl(
		use:visibility!='{options}'
		on:v-change!='{handleChange}'
	)
		+if('visible')
			.section
				h1 Clients
				p(style="color:var(--fg-d);font-size:0.75rem;") (Some of them)
				.client-list-transition(in:fly!='{{y: 50, duration: 500, easing: quintOut}}')
					ClientList
			.section
				p(style="padding:1rem;color:var(--fg-d);font-weight:normal;") Tip: {action} the icons for more information.
				h2 Creative skills
				.bars
					+each("creativeSkills as s, i")
						ProgressBar(name!="{s.caption}", icon!='{s.picture}', percent!=`{s.percent}`, index!='{i}')
				hr(style="width:80vw;color:var(--bg-d)")
				h2 Creative software experience 
				.bars
					+each("softwareSkills as s, i")
						ProgressBar(name!="{s.caption}", icon!='{s.picture}', percent!=`{s.percent}`, index!='{i+10}')
				hr(style="width:80vw;color:var(--bg-d)")
				h2 Developing experience
				.icons
					+each("devSkills as s, i")
						.icon(in:fly!="{{y: 40, duration: 500, easing: quintOut, delay: i*200}}" )
							Icon(src!='{s.picture}', alt!="{s.caption}", tipindex!=`{i}` tip!="{s.caption}" '--size'="5rem") 

</template>

<style lang="scss">
	@use '../../../styles/media' as *;
	.section {
		background-color: rgba(var(--bg-d-rgb), 0.1);
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
			background-color: var(--bg-b);
			border-radius: 2em;
			padding: 1rem;
			width: 40%;
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
	.icons {
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		display: flex;
		.icon {
			background-color: var(--bg-a);
			border-radius: 0.5em;
			padding: 0.25rem;
			margin: 0.25rem;
		}
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
