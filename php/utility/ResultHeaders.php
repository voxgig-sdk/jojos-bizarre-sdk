<?php
declare(strict_types=1);

// JojosBizarre SDK utility: result_headers

class JojosBizarreResultHeaders
{
    public static function call(JojosBizarreContext $ctx): ?JojosBizarreResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
