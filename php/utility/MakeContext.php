<?php
declare(strict_types=1);

// JojosBizarre SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class JojosBizarreMakeContext
{
    public static function call(array $ctxmap, ?JojosBizarreContext $basectx): JojosBizarreContext
    {
        return new JojosBizarreContext($ctxmap, $basectx);
    }
}
