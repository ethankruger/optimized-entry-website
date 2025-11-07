import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  base: "/",
  build: {
      rollupOptions: {
          input: {
              main:      resolve(__dirname, "index.html"),
              contact:   resolve(__dirname, "contact.html"),
              testimonials: resolve(__dirname, "testimonials.html"),
              download:  resolve(__dirname, "download.html"),
              whoWeAre:  resolve(__dirname, "about-us.html"),
          },
      },
  },
});
