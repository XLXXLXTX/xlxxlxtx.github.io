// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const LIVE_URL = "https://xlxxlxtxx.github.io";
const SERVER_PORT = 4321;

// https://astro.build/config
export default defineConfig({
    server: {
        port: SERVER_PORT,
    },
    site: LIVE_URL,
    vite: {
        plugins: [tailwindcss()],
    },
});
