/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Jelly Design System - Gummibärchen Farbpalette
      colors: {
        gummyRed: '#FF4B5C',      // Primäre CTA
        gummyOrange: '#FF914D',   // Hover, Akzente
        gummyYellow: '#FFD93D',   // Highlights
        gummyGreen: '#6BCB77',    // Erfolg
        gummyBlue: '#4D96FF',     // Links, Icons
        gummyPurple: '#9B59B6',   // Sekundär
        candyWhite: '#FFF8F0',    // Hintergrund hell
        nightBlue: '#1E2A38',     // Dunkles Theme
      },

      // Custom Fonts - Jelly Design System
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
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
        'glow': '0 0 15px rgba(14, 165, 233, 0.3)',
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
            boxShadow: '0 0 20px rgba(255, 75, 92, 0.4), 0 0 40px rgba(255, 75, 92, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(255, 75, 92, 0.6), 0 0 60px rgba(255, 75, 92, 0.3)',
          },
        },
      },
    },
  },
  plugins: [],
  // Optional: Enable dark mode
  darkMode: 'class',
}
