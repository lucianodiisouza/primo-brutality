import type { StorybookConfig } from "@storybook/react-native-web-vite";
import { mergeConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const uiPackage = path.resolve(dirname, "../../../packages/ui");

const config: StorybookConfig = {
  stories: [
    path.join(uiPackage, "src/**/*.mdx"),
    path.join(uiPackage, "src/**/*.stories.@(js|jsx|mjs|ts|tsx)"),
  ],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-native-web-vite",
    options: {
      modulesToTranspile: [
        "nativewind",
        "react-native-css-interop",
        "@primo-brutality/ui",
      ],
      pluginReactOptions: {
        jsxImportSource: "nativewind",
      },
    },
  },
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      resolve: {
        alias: {
          "@primo-brutality/ui": path.join(uiPackage, "src/index.ts"),
        },
      },
      build: {
        rollupOptions: {
          plugins: [
            {
              name: "nativewind-fix",
              transform(_code, id) {
                if (id.includes("react-native-css-interop")) {
                  return { moduleSideEffects: "no-treeshake" };
                }
              },
            },
          ],
        },
      },
    });
  },
};

export default config;
