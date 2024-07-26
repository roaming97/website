<script lang="ts">
	export let tag: string;

	interface TagColor {
		name: string;
		fill: string;
		text: string;
	}

	const tag_colors: TagColor[] = [
		{ name: 'legacy', fill: '#6a6a6a', text: '#ddd' },
		{ name: 'spanish', fill: '#84d620', text: '#000' },
		{ name: 'first post', fill: '#f9d242', text: '#000' },
		{ name: 'development', fill: '#a32916', text: '#fff' },
		{
			name: 'art',
			fill: 'linear-gradient(160deg, rgba(131,58,180,1) 5%, rgba(29,78,253,1) 62%, rgba(69,252,247,1) 100%)',
			text: '#000'
		},
		{ name: 'personal', fill: '#312a6b', text: '#fff' },
		{ name: 'review', fill: '#37c4cc', text: '#151b1c' },
		{ name: 'update', fill: '#8216e9', text: '#fff' }
	];

	$: fill = tag_colors.find((t) => t.name === tag)?.fill;
	$: text = tag_colors.find((t) => t.name === tag)?.text;
</script>

<p class="p-1 px-3 rounded-2xl w-max text-xs" style="background: {fill}; color: {text}">
	{tag}
</p>
