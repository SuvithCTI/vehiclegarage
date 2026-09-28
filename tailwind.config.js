/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        palette: {
          bg: '#F8FAFC',           // Main Background (Clean light slate)
          bgSecondary: '#FFFFFF',  // Secondary Background (Pure white)
          card: '#FFFFFF',         // Cards
          cardLight: '#F1F5F9',    // Card hover / lighter
          primary: '#E53935',      // Primary Colour (Vibrant Red)
          primaryHover: '#d32f2f', // Darker primary
          accent: '#475569',       // Slate Accent
          highlight: '#D97706',    // Highlight (Warm Amber/Orange)
          highlightHover: '#b45309',
          textMain: '#0F172A',     // Main Text (Dark slate)
          textMuted: '#64748B',    // Secondary Text (Medium Slate)
        },
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#E53935',          // Palette Primary Red
          600: '#d32f2f',
          700: '#c62828',
          800: '#b71c1c',
          900: '#991b1b',
          amber: '#D97706',        // Palette Highlight Amber
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
