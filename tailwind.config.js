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
        FDBB2D: "#6F0000",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #000000, #0d0004, #16000b, #1b0012, #1e0019, #25021d, #2d0322, #360025, #480023, #58001d, #650013, #6f0000)",
      },
    },
  },
  plugins: [],
};
