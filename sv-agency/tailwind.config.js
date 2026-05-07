/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        foreground: '#fafafa',
        primary: '#e4e4e7',
        'primary-foreground': '#09090b',
        secondary: '#18181b',
        'secondary-foreground': '#fafafa',
        muted: '#a1a1aa',
        'muted-foreground': '#a1a1aa',
        accent: '#27272a',
        'accent-foreground': '#fafafa',
        border: '#27272a',
      },
      fontFamily: {
        'geist': ['Geist', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
