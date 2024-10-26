/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-image': "url('src/assets/images/employee-1.jpeg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.nth-child': {
          '&:nth-child(even)': {
            backgroundColor: '#eee6e6',
            transition : 'all 0.3s'
          },
          '&:nth-child(even):hover': {
            backgroundColor: '#e5e7eb',
          },
          '&:nth-child(odd)': {
            backgroundColor: '#eee6e6',
            transition : 'all 0.3s'
          },
          '&:nth-child(odd):hover': {
            backgroundColor: '#f3f4f6',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}