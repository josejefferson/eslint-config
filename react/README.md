# ESLint config React

This package provides ESLint configuration for React projects.

It is recommended to use this package alongside [`@josejefferson/eslint-config-typescript`](https://www.npmjs.com/package/@josejefferson/eslint-config-typescript) and [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks).

> [!WARNING]
> Don't include `eslint-plugin-react-hooks` in your project if you are using Next.js, as it already includes this plugin.

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@josejefferson/eslint-config-react)
![Downloads](https://img.shields.io/npm/dm/@josejefferson/eslint-config-react?style=for-the-badge)
![Version](https://img.shields.io/npm/v/@josejefferson/eslint-config-react?style=for-the-badge&label=Version)

## Installation

```fish
npm install -D @josejefferson/eslint-config-typescript @josejefferson/eslint-config-react eslint-plugin-react-hooks

yarn add -D @josejefferson/eslint-config-typescript @josejefferson/eslint-config-react eslint-plugin-react-hooks

bun add -D @josejefferson/eslint-config-typescript @josejefferson/eslint-config-react eslint-plugin-react-hooks
```

## Usage

`.eslintrc.json`

```json
{
  "extends": [
    "plugin:react-hooks/recommended",
    "@josejefferson/eslint-config-react",
    "@josejefferson/eslint-config-typescript"
  ]
}
```

> [!WARNING]
> The TypeScript configuration must come after the React configuration in the `extends` array.

### With Next.js

```fish
npm install -D eslint-config-next

yarn add -D eslint-config-next

bun add -D eslint-config-next
```

`.eslintrc.json`

```json
{
  "extends": ["next", "@josejefferson/eslint-config-react", "@josejefferson/eslint-config-typescript"]
}
```

### With Vite

```json
{
  "extends": [
    "plugin:react-hooks/recommended",
    "@josejefferson/eslint-config-react",
    "@josejefferson/eslint-config-typescript"
  ],
  "ignorePatterns": ["vite.config.ts"],
  "parserOptions": {
    "project": "./tsconfig.app.json"
  }
}
```
