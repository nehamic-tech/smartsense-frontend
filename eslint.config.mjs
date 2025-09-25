import antfu from "@antfu/eslint-config";
import css from "@eslint/css";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(antfu({
  type: "app",
  typescript: true,
  vue: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      singleline: "never",
      multiline: "never",
    }],
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": "warn",
    "node/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "perfectionist/sort-imports": ["error", { tsconfigRootDir: "." }],
    "css/no-empty-blocks": "error",
  },
  plugins: {
    css,
  },
  language: "css/css",
}),
);
