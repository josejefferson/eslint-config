const { defineConfig, globalIgnores } = require('eslint/config')
const eslintConfigTypescript = require('@josejefferson/eslint-config-typescript')
const solid = require('eslint-plugin-solid/configs/recommended')
const jsxA11y = require('eslint-plugin-jsx-a11y')

module.exports = defineConfig([
  globalIgnores(['vite.config.*', 'dist', 'public']),
  eslintConfigTypescript,
  solid,
  jsxA11y.flatConfigs.recommended,

  // JSX Accessibility (jsx-a11y) rules
  {
    rules: {
      // Enforce all anchors to contain accessible content
      'jsx-a11y/anchor-has-content': 'off',

      // Enforce that a label tag has a text label and an associated control
      'jsx-a11y/label-has-associated-control': 'off',

      // Enforce autoFocus prop is not used
      'jsx-a11y/no-autofocus': 'off',

      // tabIndex should only be declared on interactive elements
      'jsx-a11y/no-noninteractive-tabindex': 'off',

      // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute
      'jsx-a11y/no-static-element-interactions': 'off'
    }
  }
])
