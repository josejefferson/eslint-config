const { ESLintUtils } = require('@typescript-eslint/utils')
const { isController, isControllerMethod } = require('../utils/helpers.cjs')

const createRule = ESLintUtils.RuleCreator((name) => 'https://github.com/josejefferson/eslint-config/tree/main/nest')

const endpointsMustBeAsync = createRule({
  name: 'endpoints-must-be-async',
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'Endpoints must be explicitly asynchronous'
    },
    schema: [],
    messages: {
      missingAsync: 'Method "{{name}}" is an endpoint and must be declared as async.'
    }
  },

  create(context) {
    return {
      ClassDeclaration(node) {
        if (!isController(node)) return

        for (const member of node.body.body) {
          if (isControllerMethod(member) && !member.value.async) {
            context.report({
              node: member.key,
              messageId: 'missingAsync',
              data: { name: member.key.name }
            })
          }
        }
      }
    }
  }
})

module.exports = endpointsMustBeAsync
