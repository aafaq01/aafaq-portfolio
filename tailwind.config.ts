import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A0A', // Darker background
          light: '#FFFFFF',
        },
        primary: {
          DEFAULT: '#00DC82', // Green accent
          dark: '#00B368',
          light: '#33E59C',
        },
        secondary: {
          DEFAULT: '#1A1A1A', // Card background
          dark: '#141414',
          light: '#2A2A2A',
        },
        text: {
          primary: {
            DEFAULT: '#FFFFFF',
            light: '#0A0A0A',
          },
          secondary: {
            DEFAULT: '#888888',
            light: '#666666',
          }
        },
        border: {
          DEFAULT: '#1A1A1A',
          hover: '#333333',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config 