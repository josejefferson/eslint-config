# ESLint config TypeScript

This package provides ESLint configuration for TypeScript projects.

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@josejefferson/eslint-config-typescript)
![Downloads](https://img.shields.io/npm/dm/@josejefferson/eslint-config-typescript?style=for-the-badge)
![Version](https://img.shields.io/npm/v/@josejefferson/eslint-config-typescript?style=for-the-badge&label=Version)

## Installation

```fish
npm install -D eslint @josejefferson/eslint-config-typescript

yarn add -D eslint @josejefferson/eslint-config-typescript

bun add -D eslint @josejefferson/eslint-config-typescript
```

## Usage

`eslint.config.mjs`

```js
import eslintConfigTypescript from '@josejefferson/eslint-config-typescript'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  eslintConfigTypescript
])
```
