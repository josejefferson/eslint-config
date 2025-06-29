# ESLint config React

This package provides ESLint configuration for React projects.

It is recommended to use this package alongside [`@josejefferson/eslint-config-typescript`](https://www.npmjs.com/package/@josejefferson/eslint-config-typescript) if you are using TypeScript.

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@josejefferson/eslint-config-react)
![Downloads](https://img.shields.io/npm/dm/@josejefferson/eslint-config-react?style=for-the-badge)
![Version](https://img.shields.io/npm/v/@josejefferson/eslint-config-react?style=for-the-badge&label=Version)

## Installation

```fish
npm install -D eslint @josejefferson/eslint-config-react @josejefferson/eslint-config-typescript

yarn add -D eslint @josejefferson/eslint-config-react @josejefferson/eslint-config-typescript

bun add -D eslint @josejefferson/eslint-config-react @josejefferson/eslint-config-typescript
```

## Usage

`eslint.config.mjs`

```js
import eslintConfigReact from '@josejefferson/eslint-config-react'
import eslintConfigTypescript from '@josejefferson/eslint-config-typescript'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  eslintConfigTypescript,
  eslintConfigReact
])
```
