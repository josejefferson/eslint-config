# ESLint config Node.js

This package provides ESLint configuration for Node.js projects.

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@josejefferson/eslint-config-node)
![Downloads](https://img.shields.io/npm/dm/@josejefferson/eslint-config-node?style=for-the-badge)
![Version](https://img.shields.io/npm/v/@josejefferson/eslint-config-node?style=for-the-badge&label=Version)

## Installation

```fish
npm install -D eslint @josejefferson/eslint-config-node

yarn add -D eslint @josejefferson/eslint-config-node

bun add -D eslint @josejefferson/eslint-config-node
```

## Usage

`eslint.config.mjs`

```js
import eslintConfigNode from '@josejefferson/eslint-config-node'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  eslintConfigNode
])
```
