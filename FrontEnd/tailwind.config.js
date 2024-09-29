/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#be185d", 
        timberwolf: "#D9D9D9", 
        platinum: "#E6E6E6",
        keppel: "#47B8B8", 
        saffron: "#F4C430", 
      },
    },
  },
  plugins: [],
};
