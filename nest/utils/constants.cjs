const methodDecorators = ['Get', 'Post', 'Put', 'Delete', 'Patch', 'Options', 'Head', 'All']

const statusDecorators = {
  OK: 'ApiOkResponse',
  CREATED: 'ApiCreatedResponse',
  ACCEPTED: 'ApiAcceptedResponse',
  NO_CONTENT: 'ApiNoContentResponse',
  MOVED_PERMANENTLY: 'ApiMovedPermanentlyResponse',
  FOUND: 'ApiFoundResponse',
  BAD_REQUEST: 'ApiBadRequestResponse',
  UNAUTHORIZED: 'ApiUnauthorizedResponse',
  NOT_FOUND: 'ApiNotFoundResponse',
  FORBIDDEN: 'ApiForbiddenResponse',
  METHOD_NOT_ALLOWED: 'ApiMethodNotAllowedResponse',
  NOT_ACCEPTABLE: 'ApiNotAcceptableResponse',
  REQUEST_TIMEOUT: 'ApiRequestTimeoutResponse',
  CONFLICT: 'ApiConflictResponse',
  PRECONDITION_FAILED: 'ApiPreconditionFailedResponse',
  TOO_MANY_REQUESTS: 'ApiTooManyRequestsResponse',
  GONE: 'ApiGoneResponse',
  PAYLOAD_TOO_LARGE: 'ApiPayloadTooLargeResponse',
  UNSUPPORTED_MEDIA_TYPE: 'ApiUnsupportedMediaTypeResponse',
  UNPROCESSABLE_ENTITY: 'ApiUnprocessableEntityResponse',
  INTERNAL_SERVER_ERROR: 'ApiInternalServerErrorResponse',
  NOT_IMPLEMENTED: 'ApiNotImplementedResponse',
  BAD_GATEWAY: 'ApiBadGatewayResponse',
  SERVICE_UNAVAILABLE: 'ApiServiceUnavailableResponse',
  GATEWAY_TIMEOUT: 'ApiGatewayTimeoutResponse'
}

module.exports = {
  methodDecorators,
  statusDecorators
}
