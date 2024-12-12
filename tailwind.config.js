/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Componentes/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fdbb2d: "#43c6ac", // Azul claro
        191654: "#191654", // azul oscuro
      },
    },
  },
  plugins: [],
};
