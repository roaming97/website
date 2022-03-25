<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}`,
				description: `${error.message}`
			}
		}
	}
</script>

<script>
	export let title
	export let description
</script>

<h1>{title}</h1>
<p>{description}</p>

<style lang="scss">
	::selection {
		background-color: rgb(145, 15, 26);
	}
	h1 {
		margin: 2rem 0;
		font-size: 20vw;
		font-weight: 100;
		color: rgb(228, 48, 63);
	}
	p {
		font-size: 1em;
		text-align: center;
		margin: 2rem 0 2rem 0;
	}
</style>
