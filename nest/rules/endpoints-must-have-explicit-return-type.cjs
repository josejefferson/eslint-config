const { ESLintUtils } = require('@typescript-eslint/utils')
const { isController, isControllerMethod } = require('../utils/helpers.cjs')

const createRule = ESLintUtils.RuleCreator((name) => 'https://github.com/josejefferson/eslint-config/tree/main/nest')

const endpointsMustHaveExplicitReturnType = createRule({
  name: 'endpoints-must-have-explicit-return-type',
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'Endpoints must have an explicit return type'
    },
    schema: [],
    messages: {
      missingReturnType: 'Method "{{name}}" is an endpoint and must declare an explicit return type.'
    }
  },

  create(context) {
    return {
      ClassDeclaration(node) {
        if (!isController(node)) return

        for (const member of node.body.body) {
          if (isControllerMethod(member) && !member.value.returnType) {
            context.report({
              node: member.key,
              messageId: 'missingReturnType',
              data: { name: member.key.name }
            })
          }
        }
      }
    }
  }
})

module.exports = endpointsMustHaveExplicitReturnType
