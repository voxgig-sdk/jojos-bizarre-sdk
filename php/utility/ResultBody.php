<?php
declare(strict_types=1);

// JojosBizarre SDK utility: result_body

class JojosBizarreResultBody
{
    public static function call(JojosBizarreContext $ctx): ?JojosBizarreResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
