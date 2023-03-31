// import("tailwindcss").Config;

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
