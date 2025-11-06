import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        index:        resolve(__dirname, "index.html"),
        testimonials: resolve(__dirname, "testimonials.html"),
        contact:      resolve(__dirname, "contact.html"),
        download:     resolve(__dirname, "download.html"),
      },
    },
  },
});
