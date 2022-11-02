module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["./index", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  settings: {
    react: { version: "detect" },
  },
  rules: {
    "jsx-a11y/no-redundant-roles": 0,
  },
};
