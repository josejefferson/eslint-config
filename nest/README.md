# ESLint config NestJS

This package provides ESLint configuration for NestJS projects.

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@josejefferson/eslint-config-nest)
![Downloads](https://img.shields.io/npm/dm/@josejefferson/eslint-config-nest?style=for-the-badge)
![Version](https://img.shields.io/npm/v/@josejefferson/eslint-config-nest?style=for-the-badge&label=Version)

## Installation

```fish
npm install -D eslint @josejefferson/eslint-config-nest

yarn add -D eslint @josejefferson/eslint-config-nest

bun add -D eslint @josejefferson/eslint-config-nest
```

## Usage

`eslint.config.mjs`

```js
import eslintConfigNest from '@josejefferson/eslint-config-nest'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  eslintConfigNest
])
```
