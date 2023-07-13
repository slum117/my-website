/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "var(--primary)",
        "on-primary" : "var(--on-primary)",
        "secondary" : "var(--secondary)",
        "on-secondary" : "var(--on-secondary)",
        "surface" : "var(--surface)",
        "on-surface" : "var(--on-surface)"
      },
    },
  },
  plugins: [],
}

