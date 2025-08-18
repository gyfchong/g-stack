const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'index.html'),
    join(__dirname, 'src/**/*.{ts,tsx,js,jsx,html}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
