/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }
  
      md: "720px",
      // => @media (min-width: 768px) { ... }
  
      lg: "960px",
      // => @media (min-width: 992px) { ... }
  
      xl: "1140px",
      // => @media (min-width: 1200px) { ... }
  
      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
  },
    extend: {},
  },
  plugins: [],
}
