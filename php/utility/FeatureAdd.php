<?php
declare(strict_types=1);

// JojosBizarre SDK utility: feature_add

class JojosBizarreFeatureAdd
{
    public static function call(JojosBizarreContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
