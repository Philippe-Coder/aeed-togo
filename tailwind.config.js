/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f7f0',
          100: '#e9ecda',
          200: '#d4d9b6',
          300: '#b8c08b',
          400: '#9da663',
          500: '#7d8749',
          600: '#626b38',
          700: '#4a522d',
          800: '#3a4026',
          900: '#2f3422',
          950: '#1a1d12',
        },
        accent: {
          50: '#fdf6f0',
          100: '#fae8d5',
          200: '#f4cea8',
          300: '#edaa76',
          400: '#e5854a',
          500: '#dd6628',
          600: '#c54e1e',
          700: '#a33c1a',
          800: '#82321b',
          900: '#6b2c19',
          950: '#3a1509',
        },
        neutral: {
          50: '#faf7f2',
          100: '#f2ede4',
          200: '#e6dccd',
          300: '#d1c5b3',
          400: '#b8a98e',
          500: '#a08e72',
          600: '#8a7960',
          700: '#6f614f',
          800: '#5a4f42',
          900: '#4a4138',
          950: '#2a2520',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
