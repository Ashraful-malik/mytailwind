export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: "Mytailwind",
    htmlAttrs: {
      lang: "en",
    },
    script: [
      {
        src: "https://umami-production-55c0.up.railway.app/umami.js",
        async: true,
        "data-website-id": "8f749b38-eaa8-4269-8b21-5af3573b040b",
      },
    ],

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },

      // seo social cards
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "https://mytailwind.xyz/_nuxt/img/logo.606ea04.png",
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "https://mytailwind.xyz",
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
      },

      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Mytailwind- Customize and copy tailwind components ",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Mytailwind is a website that allows you to easily copy and customize Tailwind components with just a few clicks.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://mytailwind.xyz/_nuxt/img/logo.606ea04.png",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Mytailwind-Customize and copy tailwind components",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Mytailwind is a website that allows you to easily copy and customize Tailwind components with just a few clicks.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://mytailwind.xyz/_nuxt/img/logo.606ea04.png",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://mytailwind.xyz/_nuxt/img/logo.606ea04.png",
      },
    ],
    link: [
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
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/src/main", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontawesome",
  ],

  googleFonts: {
    display: "swap",
    download: true,
    overwriting: false,
    families: {
      Roboto: true,
      Inter: [300, 400, 500, 600, 700],
    },
  },

  loading: "~/components/loading.vue",

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true,
  },

  // fontawesome icons
  fontawesome: {
    components: "fa",
    suffix: true,
    icons: {
      solid: [
        "faHouse",
        "faBars",
        "faUser",
        "faTable",
        "faGauge",
        "faFire",
        "faArrowRightFromBracket",
        "faGear",
        "faCode",
        "faArrowRight",
        "faArrowUpRightFromSquare",
        "faCopy",
      ],
      brands: ["faTwitter", "faSquareBehance", "faFacebook", "faDev"],
    },
  },
};
