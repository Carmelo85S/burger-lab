/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        burger: {
          bun: "#F5D6A1",        // Light toasted bun
          meat: "#7B3F00",       // Grilled patty brown
          cheese: "#FFB400",     // Melted cheddar
          lettuce: "#4CAF50",    // Fresh green
          tomato: "#E63946",     // Juicy red tomato
          sauce: "#D2691E",      // Smoky sauce / BBQ
          dark: "#2E1A0F",       // Deep brown for contrast
          light: "#FFF8E1",      // Soft background tone
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-5px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
