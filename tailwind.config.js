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
          DEFAULT: '#6eb8ff',
          muted: '#4a8fd4',
        },
        'accent-violet': {
          DEFAULT: '#a78bfa',
          muted: '#7c6bbd',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 48px -12px rgba(110, 184, 255, 0.35)',
        'glow-violet': '0 0 48px -12px rgba(167, 139, 250, 0.3)',
        glass: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
    },
  },
  plugins: [],
};
