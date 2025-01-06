# ESLint config Next.js

This package provides ESLint configuration for Next.js projects.

It is recommended to use this package alongside [`@josejefferson/eslint-config-typescript`](https://www.npmjs.com/package/@josejefferson/eslint-config-typescript).

## Installation

```fish
npm install -D @josejefferson/eslint-config-typescript @josejefferson/eslint-config-next eslint-config-next

yarn add -D @josejefferson/eslint-config-typescript @josejefferson/eslint-config-next eslint-config-next

bun add -D @josejefferson/eslint-config-typescript @josejefferson/eslint-config-next eslint-config-next
```

## Usage

`.eslintrc.json`

```json
{
  "extends": ["next", "@josejefferson/eslint-config-typescript", "@josejefferson/eslint-config-next"]
}
```
