module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: [2, "always"],
    "space-before-function-paren": ["error", 'never'],
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "only-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "never"
  }]
  },
};
