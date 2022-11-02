module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["./typescript", "./react"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "react/prop-types": 0,
  },
};
