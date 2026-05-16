<?php
declare(strict_types=1);

// JojosBizarre SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class JojosBizarreFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new JojosBizarreBaseFeature();
            case "test":
                return new JojosBizarreTestFeature();
            default:
                return new JojosBizarreBaseFeature();
        }
    }
}
