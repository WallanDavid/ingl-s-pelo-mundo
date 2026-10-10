/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0e1a',
          surface: '#10162a',
          elevated: '#18223f',
          primary: '#3b82f6',
          indigo: '#6366f1',
          teal: '#06b6d4',
          amber: '#f59e0b',
          emerald: '#10b981',
          purple: '#8b5cf6',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.35)',
        'glow-teal': '0 0 35px -5px rgba(6, 182, 212, 0.35)',
        'glow-amber': '0 0 35px -5px rgba(245, 158, 11, 0.35)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
