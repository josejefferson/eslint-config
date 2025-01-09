module.exports = {
  extends: ['@josejefferson/eslint-config-node', 'plugin:react/recommended'],
  settings: { react: { version: 'detect' } },
  env: { browser: true },
  rules: {
    /*
      ╦═╗╔═╗╔═╗╔═╗╔╦╗
      ╠╦╝║╣ ╠═╣║   ║ 
      ╩╚═╚═╝╩ ╩╚═╝ ╩ 
    */

    // Disallow missing displayName in a React component definition
    'react/display-name': 'off',

    // Enforce a specific function type for function components
    'react/function-component-definition': ['warn'],

    // Ensure destructuring and symmetric naming of useState hook value and setter variables
    'react/hook-use-state': ['warn'],

    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': ['warn'],

    // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
    'react/jsx-curly-brace-presence': ['warn'],

    // Enforce shorthand or standard form for React fragments
    'react/jsx-fragments': ['warn'],

    // Disallow missing key props in iterators/collection literals
    'react/jsx-key': ['error'],

    // Disallows JSX context provider values from taking values that will cause needless rerenders
    'react/jsx-no-constructed-context-values': ['warn'],

    // Disallow target="_blank" attribute without rel="noreferrer"
    'react/jsx-no-target-blank': ['warn'],

    // Disallow unnecessary fragments
    'react/jsx-no-useless-fragment': ['warn'],

    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': ['warn', { allowAllCaps: true }],

    // Disallow passing of children as props
    'react/no-children-prop': 'off',

    // Disallow usage of dangerous JSX properties
    'react/no-danger': ['error'],

    // Disallow creating unstable components inside components
    'react/no-unstable-nested-components': ['warn'],

    // Enforce stateless components to be written as a pure function
    'react/prefer-stateless-function': ['warn'],

    // Disallow missing props validation in a React component definition
    'react/prop-types': ['off'],

    // Disallow missing React when using JSX
    'react/react-in-jsx-scope': ['off'],

    // Disallow extra closing tags for components without children
    'react/self-closing-comp': ['warn'],

    // Disallow void DOM elements (e.g. <img />, <br />) from receiving children
    'react/void-dom-elements-no-children': ['error']
  }
}
