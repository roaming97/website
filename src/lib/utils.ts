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

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const month = months[new_date.getMonth()];
	const day = new_date.getDate();
	const year = new_date.getFullYear();

	return `${month} ${day}, ${year}`;
}

export function file_stem(filename: string) {
	return filename.trim().toLowerCase().split('.')[0].split('_').pop()?.split('/').pop();
}
