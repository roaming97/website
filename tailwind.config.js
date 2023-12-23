/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			primary: ['unbounded', 'sans-serif'],
			mono: ['fira-code', 'monospace']
		},
		extend: {
			colors: {
				brand: {
					a: '#9A70FF',
					b: '#7785FF',
					c: '#F18BDB'
				},
				dark: '#363047',
				darker: '#16131D',
				darkest: '#040305',
				error: '#F14545'
			},
			fontWeight: {
				blond: 250
			},
			transitionTimingFunction: {
				'quint-in-out': 'cubic-bezier(0.83, 0, 0.17, 1)'
			}
		}
	},
	plugins: []
};
