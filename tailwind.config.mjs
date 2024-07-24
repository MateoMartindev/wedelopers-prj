/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'text-1': '#24223e',
		},
		typography: (theme) => ({
		  DEFAULT: {
			css: {
			  h1: {
				fontSize: 'initial',
				fontWeight: 'initial',
			  },
			  h2: {
				fontSize: 'initial',
				fontWeight: 'initial',
			  },
			  h3: {
				fontSize: 'initial',
				fontWeight: 'initial',
			  },
			  h4: {
				fontSize: 'initial',
				fontWeight: 'initial',
			  },
			  h5: {
				fontSize: 'initial',
				fontWeight: 'initial',
			  },
			  h6: {
				fontSize: 'initial',
				fontWeight: 'initial',
			  },
			},
		  },
		}),
	  },
	},
	plugins: [require('@tailwindcss/typography')],
  }