const { ESLintUtils } = require('@typescript-eslint/utils')
const { hasDecorator, isController, isControllerMethod } = require('../utils/helpers.cjs')

const createRule = ESLintUtils.RuleCreator((name) => 'https://github.com/josejefferson/eslint-config/tree/main/nest')

const endpointsMustHaveHttpcode = createRule({
  name: 'endpoints-must-have-httpcode',
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: { description: 'Endpoints must use the @HttpCode decorator' },
    schema: [],
    messages: {
      missing: 'Method "{{name}}" is an endpoint and must use the @HttpCode decorator.'
    }
  },

  create(context) {
    return {
      ClassDeclaration(node) {
        if (!isController(node)) return

        for (const member of node.body.body) {
          if (isControllerMethod(member) && !hasDecorator(member, ['HttpCode'])) {
            context.report({
              node: member.key,
              messageId: 'missing',
              data: { name: member.key.name }
            })
          }
        }
      }
    }
  }
})

module.exports = endpointsMustHaveHttpcode
