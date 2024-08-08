import { defineConfig } from "vite";

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./testSetup.ts"],
    },

    build: {
        outDir: "./build/vite",
    },
});
