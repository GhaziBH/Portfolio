/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        ink: {
          50:  '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#aeb6c5',
          400: '#7f8aa0',
          500: '#5b6678',
          600: '#454e5e',
          700: '#363c49',
          800: '#1f242d',
          900: '#0b0d12',
          950: '#06080c',
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(16, 185, 129, 0.45)',
        card: '0 10px 30px -15px rgba(2, 6, 23, 0.6)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at top, rgba(16,185,129,0.18), transparent 60%)',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
