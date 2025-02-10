import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	theme: {
		colors: {
			gray: colors.zinc,
			accent: colors.indigo,
			emerald: colors.emerald,
			white: colors.white,
			black: colors.black,
			transparent: colors.transparent
		},
		extend: {
			fontFamily: {
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [typography()]
} satisfies Config;
