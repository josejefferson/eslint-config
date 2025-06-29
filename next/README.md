# ESLint config Next.js

This package provides ESLint configuration for Next.js projects.

It is recommended to use this package alongside [`@josejefferson/eslint-config-typescript`](https://www.npmjs.com/package/@josejefferson/eslint-config-typescript) if you are using TypeScript.

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@josejefferson/eslint-config-next)
![Downloads](https://img.shields.io/npm/dm/@josejefferson/eslint-config-next?style=for-the-badge)
![Version](https://img.shields.io/npm/v/@josejefferson/eslint-config-next?style=for-the-badge&label=Version)

## Installation

```fish
npm install -D eslint @josejefferson/eslint-config-next @josejefferson/eslint-config-typescript

yarn add -D eslint @josejefferson/eslint-config-next @josejefferson/eslint-config-typescript

bun add -D eslint @josejefferson/eslint-config-next @josejefferson/eslint-config-typescript
```

## Usage

`eslint.config.mjs`

```js
import eslintConfigNext from '@josejefferson/eslint-config-next'
import eslintConfigTypescript from '@josejefferson/eslint-config-typescript'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  eslintConfigTypescript,
  eslintConfigNext
])
```
