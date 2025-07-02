const { methodDecorators } = require('./constants.cjs')

function hasDecorator(methodNode, decorators) {
  if (!('decorators' in methodNode)) return false

  return methodNode.decorators?.some((decorator) => {
    if (!('callee' in decorator.expression)) return false
    if (!('name' in decorator.expression.callee)) return false
    return decorators.includes(decorator.expression?.callee?.name)
  })
}

function isController(node) {
  return node.decorators?.some((decorator) => {
    if (!('callee' in decorator.expression)) return false
    if (!('name' in decorator.expression.callee)) return false
    return decorator.expression?.callee?.name === 'Controller'
  })
}

function isControllerMethod(member) {
  return (
    member.type === 'MethodDefinition' &&
    member.kind === 'method' &&
    'name' in member.key &&
    hasDecorator(member, methodDecorators)
  )
}

module.exports = {
  hasDecorator,
  isController,
  isControllerMethod
}
