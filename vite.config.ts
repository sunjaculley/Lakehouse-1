import path from "path";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { componentTagger } from "lovable-tagger";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

// @griffel/core re-exports its constants with `export * from './constants.js'`.
// The bundler used by the framework plugin drops that wildcard re-export, so
// `RESET` (imported by @griffel/react, a dependency of the KPMG design system)
// goes missing and the build fails. Rewrite it into explicit named exports.
function griffelWildcardExportFix() {
  const NAMES = [
    "DEBUG_RESET_CLASSES",
    "DEFINITION_LOOKUP_TABLE",
    "DATA_BUCKET_ATTR",
    "DATA_PRIORITY_ATTR",
    "DATA_CONTAINER_ATTR",
    "HASH_PREFIX",
    "RESET_HASH_PREFIX",
    "SEQUENCE_HASH_LENGTH",
    "SEQUENCE_PREFIX",
    "DEBUG_SEQUENCE_SEPARATOR",
    "SEQUENCE_SIZE",
    "LOOKUP_DEFINITIONS_INDEX",
    "LOOKUP_DIR_INDEX",
    "UNSUPPORTED_CSS_PROPERTIES",
    "RESET",
  ];
  return {
    name: "griffel-wildcard-export-fix",
    enforce: "pre" as const,
    transform(code: string, id: string) {
      if (!id.includes("@griffel/core") || !id.endsWith("index.js")) return null;
      if (!code.includes("export * from './constants.js'")) return null;
      return {
        code: code.replace(
          "export * from './constants.js';",
          `export { ${NAMES.join(", ")} } from './constants.js';`,
        ),
        map: null,
      };
    },
  };
}

export default defineConfig(({ command, mode }) => {
  // Cloudflare Workers plugin only on build (produces the worker output);
  // the workerd runtime isn't available for the dev server.
  const useCloudflare = command === "build";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      griffelWildcardExportFix(),
      mockupPreviewPlugin(),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      ...(useCloudflare ? [cloudflare({ viteEnvironment: { name: "ssr" } })] : []),
      tanstackStart(),
      viteReact(),
      ...(mode === "development" ? [componentTagger()] : []),
    ],
  };
});
