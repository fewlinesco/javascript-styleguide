# Fewlines Javascript Styleguide

Disclaimer: this package is made for our internal usage and is only open source for convenience so
we might not consider Pull Requests or Issues. Feel free to fork though.

This package includes the different styles we apply to our JavaScript and TypeScript code.

⚠️ As this plugin wants to use a minimalist configuration, it relies on using prettier via ESLint
which means you could have to configure your editor. The goal is to not have the editor run prettier
directly as it would conflict with ESLint.

## General rules

To enforce consistency throughout our imports and exports, we are using
https://www.npmjs.com/package/eslint-plugin-import[eslint-plugin-import].

### Import

The set of rules we chose to organize our imports are the following groups:

- Built in and externals
- Parents, siblings, indexes and path aliases

```js
import { IncomingMessage, ServerResponse } from "http";
import React from "react";

import { CustomError } from "@src/errors";
import { Handler } from "./handler";
```

## Usage

This plugin offer several configurations depending on your project type.

```shell
yarn add -DE @fewlines/javascript-styleguide
```

Add these lines to your package.json:

```json
"eslintConfig": {
  "extends": [
    "./node_modules/@fewlines/javascript-styleguide/node"
  ]
},
"prettier": "@fewlines/javascript-styleguide/prettier"
```

### TypeScript project

Then add these lines to your package.json:

```json
"eslintConfig": {
  "extends": "@fewlines/javascript-styleguide/typescript"
}
```

The TypeScript plugin extends the previous Node plugin so it is not needed.

### React project

Then add these lines to your package.json:

```json
"eslintConfig": {
  "extends": "@fewlines/javascript-styleguide/react"
}
```

The React plugin extends the previous Node plugin so it is not needed.

### React + TypeScript project

⚠️ This preset only aim to remove the `prop-types` checks. You should use it along the `react` and
`typescript` presets.

Then add these lines to your `package.json`:

```json
"eslintConfig": {
  "extends": [
    "@fewlines/javascript-styleguide/typescript",
    "@fewlines/javascript-styleguide/react",
    "@fewlines/javascript-styleguide/react-typescript"
  ]
}
```

The React + Typescript plugin extends the previous Node plugin so it is not needed.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
