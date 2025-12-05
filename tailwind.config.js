/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-pink': '#ff00ff',
        'chrome': '#e0e0e0',
        'bg-dark': '#050505',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'pixel': ['VT323', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'glitch': 'glitch 2.5s infinite linear alternate-reverse',
      },
    },
  },
  plugins: [],
}
