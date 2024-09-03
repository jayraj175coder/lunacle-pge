// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        lg: '1024px',
      },
      maxWidth: {
        '4xl': '100rem',
      },
    },
  },
  plugins: [],
};
