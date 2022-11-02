module.exports = {
  extends: [
    "./react-typescript",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
  ],
  rules: {
    "jsx-a11y/no-redundant-roles": "off",
  },
};
