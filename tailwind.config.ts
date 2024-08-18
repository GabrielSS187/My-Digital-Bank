import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        's-bg-color-primary': 'var(--s-bg-color-primary)',
        's-bg-color-secondary': 'var(--s-bg-color-secondary)',

        'color-text-1': 'var(--color-text-1)',
        'color-text-2': 'var(--color-text-2)',
        'color-text-3': 'var(--color-text-3)',
        'color-text-4': 'var(--color-text-4)',
        'color-text-5': 'var(--color-text-5)',
        'color-text-6': 'var(--color-text-6)',
        'color-text-7': 'var(--color-text-7)',
        'color-text-8': 'var(--color-text-8)',
        'color-text-9': 'var(--color-text-9)',
        'color-text-10': 'var(--color-text-10)',
        'color-text-11': 'var(--color-text-11)',
        'color-text-12': 'var(--color-text-12)',
        'color-text-13': 'var(--color-text-13)',
        'color-text-14': 'var(--color-text-14)',
        'color-text-15': 'var(--color-text-15)',
        'color-text-16': 'var(--color-text-16)',

        'btn-bg-color-1': 'var(--btn-bg-color-1)',
        'btn-bg-color-2': 'var(--btn-bg-color-2)',
        'btn-bg-color-3': 'var(--btn-bg-color-3)',
        'btn-border-color-1': 'var(--btn-border-color-1)',

        'bg-input-color-1': 'var(--bg-input-color-1)',

        'bg-ball-color-1' :'var(--bg-ball-color-1)',
        'bg-ball-color-2' :'var(--bg-ball-color-2)',
        'bg-ball-color-3' :'var(--bg-ball-color-3)',
        'bg-ball-color-4' :'var(--bg-ball-color-4)',
        'bg-ball-color-5' :'var(--bg-ball-color-5)',
        'bg-ball-color-6' :'var(--bg-ball-color-6)',
        'border-ball-color-1': 'var(--border-ball-color-1)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
