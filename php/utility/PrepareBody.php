<?php
declare(strict_types=1);

// JojosBizarre SDK utility: prepare_body

class JojosBizarrePrepareBody
{
    public static function call(JojosBizarreContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
