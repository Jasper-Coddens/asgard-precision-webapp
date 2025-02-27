/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      'asgard-blue': '#1c2a5b' ,
      'asgard-red': '#9d1320',
      'asgard-gray': '#5e5f61',
    },
  },
  },
  plugins: [],
}

