const tseslint = require('typescript-eslint')
const eslintConfigNode = require('@josejefferson/eslint-config-node')
const { globalIgnores } = require('eslint/config')

module.exports = tseslint.config([
  globalIgnores(['dist']),
  eslintConfigNode,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  },
  {
    rules: {
      // Disallow @ts-<directive> comments or require descriptions after directives
      '@typescript-eslint/ban-ts-comment': 'off',

      // Disallow accidentally using the "empty object" type
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],

      // Disallow the any type
      '@typescript-eslint/no-explicit-any': 'off',

      // Disallow Promises in places not designed to handle them
      '@typescript-eslint/no-misused-promises': 'off',

      // Disallow TypeScript namespaces
      '@typescript-eslint/no-namespace': 'off',

      // Disallow non-null assertions after an optional chain expression
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

      // Disallow non-null assertions using the ! postfix operator
      '@typescript-eslint/no-non-null-assertion': 'off',

      // Disallow aliasing this
      '@typescript-eslint/no-this-alias': 'off',

      // Disallow type assertions that do not change the type of an expression
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

      // Disallow calling a function with a value with type any
      '@typescript-eslint/no-unsafe-argument': 'off',

      // Disallow assigning a value with type any to variables and properties
      '@typescript-eslint/no-unsafe-assignment': 'off',

      // Disallow calling a value with type any
      '@typescript-eslint/no-unsafe-call': 'off',

      // Disallow member access on a value with type any
      '@typescript-eslint/no-unsafe-member-access': 'off',

      // Disallow returning a value with type any from a function
      '@typescript-eslint/no-unsafe-return': 'off',

      // Disallow unused variables
      '@typescript-eslint/no-unused-vars': 'off',

      // Disallow unnecessary template expressions
      '@typescript-eslint/no-unnecessary-template-expression': 'warn',

      // Disallow async functions which have no await expression
      '@typescript-eslint/require-await': 'off',

      // Enforce template literal expressions to be of string type
      '@typescript-eslint/restrict-template-expressions': 'off',

      // Enforce unbound methods are called with their expected scope
      '@typescript-eslint/unbound-method': 'off'
    }
  }
])
