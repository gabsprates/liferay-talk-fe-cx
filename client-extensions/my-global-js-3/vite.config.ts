import { defineConfig } from "vite";
import { glob } from "glob";

import path from "node:path";
import { fileURLToPath } from "node:url";

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./testSetup.ts"],
    },

    build: {
        outDir: "./build/vite",
        emptyOutDir: true,
        minify: false,

        lib: {
            entry: Object.fromEntries(
                glob
                    .sync("src/**/*.entry.ts")
                    .map((file) => [
                        path.relative(
                            "src",
                            file.slice(
                                0,
                                file.length - path.extname(file).length,
                            ),
                        ),

                        fileURLToPath(new URL(file, import.meta.url)),
                    ]),
            ),
            formats: ["es"],
        },

        rollupOptions: {
            output: {
                assetFileNames: "[name].[hash].[ext]",
                chunkFileNames: "[name].[hash].[format].js",
                entryFileNames: "[name].[hash].[format].js",
            },
        },
    },
});
