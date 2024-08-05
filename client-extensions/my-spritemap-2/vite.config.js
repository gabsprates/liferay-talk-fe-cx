import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";
import { defineConfig } from "vite";
import { globSync } from "glob";
import { dirname, parse } from "path";
import { copyFileSync, existsSync, mkdirSync } from "fs";

export default defineConfig({
    build: {
        outDir: "build/static",
    },
    plugins: [
        {
            name: "copy-clay-icons",
            buildStart: () => {
                const destination = "./src/build/__clay";

                if (!existsSync(destination)) {
                    mkdirSync(destination, { recursive: true });
                }

                const clayIconsPath = dirname(
                    require.resolve("@clayui/css/lib/images/icons/icons.svg")
                );

                const clayIcons = globSync(`${clayIconsPath}/!(icons).svg`);

                clayIcons.forEach((icon) => {
                    const { base: filename } = parse(icon);
                    copyFileSync(icon, `${destination}/${filename}`);
                });
            },
        },
        VitePluginSvgSpritemap("./src/**/*.svg", {
            prefix: false,
            output: {
                use: false,
                view: false,
                filename: "[name][extname]",
            },
        }),
    ],
});
