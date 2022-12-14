/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      padding: '5rem',
      center: true
    },
    extend: {
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
    debugScreens: {
      position: ['bottom', 'left'],
      style: {
        backgroundColor: '#262626e6',
        borderRadius: '4px',
        boxShadow: 'none',
        color: 'white',
        padding: '8px',
        margin: '18px 16px',
        opacity: '100%',
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
  ],
}
