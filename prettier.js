module.exports = {
  arrowParens: "always",
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.md",
      options: {
        printWidth: 100,
      },
    },
  ],
  proseWrap: "always",
  semi: true,
  trailingComma: "all",
};
