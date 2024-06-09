/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'links': ['Josefin Sans', 'sans-serif'],
      'info': ['Raleway', 'sans-serif'],
      'logo': ['Courier Prime', 'monospace'],
    },
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}
