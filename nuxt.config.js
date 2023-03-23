export default {
  // Target: https://go.nuxtjs.dev/config-target
  // ssr: false,
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Mytailwind",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },

      // seo social cards
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Mytailwind-create and copy tailwind components",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Create and copy tailwind components with few clicks ",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: this.image,
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: this.title,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: this.title,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: this.description,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: this.image,
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: this.image,
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: this.title,
      },
    ],
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/src/main", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
