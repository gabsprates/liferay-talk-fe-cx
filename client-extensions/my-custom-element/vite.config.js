import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./testSetup.js",
    },

    base: "/o/my-custom-element",
    plugins: [react()],
    build: {
        outDir: "./vite-build",

        rollupOptions: {
            external: [
                // "react",
                // "react-dom",
                // /^my-js-import-maps-entry(\/.*)?$/,
            ],

            output: {
                assetFileNames: "[name].[ext]",
                chunkFileNames: "[name].js",
                entryFileNames: "[name].js",
            },
        },
    },
});
