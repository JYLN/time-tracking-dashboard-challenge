import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: {
				blue: '#5747EA',
				lightred: '#FF5E7D',
				lightorange: '#FF8B64',
				lightyellow: '#F1C75B',
				limegreen: '#4BCF82',
				softblue: '#55C2E6',
				violet: '#7335D2'
			},
			neutral: {
				darkblue: '#1C204B',
				desaturatedblue: '#7078C9',
				paleblue: '#BBC0FF',
				verydarkblue: '#0E1323',
				white: '#FFFFFF'
			}
		},
		extend: {
			boxShadow: {
				profile: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)'
			},
			fontFamily: {
				rubik: ['"Rubik Variable"', ...fontFamily.sans]
			},
			fontSize: {
				15: ['0.9375rem', { lineHeight: 'normal' }],
				18: ['1.125rem', { lineHeight: 'normal' }],
				24: ['1.5rem', { lineHeight: 'normal' }],
				32: ['2rem', { lineHeight: 'normal' }]
			}
		}
	},

	plugins: []
} satisfies Config;
