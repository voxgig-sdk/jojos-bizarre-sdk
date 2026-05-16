<?php
declare(strict_types=1);

// JojosBizarre SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

JojosBizarreUtility::setRegistrar(function (JojosBizarreUtility $u): void {
    $u->clean = [JojosBizarreClean::class, 'call'];
    $u->done = [JojosBizarreDone::class, 'call'];
    $u->make_error = [JojosBizarreMakeError::class, 'call'];
    $u->feature_add = [JojosBizarreFeatureAdd::class, 'call'];
    $u->feature_hook = [JojosBizarreFeatureHook::class, 'call'];
    $u->feature_init = [JojosBizarreFeatureInit::class, 'call'];
    $u->fetcher = [JojosBizarreFetcher::class, 'call'];
    $u->make_fetch_def = [JojosBizarreMakeFetchDef::class, 'call'];
    $u->make_context = [JojosBizarreMakeContext::class, 'call'];
    $u->make_options = [JojosBizarreMakeOptions::class, 'call'];
    $u->make_request = [JojosBizarreMakeRequest::class, 'call'];
    $u->make_response = [JojosBizarreMakeResponse::class, 'call'];
    $u->make_result = [JojosBizarreMakeResult::class, 'call'];
    $u->make_point = [JojosBizarreMakePoint::class, 'call'];
    $u->make_spec = [JojosBizarreMakeSpec::class, 'call'];
    $u->make_url = [JojosBizarreMakeUrl::class, 'call'];
    $u->param = [JojosBizarreParam::class, 'call'];
    $u->prepare_auth = [JojosBizarrePrepareAuth::class, 'call'];
    $u->prepare_body = [JojosBizarrePrepareBody::class, 'call'];
    $u->prepare_headers = [JojosBizarrePrepareHeaders::class, 'call'];
    $u->prepare_method = [JojosBizarrePrepareMethod::class, 'call'];
    $u->prepare_params = [JojosBizarrePrepareParams::class, 'call'];
    $u->prepare_path = [JojosBizarrePreparePath::class, 'call'];
    $u->prepare_query = [JojosBizarrePrepareQuery::class, 'call'];
    $u->result_basic = [JojosBizarreResultBasic::class, 'call'];
    $u->result_body = [JojosBizarreResultBody::class, 'call'];
    $u->result_headers = [JojosBizarreResultHeaders::class, 'call'];
    $u->transform_request = [JojosBizarreTransformRequest::class, 'call'];
    $u->transform_response = [JojosBizarreTransformResponse::class, 'call'];
});
