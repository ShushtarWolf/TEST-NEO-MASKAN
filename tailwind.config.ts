import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f4ff',
          100: '#e7e9ff',
          200: '#c3c7ff',
          300: '#9fa4ff',
          400: '#6973ff',
          500: '#3546ff',
          600: '#2431cc',
          700: '#1c26a3',
          800: '#141b7a',
          900: '#0e1358'
        },
        accent: '#ff9f1c',
        dark: '#12131a',
        muted: '#6b7280'
      },
      fontFamily: {
        sans: ['var(--font-vazirmatn)', 'Vazirmatn', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        neo: '0 20px 45px -15px rgba(40, 50, 160, 0.35)'
      }
    }
  }
};

export default config;
