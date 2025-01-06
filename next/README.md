# ESLint config Next.js

This package provides ESLint configuration for Next.js projects.

It is recommended to use this package alongside [`@josejefferson/eslint-config-typescript`](https://www.npmjs.com/package/@josejefferson/eslint-config-typescript).

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@josejefferson/eslint-config-next)
![Downloads](https://img.shields.io/npm/dm/@josejefferson/eslint-config-next?style=for-the-badge)
![Version](https://img.shields.io/npm/v/@josejefferson/eslint-config-next?style=for-the-badge&label=Version)

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
