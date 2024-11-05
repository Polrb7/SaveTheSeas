import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./", // Directori root de Vite
  base: "./", // Rutes relatives per als assets
  build: {
    outDir: "dist", // Directori de sortida per al build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"), // Pàgina principal
        AboutUS: path.resolve(__dirname, "html/AboutUs.html"),
        Gallery: path.resolve(__dirname, "html/Gallery.html"),
        JoinUs: path.resolve(__dirname, "html/JoinUs.html"),
        login: path.resolve(__dirname, "html/login.html"),
        Merch: path.resolve(__dirname, "html/Merch.html"),
        Product: path.resolve(__dirname, "html/Product.html"),
        News: path.resolve(__dirname, "html/News.html"),
        register: path.resolve(__dirname, "html/register.html"),
        WhatWeDo: path.resolve(__dirname, "html/WhatWeDo.html"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true, // Per assegurar que els canvis es detecten en alguns entorns
    },
  },
});
