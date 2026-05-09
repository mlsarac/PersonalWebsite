/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#16181f',
          deep: '#0e1016',
        },
        ink: '#030712',
        'accent-blue': {
          DEFAULT: '#2563eb',
          muted: '#1d4ed8',
        },
        'accent-violet': {
          DEFAULT: '#7c3aed',
          muted: '#6d28d9',
        },
        link: '#2563eb',
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Nunito', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 48px -12px rgba(37, 99, 235, 0.2)',
        'glow-violet': '0 0 48px -12px rgba(124, 58, 237, 0.15)',
        glass: '0 1px 0 0 rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
    },
  },
  plugins: [],
};
