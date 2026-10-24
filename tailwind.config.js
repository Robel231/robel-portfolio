/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './index.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#020d0a',
        ink: '#06231b',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
