/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Bearshop Farbpalette - Grün, Blau, Schwarz & Weiß
      colors: {
        brandGreen: '#6bb536',    // Hauptfarbe Grün
        brandBlue: '#2f4b96',     // Akzentfarbe Blau
        deepBlack: '#000000',     // Schwarz
        pureWhite: '#FFFFFF',     // Weiß
        lightGray: '#F5F5F5',     // Heller Hintergrund
        // Legacy-Namen für Kompatibilität (werden ersetzt)
        gummyRed: '#6bb536',      // -> brandGreen
        gummyOrange: '#2f4b96',   // -> brandBlue
        gummyYellow: '#6bb536',   // -> brandGreen
        gummyGreen: '#6bb536',    // -> brandGreen
        gummyBlue: '#2f4b96',     // -> brandBlue
        gummyPurple: '#2f4b96',   // -> brandBlue
        candyWhite: '#FFFFFF',    // -> pureWhite
        nightBlue: '#000000',     // -> deepBlack
      },

      // Custom Fonts - Jelly Design System
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        jost: ['Jost', 'system-ui', 'sans-serif'],
      },

      // Custom Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },

      // Custom Border Radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // Custom Box Shadow
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 15px rgba(107, 181, 54, 0.3)',
      },

      // Jelly Design System - Animationen
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'jelly-bounce': 'jellyBounce 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
        'scroll-left': 'scrollLeft 30s linear infinite',
        'scroll-right': 'scrollRight 30s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      // Jelly Design System - Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        jellyBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(107, 181, 54, 0.4), 0 0 40px rgba(107, 181, 54, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(107, 181, 54, 0.6), 0 0 60px rgba(107, 181, 54, 0.3)',
          },
        },
      },
    },
  },
  plugins: [],
  // Optional: Enable dark mode
  darkMode: 'class',
}
