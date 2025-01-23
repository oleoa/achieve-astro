/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#1e40af",
      },
      spacing: {
        "margin-x": "7rem",
      },
    },
  },
  plugins: [],
};
