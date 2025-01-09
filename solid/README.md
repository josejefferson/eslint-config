# ESLint config SolidJS

This package provides ESLint configuration for SolidJS projects.

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@josejefferson/eslint-config-solid)
![Downloads](https://img.shields.io/npm/dm/@josejefferson/eslint-config-solid?style=for-the-badge)
![Version](https://img.shields.io/npm/v/@josejefferson/eslint-config-solid?style=for-the-badge&label=Version)

## Installation

```fish
npm install -D @josejefferson/eslint-config-solid

yarn add -D @josejefferson/eslint-config-solid

bun add -D @josejefferson/eslint-config-solid
```

## Usage

`.eslintrc.json`

```json
{
  "extends": ["@josejefferson/eslint-config-solid"]
}
```

### With Vite

```json
{
  "extends": ["@josejefferson/eslint-config-solid"],
  "ignorePatterns": ["vite.config.ts"],
  "parserOptions": {
    "project": "./tsconfig.app.json"
  }
}
```
