const { globalIgnores, defineConfig } = require('eslint/config')
const eslintConfigTypescript = require('@josejefferson/eslint-config-typescript')
const endpointsMustBeAsync = require('./rules/endpoints-must-be-async.cjs')
const endpointsMustHaveExplicitReturnType = require('./rules/endpoints-must-have-explicit-return-type.cjs')
const endpointsMustHaveHttpcode = require('./rules/endpoints-must-have-httpcode.cjs')
const httpcodeMustMatchSwaggerDecorator = require('./rules/httpcode-must-match-swagger-decorator.cjs')

module.exports = defineConfig([
  globalIgnores(['public']),
  eslintConfigTypescript,
  {
    plugins: {
      '@josejefferson/eslint-config-nest': {
        rules: {
          'endpoints-must-be-async': endpointsMustBeAsync,
          'endpoints-must-have-explicit-return-type': endpointsMustHaveExplicitReturnType,
          'endpoints-must-have-httpcode': endpointsMustHaveHttpcode,
          'httpcode-must-match-swagger-decorator': httpcodeMustMatchSwaggerDecorator
        }
      }
    },
    rules: {
      '@josejefferson/eslint-config-nest/endpoints-must-be-async': 'warn',
      '@josejefferson/eslint-config-nest/endpoints-must-have-explicit-return-type': 'warn',
      '@josejefferson/eslint-config-nest/endpoints-must-have-httpcode': 'error',
      '@josejefferson/eslint-config-nest/httpcode-must-match-swagger-decorator': 'error'
    }
  },
  {
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: "Decorator[expression.callee.name='ApiOkResponse'][expression.arguments.length=0]",
          message: "Do not use '@ApiOkResponse' without arguments. Use '@ApiNoContentResponse()' instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiBadRequestResponse']",
          message:
            "Do not use '@ApiBadRequestResponse'. Use '@ApiException(() => BadRequestException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiUnauthorizedResponse']",
          message:
            "Do not use '@ApiUnauthorizedResponse'. Use '@ApiException(() => UnauthorizedException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiNotFoundResponse']",
          message:
            "Do not use '@ApiNotFoundResponse'. Use '@ApiException(() => NotFoundException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiForbiddenResponse']",
          message:
            "Do not use '@ApiForbiddenResponse'. Use '@ApiException(() => ForbiddenException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiMethodNotAllowedResponse']",
          message:
            "Do not use '@ApiMethodNotAllowedResponse'. Use '@ApiException(() => MethodNotAllowedException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiNotAcceptableResponse']",
          message:
            "Do not use '@ApiNotAcceptableResponse'. Use '@ApiException(() => NotAcceptableException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiRequestTimeoutResponse']",
          message:
            "Do not use '@ApiRequestTimeoutResponse'. Use '@ApiException(() => RequestTimeoutException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiConflictResponse']",
          message:
            "Do not use '@ApiConflictResponse'. Use '@ApiException(() => ConflictException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiPreconditionFailedResponse']",
          message:
            "Do not use '@ApiPreconditionFailedResponse'. Use '@ApiException(() => PreconditionFailedException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiGoneResponse']",
          message:
            "Do not use '@ApiGoneResponse'. Use '@ApiException(() => GoneException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiPayloadTooLargeResponse']",
          message:
            "Do not use '@ApiPayloadTooLargeResponse'. Use '@ApiException(() => PayloadTooLargeException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiUnsupportedMediaTypeResponse']",
          message:
            "Do not use '@ApiUnsupportedMediaTypeResponse'. Use '@ApiException(() => UnsupportedMediaTypeException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiUnprocessableEntityResponse']",
          message:
            "Do not use '@ApiUnprocessableEntityResponse'. Use '@ApiException(() => UnprocessableEntityException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiInternalServerErrorResponse']",
          message:
            "Do not use '@ApiInternalServerErrorResponse'. Use '@ApiException(() => InternalServerErrorException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiNotImplementedResponse']",
          message:
            "Do not use '@ApiNotImplementedResponse'. Use '@ApiException(() => NotImplementedException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiBadGatewayResponse']",
          message:
            "Do not use '@ApiBadGatewayResponse'. Use '@ApiException(() => BadGatewayException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiServiceUnavailableResponse']",
          message:
            "Do not use '@ApiServiceUnavailableResponse'. Use '@ApiException(() => ServiceUnavailableException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        },
        {
          selector: "Decorator[expression.callee.name='ApiGatewayTimeoutResponse']",
          message:
            "Do not use '@ApiGatewayTimeoutResponse'. Use '@ApiException(() => GatewayTimeoutException)' from the '@nanogiants/nestjs-swagger-api-exception-decorator' library instead"
        }
      ]
    }
  }
])
