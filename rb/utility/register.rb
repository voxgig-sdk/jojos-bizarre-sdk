# JojosBizarre SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

JojosBizarreUtility.registrar = ->(u) {
  u.clean = JojosBizarreUtilities::Clean
  u.done = JojosBizarreUtilities::Done
  u.make_error = JojosBizarreUtilities::MakeError
  u.feature_add = JojosBizarreUtilities::FeatureAdd
  u.feature_hook = JojosBizarreUtilities::FeatureHook
  u.feature_init = JojosBizarreUtilities::FeatureInit
  u.fetcher = JojosBizarreUtilities::Fetcher
  u.make_fetch_def = JojosBizarreUtilities::MakeFetchDef
  u.make_context = JojosBizarreUtilities::MakeContext
  u.make_options = JojosBizarreUtilities::MakeOptions
  u.make_request = JojosBizarreUtilities::MakeRequest
  u.make_response = JojosBizarreUtilities::MakeResponse
  u.make_result = JojosBizarreUtilities::MakeResult
  u.make_point = JojosBizarreUtilities::MakePoint
  u.make_spec = JojosBizarreUtilities::MakeSpec
  u.make_url = JojosBizarreUtilities::MakeUrl
  u.param = JojosBizarreUtilities::Param
  u.prepare_auth = JojosBizarreUtilities::PrepareAuth
  u.prepare_body = JojosBizarreUtilities::PrepareBody
  u.prepare_headers = JojosBizarreUtilities::PrepareHeaders
  u.prepare_method = JojosBizarreUtilities::PrepareMethod
  u.prepare_params = JojosBizarreUtilities::PrepareParams
  u.prepare_path = JojosBizarreUtilities::PreparePath
  u.prepare_query = JojosBizarreUtilities::PrepareQuery
  u.graphql_body = JojosBizarreUtilities::GraphqlBody
  u.graphql_errors = JojosBizarreUtilities::GraphqlErrors
  u.result_basic = JojosBizarreUtilities::ResultBasic
  u.result_body = JojosBizarreUtilities::ResultBody
  u.result_headers = JojosBizarreUtilities::ResultHeaders
  u.transform_request = JojosBizarreUtilities::TransformRequest
  u.transform_response = JojosBizarreUtilities::TransformResponse
}
