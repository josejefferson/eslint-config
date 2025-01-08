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
    "@josejefferson/eslint-config-typescript",
    "@josejefferson/eslint-config-react",
    "plugin:react-hooks/recommended"
  ]
}
```

### With Next.js

```fish
npm install -D eslint-config-next

yarn add -D eslint-config-next

bun add -D eslint-config-next
```

`.eslintrc.json`

```json
{
  "extends": ["next", "@josejefferson/eslint-config-typescript", "@josejefferson/eslint-config-react"]
}
```
