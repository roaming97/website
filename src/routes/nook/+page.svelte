<script lang="ts">
	import { slide } from 'svelte/transition';
	import LogItem from '$lib/components/nook/LogItem.svelte';

	let show_all = $state(false);

	function scrollItemIntoView() {
		const el = document.querySelector('#log');
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth' });
	}
</script>

{#snippet category(href: string, caption: string, src: string, background = '#4e2')}
	<a
		class="flex w-full text-sm items-center justify-start gap-2 rounded-sm
			p-2 shadow-black/10 dark:shadow-white/10 shadow-md hover:shadow-lg
			hover:shadow-black/30 hover:dark:shadow-white/20 text-black
			transition-all hover:scale-105 ease-out duration-200 text-center"
		{href}
		style:background
	>
		{#if src}
			<img {src} width="24" height="24" alt="{caption} icon" />
		{/if}
		<span class="font-bold">{caption}</span>
	</a>
{/snippet}

{#snippet log()}
	<!-- Log -->
	<div class="w-full">
		<ul id="log">
			<LogItem date={new Date('2024/01/01')} pinned>
				<p>
					Welcome to the nook! This is where suddenly my professional portfolio turns into
					a mess of a 2006 web portal. This is a much more personal space dedicated to my
					hobbies and passions and sharing anything that's interesting, old-school style.
				</p>
				<hr class="my-2 opacity-50" />
				<p>
					<b>Please note:</b> this page is under construction, most pages return 404's and
					blog posts are yet to be finished being written.
				</p>
			</LogItem>
			<LogItem date={new Date('2024/10/24')}>
				<p>
					Version 6.3 released, the main change being redoing this section and making
					progress on some of the content across the website.
				</p>
			</LogItem>
			<LogItem date={new Date('2024/10/01')}>
				<p>
					Version 6.2 released by porting the website to Svelte 5. It was slightly tedious
					but it's finally done.
				</p>
			</LogItem>
			<LogItem date={new Date('2024/9/25')}>
				<p>Version 6.1 released, polishing and archiving more content slowly but surely.</p>
			</LogItem>
			<LogItem date={new Date('2024/7/25')}>
				<p>
					Version 6 of this website is out, hopefully the last major rewrite it will have.
				</p>
				<p>
					If you're curious about the development behind this new version, check out the <a
						href="/blog/website6"
						class="text-brand-a underline">article</a
					> sharing the experience in more detail.
				</p>
			</LogItem>

			<LogItem date={new Date('2024/5/20')}>
				<p>Version 6 test released.</p>
			</LogItem>

			<LogItem date={new Date('2023/01/12')}>
				<p>
					Version 5.1 released. More info <a
						href="/blog/website5point1"
						class="text-brand-a underline">on this article</a
					>.
				</p>
			</LogItem>

			{#if show_all}
				<div transition:slide={{ duration: 500 }}>
					<LogItem date={new Date('2022/07/02')}>
						<p>
							Version 5 released. Here's the <a
								href="https://x.com/roaming98/status/1543056677087354880"
								class="text-brand-a underline">announcement</a
							> on Twitter.
						</p>
					</LogItem>

					<LogItem date={new Date('2022/03/25')}>
						<p>
							A whole year of everydays. I've written an <a
								href="/blog/day366"
								class="text-brand-a underline">article</a
							> sharing the journey throughout.
						</p>
					</LogItem>

					<LogItem date={new Date('2020/10/01')}>
						<p>
							04 closed down, new <a
								href="/blog/04_closing"
								class="text-brand-a underline">post</a
							> talking about my experience with the label during its very short life.
						</p>
					</LogItem>

					<LogItem date={new Date('2019/09/22')}>
						<p>
							I joined 04 Collective by working on the visuals for Shwin's <a
								class="text-brand-a underline"
								href="https://www.youtube.com/watch?v=418QSl0JscE"
								>Midnight Sun LP</a
							>!
						</p>
					</LogItem>

					<LogItem date={new Date('2019/04/15')}>
						<p>
							Version 2 released. This added a photography section, turned <i
								>exclusive videos</i
							>
							into just... videos, and removed the blog section.
						</p>
					</LogItem>

					<LogItem date={new Date('2019/03/28')}>
						<p>
							The site is getting a huge redesign for the new decade. Yeah, I'm alive.
						</p>
					</LogItem>

					<LogItem date={new Date('2019/01/01')}>
						<p>Preparing something...</p>
					</LogItem>

					<LogItem date={new Date('2018/12/09')}>
						<div class="flex flex-col gap-2">
							<p>
								Merry Christmas everyone, I decorated the website for the occassion!
								Later this month I'll post the end of the year article, summarizing
								everything that happened this year.
							</p>
							<p><b>2024 note:</b> This post was never written.</p>
							<p>
								By the way I got a cool snow machine that snows all over this page.
							</p>
						</div>
					</LogItem>

					<LogItem date={new Date('2018/12/03')}>
						<p>
							My demo reel <a
								href="https://vimeo.com/381553426"
								class="text-brand-a underline">video</a
							> for this year has been released. There will be no November end of month
							article due to the lack of events during that month. Well, I think I'll be
							signing off for now, happy holidays! The site will be getting a handful of
							changes next year.
						</p>
					</LogItem>

					<LogItem date={new Date('2018/11/01')}>
						<p>
							New <a href="/blog/eoe_oct18" class="text-brand-a underline">post</a>.
						</p>
					</LogItem>

					<LogItem date={new Date('2018/10/04')}>
						<p>
							New <a href="/blog/eoe_sep18" class="text-brand-a underline">post</a>.
						</p>
					</LogItem>

					<LogItem date={new Date('2018/08/31')}>
						<p>
							New <a href="/blog/eoe_aug18" class="text-brand-a underline">post</a>.
						</p>
					</LogItem>

					<LogItem date={new Date('2018/08/20')}>
						<p>
							The website is officially hosted online on the internet (more info in
							the <a href="/blog/website" class="text-brand-a underline"
								>"The website is online now!"</a
							> article), it just took me a weekend to write it, that's kind of surprising
							coming from me.
						</p>
					</LogItem>

					<LogItem date={new Date('2018/08/18')}>
						<p>
							I've made this website to post exclusive stuff, I don't like using
							YouTube anymore, I'll keep posting videos there, but most of my content
							will now be hosted here, as well as articles, posts, and other utilities
							made by me (more info in the <a
								href="/blog/website"
								class="text-brand-a underline">"The website is online now!"</a
							> article). The site is still on beta, or rather unfinished, so I'll see
							how it goes in the future.
						</p>
					</LogItem>
				</div>
			{/if}
		</ul>
		<div class="flex flex-row-reverse mt-3">
			<button
				onclick={() => {
					show_all = !show_all;
					if (!show_all) scrollItemIntoView();
				}}>{show_all ? 'Show less \u2191' : 'Show more \u2193'}</button
			>
		</div>
	</div>
{/snippet}

<div class="w-full flex flex-col md:flex-row gap-16">
	{@render log()}
	<div class="w-full md:w-2/3 py-2 flex flex-col gap-3">
		<h2>Categories</h2>
		{@render category(
			'/blog',
			'Blog',
			'img/ico/pencil.svg',
			'linear-gradient(275deg, rgb(146, 160, 204) 0%, rgb(175, 153, 239) 61%)'
		)}
		{@render category(
			'/fs',
			'File explorer',
			'img/ico/folders.svg',
			'linear-gradient(275deg, rgba(67,149,255,1) 0%, rgba(68,184,255,1) 61%)'
		)}
		{@render category(
			'/quake',
			'Quake',
			'img/ico/quake.svg',
			'linear-gradient(104deg, rgba(217,176,70,1) 30%, rgba(135,106,0,1) 85%)'
		)}
		{@render category(
			'/flash',
			'Flash',
			'img/ico/flash.svg',
			'linear-gradient(31deg, rgba(255,142,142,1) 5%, rgba(255,103,57,1) 36%, rgba(251,43,43,1) 100%)'
		)}
		{@render category(
			'/fumo',
			'Fumo',
			'img/ico/patchy.png',
			'linear-gradient(275deg, rgba(176,67,239,1) 0%, rgba(182,145,227,1) 100%)'
		)}
	</div>
</div>
