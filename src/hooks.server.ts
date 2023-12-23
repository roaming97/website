import type { Theme } from '$lib/types';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	let theme: Theme | null = null;
	const cookie_theme = event.cookies.get('theme');

	if (cookie_theme) {
		theme = cookie_theme as Theme;
	}

	if (theme) {
		return await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('class=""', `class="${theme}"`)
		});
	}

	return await resolve(event);
}) satisfies Handle;
