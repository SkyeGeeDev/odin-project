/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/**/*.html"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
     },
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    colors: {
      'gray': '#F8F4F9',
      'purple': '#BEA7E5',
      'orange': '#FFD6AF'
    },
    extend: {},
  },
  plugins: [],
}

