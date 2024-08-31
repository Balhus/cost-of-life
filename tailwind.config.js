/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-1': '#191723',
        'dark-2': '#2C2538',
        'dark-3': '#372E47',
        'dark-4': '#5D547C',
        'text-gradient': 'var(--text-gradient)'
      }
    }
  },
  plugins: [],
};
