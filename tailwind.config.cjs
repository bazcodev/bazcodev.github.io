const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			...colors,
			moss: {
                DEFAULT: '#54746c',
                '50': '#eaf0ef',
                '100': '#dfe8e5',
                '200': '#bed1ca',
                '300': '#96b2aa',
                '400': '#709188',
                '500': '#54746c',
                '600': '#435e58',
                '700': '#384d48',
                '800': '#303f3c',
                '900': '#2b3634',
            },
            lime: {
                DEFAULT: '#d0d94e',
                '50': '#f7faec',
                '100': '#edf4cd',
                '200': '#dfeb9d',
                '300': '#d2df65',
                '400': '#d0d94e',
                '500': '#c2c52d',
                '600': '#aaa324',
                '700': '#887920',
                '800': '#726221',
                '900': '#625121',
            },
            peach: {
                DEFAULT: '#de974a',
                '50': '#fcf5ee',
                '100': '#f9eedb',
                '200': '#f2dab6',
                '300': '#eac187',
                '400': '#de974a',
                '500': '#d98436',
                '600': '#cb6d2b',
                '700': '#a95525',
                '800': '#874525',
                '900': '#6d3921',
            },
            sea: {
                DEFAULT: '#77b7cb',
                '50': '#f1f9fa',
                '100': '#dbedf2',
                '200': '#bbdce6',
                '300': '#77b7cb',
                '400': '#57a0b9',
                '500': '#3b849f',
                '600': '#346c86',
                '700': '#30596e',
                '800': '#2e4b5c',
                '900': '#2a404f',
            },
		},
		extend: {
            fontFamily: {
                sans: [
					'Montserrat', 
					...defaultTheme.fontFamily.sans
				],
            },
        },
	},
	plugins: [],
}
