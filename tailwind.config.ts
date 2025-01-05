import { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			primary: ['satoshi', 'sans-serif'],
			mono: ['jetbrains-mono', 'monospace']
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
				blond: '250'
			},
			transitionTimingFunction: {
				'quint-in-out': 'cubic-bezier(0.83, 0, 0.17, 1)'
			},
			dropShadow: {
				glow: '0 0 8px rgba(154, 112, 255, 0.5)',
				solid: '3px 3px 0 #C183FB99'
			},
			boxShadow: {
				solid: '8px 8px 0 0 #C183FB'
			},
			animation: {
				bg_scroll: 'bg_scroll 20s ease infinite',
				slight_bounce: 'slight_bounce 1s infinite'
			},
			keyframes: {
				bg_scroll: {
					'0%, 100%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' }
				},
				slight_bounce: {
					'0%, 100%': {
						transform: 'translateY(-10%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'none',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				}
			},
			zIndex: {
				max: '99999999'
			}
		}
	},
	plugins: []
} satisfies Config;
