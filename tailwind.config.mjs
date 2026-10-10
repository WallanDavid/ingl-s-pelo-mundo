/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#f8fafc',
          subtle: '#f1f5f9',
          card: '#ffffff',
        },
        brand: {
          navy: '#0f172a',
          primary: '#1d4ed8',
          accent: '#2563eb',
          subtle: '#eff6ff',
          emerald: '#059669',
          amber: '#d97706',
        },
        software: {
          bg: '#090d16',
          surface: '#111827',
          card: '#161f33',
          border: '#1f293d',
        },
        luxury: {
          bg: '#06060c',
          surface: '#0d0e18',
          card: '#121422',
          border: 'rgba(255, 255, 255, 0.08)',
          accent: '#9b8fff',
          accent2: '#6c5fff',
          glow: 'rgba(155, 143, 255, 0.35)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['Outfit', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        card: '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
        software: '0 25px 50px -12px rgba(9, 13, 22, 0.35)',
      },
    },
  },
  plugins: [],
};
