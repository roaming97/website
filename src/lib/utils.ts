import { type ClassValue, clsx } from 'clsx';

import { twMerge } from 'tailwind-merge';

import type { LavenderEntry } from './types';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

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
		'These quotes are randomly generated in some pages within the nook!',
		'You might have noticed that the text here is different from the main pages of my website.',
		'These quotes only appear when visiting more personal pages in the site.',
		'If you refresh this page you might get a different footer text!',
		'This random quote concept is a throwback to the first two versions of my website.',
		"The contents of this footer might reveal some trivia about the website's author.",
		'This website was mainly written using SvelteKit.',
		"I began with this 'project' by making meme videos back in 2016-2017.",
		'I own the plush version of a smart ice fairy.',
		'My nickname actually dates back to 2017, but my 2016 alias stuck along for historical purposes.',
		'I currently run Linux on my machine.',
		"My favorite music album is 'Random Access Memories' by Daft Punk."
	];
	const index = Math.floor(Math.random() * quotes.length);
	return quotes[index];
}

export function request_lavender_file(server_url: string, api_key: string, path: string) {
	return new Promise<LavenderEntry>((resolve, reject) => {
		fetch(`${server_url}/file?path=${path}`, {
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

export function b64_to_image(b64: string, format = 'png') {
	return `data:image/${format};base64,${b64}`;
}
