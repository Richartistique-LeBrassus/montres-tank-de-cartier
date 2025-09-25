import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
        nova: ['BonaNova-Regular', 'serif'],
        monte: ['MonteCarlo-Regular', 'serif'],
        andrew: ['Andrew-ExtraLight', 'serif'],
        andrewl: ['Andrew-Light', 'serif'],
      },
    },
    screens: {
      mdp: '912px',
      axl: '1440px', 
    },
  },
  plugins: [
    // You can add any plugins here
  ],
};

export default config;