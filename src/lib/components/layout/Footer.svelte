<script>
	import { page } from '$app/state';
	import { random_quote } from '$lib/utils';

	import Contact from '../Contact.svelte';
	import Socials from '../Socials.svelte';

	let description = $state('');

	$effect(() => {
		if (
			page.url.pathname !== '/' &&
			page.url.pathname !== '/portfolio' &&
			page.url.pathname !== '/theater'
		)
			description = random_quote();
		else
			description =
				'Deep passion for creative endeavors is what drives me to create and help people create.';
	});
</script>

<hr class="invisible mt-12" />
{#if page.url.pathname === '/' || page.url.pathname === '/portfolio'}
	<Contact />
{/if}
<footer class="flex w-screen flex-col bg-black p-8 text-white md:px-24 md:py-12 lg:px-48">
	<div class="flex flex-col items-center justify-between sm:flex-row">
		<div class="mb-6 flex flex-col sm:m-0">
			<div class="flex items-center gap-4">
				<enhanced:img src="/static/img/r97LogoV3.png?w=80" alt="roaming97 icon" />
				<div class="flex flex-col gap-2">
					<p class="text-xl font-bold text-brand-a sm:text-2xl">roaming97</p>
					<p class="text-xs md:max-w-80 md:text-sm">
						{description}
					</p>
				</div>
			</div>
		</div>
		<Socials />
	</div>
	<p class="my-4 flex flex-col border-t border-dark pt-4">
		<span class="text-xs text-white">&copy; 2025 roaming97</span>
		<span class="text-xs font-black text-brand-a">Website 6.5</span>
	</p>
</footer>
