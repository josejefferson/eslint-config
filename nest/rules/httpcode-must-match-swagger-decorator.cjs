const { ESLintUtils } = require('@typescript-eslint/utils')
const { statusDecorators } = require('../utils/constants.cjs')
const { isController, isControllerMethod } = require('../utils/helpers.cjs')

const createRule = ESLintUtils.RuleCreator((name) => 'https://github.com/josejefferson/eslint-config/tree/main/nest')

const httpcodeMustMatchSwaggerDecorator = createRule({
  name: 'httpcode-must-match-swagger-decorator',
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'Verifies that @HttpCode(HttpStatus.XX) has the matching Swagger decorator'
    },
    schema: [],
    messages: {
      missingDecorator: 'Method with @HttpCode({{status}}) must use the corresponding decorator {{expectedDecorator}}.'
    }
  },

  create(context) {
    return {
      ClassDeclaration(node) {
        if (!isController(node)) return

        for (const member of node.body.body) {
          if (isControllerMethod(member)) {
            const httpCodeDecorator = member.decorators?.find((decorator) => {
              const hasHttpCodeDecorator = decorator.expression?.callee?.name === 'HttpCode'
              const hasHttpStatusArgument = decorator.expression?.arguments?.[0]?.object?.name === 'HttpStatus'
              return hasHttpCodeDecorator && hasHttpStatusArgument
            })

            if (!httpCodeDecorator) continue

            const statusArg = httpCodeDecorator.expression.arguments[0]
            const statusName = statusArg?.property?.name
            const expectedDecorator = statusDecorators[statusName]

            if (!expectedDecorator) continue

            const hasExpectedDecorator = member.decorators.some((d) => d.expression?.callee?.name === expectedDecorator)

            if (!hasExpectedDecorator) {
              context.report({
                node: httpCodeDecorator.expression.callee,
                messageId: 'missingDecorator',
                data: {
                  status: `HttpStatus.${statusName}`,
                  expectedDecorator: `@${expectedDecorator}()`
                }
              })
            }
          }
        }
      }
    }
  }
})

module.exports = httpcodeMustMatchSwaggerDecorator
