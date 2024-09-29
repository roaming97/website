export function find_cookie(query: string) {
	const cookie = document.cookie
		.split('; ')
		.find((row) => row.startsWith(`${query}=`))
		?.split('=')[1];
	// console.log(cookie);
	return cookie;
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
		'Random quote #1: These quotes are randomly generated on some pages!',
		'Random quote #2: You might have noticed that the text here is different from the main pages of my website.',
		'Random quote #3: These quotes only appear when visiting more personal pages in the site.',
		'Random quote #4: If you refresh this page you might get a different footer text!',
		"Random quote #5: The contents of this footer might reveal some trivia about the website's author."
	];
	const index = Math.floor(Math.random() * quotes.length);
	return quotes[index];
}
