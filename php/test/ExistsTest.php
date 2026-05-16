<?php
declare(strict_types=1);

// JojosBizarre SDK exists test

require_once __DIR__ . '/../jojosbizarre_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = JojosBizarreSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
