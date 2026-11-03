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
        // Ethiopic glyphs fall through to the system's own font (Android, Windows, Apple), so Amharic downloads nothing
        sans: ['Inter', '"Noto Sans Ethiopic"', 'Ebrima', 'Kefa', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', '"Noto Sans Ethiopic"', 'Ebrima', 'Kefa', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
