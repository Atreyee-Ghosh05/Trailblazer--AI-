/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#020617",
        primary: "#6366f1",
        accent: "#06b6d4",
      },
      backgroundColor: {
        glass: "rgba(255, 255, 255, 0.08)",
      },
      backdropBlur: {
        glass: "10px",
      },
    },
  },
  plugins: [],
}
