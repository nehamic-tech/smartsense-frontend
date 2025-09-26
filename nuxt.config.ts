// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  eslint: {
    config: {
      standalone: false,
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "nuxt-translation-manager",
    "@nuxtjs/color-mode",
    "motion-v/nuxt",
    "@vueuse/nuxt",
    "@vee-validate/nuxt",
    "v-wave/nuxt",
    "vue-sonner/nuxt"
  ],

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "pt",
    locales: [
      { code: "pt", name: "Português", file: "pt.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    langDir: "../app/locales/",
    strategy: "prefix_except_default",
  },

  imports: {
    imports: [{
      from: "tailwind-variants",
      name: "tv",
    }, {
      from: "tailwind-variants",
      name: "VariantProps",
      type: true,
    }, {
      from: "vue-sonner",
      name: "toast",
      as: "useSonner",
    }],
  },

  colorMode: {
    storageKey: "frontend-color-mode",
    classSuffix: "",
  },

  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 0,
    },

    mode: "svg",
    class: "shrink-0",
    fetchTimeout: 2000,
    serverBundle: "local",
  },
});