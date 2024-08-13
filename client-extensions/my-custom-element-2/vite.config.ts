import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./testSetup.ts"],
    },

    build: {
        outDir: "./build/vite",
    },

    // eslint-disable-next-line
    plugins: [react()],
});
