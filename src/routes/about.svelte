<script lang="ts">
	import { mobile } from 'fractils'
	import { CodeBlock, Icon } from '$lib/ui'
	import { array1, array2 } from '$lib/data'
	import Logo from '$lib/ui/Logo.svelte'
	import ProgressBar from './_about/components/ProgressBar.svelte'

	$: action = !$mobile ? 'hover over' : 'tap'
</script>

<template lang="pug">

	h1 About
	.section
		h2 Who am I?
		.section-content
			.paragraphs
				p Hi, I am roaming97, a visual artist and graphic designer who has been making experimental artwork and videos since 2016, mostly videos. My work usually consists of experimental, abstract and geometric compositions in both static art and image sequences. 
				p I worked for currently suspended eletronic music label 04 Collective (owned by Canadian music artist Paper Skies) as the lead animator, as well as having made work for electronic music artists and promoters such as COLORCASE, eccentric, MSKD Sounds, TrueBlue, GEKQO, and many more.
			.logo
				Logo
	.section
		p(style="padding:1rem;color:var(--light-d)") Tip: You can {action} the icons for more information.
		h2 Creative skills
		.bars
			+each("array1 as s, i")
				ProgressBar(name="{s.caption}", icon='{s.picture}', percent=`{s.percent}`, index='{i}')
		hr(style="width:80vw;color:var(--light-d)")
		h2 Creative software experience 
		.bars
			+each("array2 as s, i")
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
			padding: 1.5rem;
			background-color: var(--light-b);
			border-radius: 15%;
			width: clamp(30vw, 4rem, 50vw);
		}
		.paragraphs {
			margin: 0.5rem 1rem;
			text-align: 2rem center;
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
		.section {
			.logo {
				padding: 3rem;
			}
		}
		.section-content {
			flex-direction: row;
			align-items: center;
			margin: 0.5rem auto;
			width: 80vw;
			.paragraphs {
				margin: 1rem 2rem;
				text-align: left;
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
