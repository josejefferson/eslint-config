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

      // Require or disallow named function expressions
      'func-names': 'warn',

      // Require or disallow logical assignment operator shorthand
      'logical-assignment-operators': 'warn',

      // Require constructor names to begin with a capital letter
      'new-cap': ['warn', { capIsNew: false, properties: false }],

      // Disallow the use of console
      'no-console': ['warn', { allow: ['warn', 'error', 'clear'] }],

      // Disallow duplicate module imports
      'no-duplicate-imports': 'warn',

      // Disallow else blocks after return statements in if statements
      'no-else-return': 'warn',

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

      // Disallow function declarations that contain unsafe references inside loop statements
      'no-loop-func': 'warn',

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

      // Disallow unnecessary concatenation of literals or template literals
      'no-useless-concat': 'warn',

      // Disallow renaming import, export, and destructured assignments to the same name
      'no-useless-rename': 'warn',

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

      // Require destructuring from arrays and/or objects
      'prefer-destructuring': 'warn',

      // Require using Error objects as Promise rejection reasons
      'prefer-promise-reject-errors': 'warn',

      // Require rest parameters instead of arguments
      'prefer-rest-params': 'warn',

      // Enforce the consistent use of the radix argument when using parseInt()
      radix: 'error',

      // Disallow async functions which have no await expression
      'require-await': 'off'
    }
  }
])
