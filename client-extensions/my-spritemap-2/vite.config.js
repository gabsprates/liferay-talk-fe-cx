import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";
import { defineConfig } from "vite";
import { globSync } from "glob";
import { dirname, parse } from "path";
import { copyFileSync, existsSync, mkdirSync } from "fs";

const getIconsFrom = (pattern, callback) => {
    globSync(pattern).forEach((icon) => {
        const parsed = parse(icon);
        callback(icon, { ...parsed, filename: parsed.base });
    });
};

const DESTINATION_PATH = "./build/icons";

export default defineConfig({
    build: {
        outDir: "build/static",
    },
    plugins: [
        {
            name: "copy-clay-icons",
            buildStart: () => {
                const iconReferences = new Map();

                getIconsFrom(`./src/*.svg`, (icon, { filename }) => {
                    iconReferences.set(filename, icon);
                });

                const clayIconsPath = dirname(
                    require.resolve("@clayui/css/lib/images/icons/icons.svg"),
                );

                getIconsFrom(
                    `${clayIconsPath}/!(icons).svg`,
                    (icon, { filename }) => {
                        if (iconReferences.has(filename)) return;

                        iconReferences.set(filename, icon);
                    },
                );

                if (!existsSync(DESTINATION_PATH)) {
                    mkdirSync(DESTINATION_PATH, { recursive: true });
                }

                iconReferences.forEach((icon, filename) => {
                    copyFileSync(icon, `${DESTINATION_PATH}/${filename}`);
                });
            },
        },

        VitePluginSvgSpritemap(`${DESTINATION_PATH}/*.svg`, {
            prefix: false,
            output: {
                use: false,
                view: false,
                filename: "[name][extname]",
            },
        }),
    ],
});
