<script lang="ts">
	import { slide } from 'svelte/transition';
	import LogEntry from '../home/LogEntry.svelte';

	let show_all = false;

	function scrollIntoView() {
		const el = document.querySelector('#updates');
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div class="w-full">
	<h1 id="updates">Updates</h1>
	<hr class="my-2 border-gray-400 dark:border-darker" />
	<LogEntry date={new Date('2024/7/25')}>
		<p>Version 6 of this website is out, hopefully the last version I have to write.</p>
		<p>
			If you're curious about the development behind this new version, check out the <a
				href="/blog/website6">article</a
			> explaining those in more detail.
		</p>
	</LogEntry>

	<LogEntry date={new Date('2024/5/20')}>
		<p>Version 6 test released.</p>
	</LogEntry>

	<LogEntry date={new Date('2023/01/12')}>
		<p>Version 5.1 released. More info <a href="/blog/website5point1">on this article</a>.</p>
	</LogEntry>

	{#if show_all}
		<div transition:slide={{ duration: 500 }}>
			<LogEntry date={new Date('2022/07/02')}>
				<p>
					Version 5 released. Here's the <a
						href="https://x.com/roaming98/status/1543056677087354880">announcement</a
					> on Twitter.
				</p>
			</LogEntry>

			<LogEntry date={new Date('2022/03/25')}>
				<p>
					A whole year of everydays. I've written an <a href="/blog/day366">article</a> sharing
					the journey throughout.
				</p>
			</LogEntry>

			<LogEntry date={new Date('2020/10/01')}>
				<p>
					04 closed down, new <a href="/blog/04_closing">post</a> talking about my experience
					with the label during its very short life.
				</p>
			</LogEntry>

			<LogEntry date={new Date('2019/09/22')}>
				<p>
					I joined 04 Collective by working on the visuals for Shwin's <a
						href="https://www.youtube.com/watch?v=418QSl0JscE">Midnight Sun LP</a
					>!
				</p>
			</LogEntry>

			<LogEntry date={new Date('2019/04/15')}>
				<p>
					Version 2 released. This added a photography section, turned <i
						>exclusive videos</i
					>
					into just... videos, and removed the blog section.
				</p>
			</LogEntry>

			<LogEntry date={new Date('2019/03/28')}>
				<p>The site is getting a huge redesign for the new decade. Yeah, I'm alive.</p>
			</LogEntry>

			<LogEntry date={new Date('2019/01/01')}>
				<p>Preparing something...</p>
			</LogEntry>

			<LogEntry date={new Date('2018/12/09')}>
				<div class="flex flex-col gap-2">
					<p>
						Merry Christmas everyone, I decorated the website for the occassion! Later
						this month I'll post the end of the year article, summarizing everything
						that happened this year.
					</p>
					<p><b>2024 note:</b> This post was never written.</p>
					<p>By the way I got a cool snow machine that snows all over this page.</p>
				</div>
			</LogEntry>

			<LogEntry date={new Date('2018/12/03')}>
				<p>
					My demo reel <a href="https://vimeo.com/381553426">video</a> for this year has been
					released. There will be no November end of month article due to the lack of events
					during that month. Well, I think I'll be signing off for now, happy holidays! The
					site will be getting a handful of changes next year.
				</p>
			</LogEntry>

			<LogEntry date={new Date('2018/11/01')}>
				<p>
					New <a href="/blog/eoe_oct18">post</a>.
				</p>
			</LogEntry>

			<LogEntry date={new Date('2018/10/04')}>
				<p>
					New <a href="/blog/eoe_sep18">post</a>.
				</p>
			</LogEntry>

			<LogEntry date={new Date('2018/08/31')}>
				<p>
					New <a href="/blog/eoe_aug18">post</a>.
				</p>
			</LogEntry>

			<LogEntry date={new Date('2018/08/20')}>
				<p>
					The website is officially hosted online on the internet (more info in the <a
						href="/blog/website">"The website is online now!"</a
					> article), it just took me a weekend to write it, that's kind of surprising coming
					from me.
				</p>
			</LogEntry>

			<LogEntry date={new Date('2018/08/18')}>
				<p>
					I've made this website to post exclusive stuff, I don't like using YouTube
					anymore, I'll keep posting videos there, but most of my content will now be
					hosted here, as well as articles, posts, and other utilities made by me (more
					info in the <a href="/blog/website">"The website is online now!"</a> article). The
					site is still on beta, or rather unfinished, so I'll see how it goes in the future.
				</p>
			</LogEntry>
		</div>
	{/if}

	<div class="flex flex-row-reverse">
		<button
			on:click={() => {
				show_all = !show_all;
				if (!show_all) scrollIntoView();
			}}>{show_all ? 'Show less \u2191' : 'Show more \u2193'}</button
		>
	</div>
</div>

<style lang="postcss">
	p {
		@apply text-sm;
	}
	a {
		@apply underline text-brand-b;
	}
</style>
