/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./Componentes/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
