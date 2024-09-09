import { defineConfig } from "vite";
import { glob } from "glob";

import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * TODO/DISCUSS:
 * - [ ] make entrypoints as `.entry.ts` files?
 * - [ ] make output as `[name].[format].js` to build `es` and `cjs`?
 */

export default defineConfig({
    build: {
        outDir: "./build/vite",

        lib: {
            entry: Object.fromEntries(
                glob
                    .sync("lib/**/*.ts")
                    .map((file) => [
                        path.relative(
                            "lib",
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
                chunkFileNames: "[name].js",
                entryFileNames: "[name].js",
            },
        },
    },
});
