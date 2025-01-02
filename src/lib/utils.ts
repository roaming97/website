import type { LavenderEntry } from './types';

export function r97_age(): number {
	const year = 365.25 * 24 * 60 * 60 * 1000; // 366 days every four years
	return Math.floor((Date.now() - new Date('2016/05/03').valueOf()) / year);
}

export function relative_time(d: Date) {
	const fmt = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
	const dif = Number(new Date()) - Number(new Date(Date.parse(d.toString())));
	const elapsed = dif / (24 * 60 * 60 * 1000);
	if (elapsed >= 365) {
		return fmt.format(Math.floor(-elapsed / 365) + 1, 'years');
	} else if (elapsed >= 30) {
		return fmt.format(Math.floor(-elapsed / 30) + 1, 'months');
	} else {
		return fmt.format(Math.floor(-elapsed) + 1, 'days');
	}
}

export function parse_date(d: Date) {
	const new_date = new Date(Date.parse(d.toString()));

	const month = String(new_date.getMonth() + 1).padStart(2, '0');
	const day = String(new_date.getDate()).padStart(2, '0');
	const year = new_date.getFullYear();

	return `${year}.${month}.${day}`;
}

export function file_stem(filename: string) {
	return filename.trim().toLowerCase().split('.')[0].split('_').pop()?.split('/').pop();
}

export function random_quote() {
	const quotes = [
		'Random quote #1: These quotes are randomly generated in some pages!',
		'Random quote #2: You might have noticed that the text here is different from the main pages of my website.',
		'Random quote #3: These quotes only appear when visiting more personal pages in the site.',
		'Random quote #4: If you refresh this page you might get a different footer text!',
		'Random quote #5: This random quote concept is a throwback to the first two versions of my website.',
		"Random quote #6: The contents of this footer might reveal some trivia about the website's author.",
		'Random quote #7: This website was mainly written using SvelteKit.'
	];
	const index = Math.floor(Math.random() * quotes.length);
	return quotes[index];
}

export function request_everyday(url: string, api_key: string, filename: string) {
	return new Promise<LavenderEntry>((resolve, reject) => {
		fetch(`${url}/file?path=artwork/everydays/thumbnails/${filename}`, {
			method: 'GET',
			headers: {
				'lav-api-key': api_key
			}
		})
			.then((res) => {
				if (!res.ok) {
					return reject(new Error(`${res.status}: ${res.statusText}`));
				}
				return res.json();
			})
			.then((json) => {
				resolve(json as LavenderEntry);
			})
			.catch((e) => {
				console.error(e);
				reject(e);
			});
	});
}
