const js = require('@eslint/js')
const eslintConfigPrettier = require('eslint-config-prettier/flat')
const { defineConfig, globalIgnores } = require('eslint/config')
const globals = require('globals')

module.exports = defineConfig([
  globalIgnores(['**/eslint.config.*', '**/.eslintrc.*']),
  { linterOptions: { reportUnusedDisableDirectives: 'off' } },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.node, ...globals.commonjs }
    }
  },
  eslintConfigPrettier,
  {
    rules: {
      // Enforce return statements in callbacks of array methods
      'array-callback-return': 'warn',

      // Enforce the use of variables within the scope they are defined
      'block-scoped-var': 'warn',

      // Enforce camelcase naming convention
      camelcase: ['warn', { properties: 'never' }],

      // Enforce dot notation whenever possible
      'dot-notation': 'warn',

      // Require the use of === and !==
      eqeqeq: 'warn',

      // Require function names to match the name of the variable or property to which they are assigned
      'func-name-matching': 'warn',

      // Require or disallow logical assignment operator shorthand
      'logical-assignment-operators': 'warn',

      // Require constructor names to begin with a capital letter
      'new-cap': ['warn', { capIsNew: false, properties: false }],

      // Disallow the use of console
      'no-console': ['warn', { allow: ['warn', 'error', 'clear'] }],

      // Disallow empty character classes in regular expressions
      'no-empty': ['warn', { allowEmptyCatch: true }],

      // Disallow the use of eval()
      'no-eval': 'error',

      // Disallow unnecessary calls to .bind()
      'no-extra-bind': 'warn',

      // Disallow the use of eval()-like methods
      'no-implied-eval': 'error',

      // Disallow variable or function declarations in nested blocks
      'no-inner-declarations': 'off',

      // Disallow if statements as the only statement in else blocks
      'no-lonely-if': 'warn',

      // Disallow comparisons where both sides are exactly the same
      'no-self-compare': 'warn',

      // Disallow initializing variables to undefined
      'no-undef-init': 'warn',

      // Disallow ternary operators when simpler alternatives exist
      'no-unneeded-ternary': 'warn',

      // Disallow unused expressions
      'no-unused-expressions': 'warn',

      // Disallow unused variables
      'no-unused-vars': 'off',

      // Disallow unnecessary computed property keys in objects and classes
      'no-useless-computed-key': 'warn',

      // Disallow redundant return statements
      'no-useless-return': 'warn',

      // Require let or const instead of var
      'no-var': 'warn',

      // Require or disallow method and property shorthand syntax for object literals
      'object-shorthand': 'warn',

      // Require using arrow functions for callbacks
      'prefer-arrow-callback': 'warn',

      // Require const declarations for variables that are never reassigned after declared
      'prefer-const': ['warn', { destructuring: 'all' }],

      // Require rest parameters instead of arguments
      'prefer-rest-params': 'warn',

      // Enforce the consistent use of the radix argument when using parseInt()
      radix: 'error',

      // Disallow async functions which have no await expression
      'require-await': 'off'
    }
  }
])
