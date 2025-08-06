module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Enforce newlines at end of files
    "eol-last": ["error", "always"],
    // No trailing whitespace
    "no-trailing-spaces": "error",
    // Consistent line endings
    "linebreak-style": ["error", "unix"],
    // No unused variables (but allow unused function parameters with underscore prefix)
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  ignorePatterns: ["_site/**", "node_modules/**", "*.min.js", "dist/**"],
};
