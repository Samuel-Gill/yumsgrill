/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        luxe: {
          50: "#fffbea",
          200: "#fce58f",
          400: "#f7c948",
          500: "#d9a404"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(247, 201, 72, 0.28)",
        card: "0 20px 40px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "luxe-radial": "radial-gradient(circle at top, rgba(247,201,72,0.12), transparent 48%)"
      }
    }
  },
  plugins: []
};
