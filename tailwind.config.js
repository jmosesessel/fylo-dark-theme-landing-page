/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/index.html',
    './src/**/*.{html,js,jsx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'dark-blue-intro': 'hsl(217, 28%, 15%)',
      'dark-blue-main': 'hsl(218, 28%, 13%)',
      'dark-blue-footer': 'hsl(216, 53%, 9%)',
      'dark-blue-testimonials': 'hsl(219, 30%, 18%)',
      'cyan': 'hsl(176, 68%, 64%)',
      'blue': 'hsl(198, 60%, 50%)',
      'light-red': 'hsl(0, 100%, 63%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      'Raleway': ['Raleway', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],

    },
    extend: {},
  },
  plugins: [],
}

