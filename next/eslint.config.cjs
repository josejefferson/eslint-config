const eslintConfigTypescript = require('@josejefferson/eslint-config-typescript')
const eslintConfigReact = require('@josejefferson/eslint-config-react')
const nextPlugin = require('@next/eslint-plugin-next')
const { defineConfig, globalIgnores } = require('eslint/config')

module.exports = defineConfig([
  globalIgnores(['**/next.config.*', '.next', 'public']),
  eslintConfigTypescript,
  eslintConfigReact,
  {
    plugins: {
      '@next/next': nextPlugin
    }
  },
  {
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...nextPlugin.configs.recommended.rules
    }
  }
])
