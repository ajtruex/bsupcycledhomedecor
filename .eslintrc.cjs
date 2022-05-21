/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "off",
  },
  env: {
    "vue/setup-compiler-macros": true,
  },
}
