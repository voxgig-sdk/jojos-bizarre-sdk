<?php
declare(strict_types=1);

// JojosBizarre SDK base feature

class JojosBizarreBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(JojosBizarreContext $ctx, array $options): void {}
    public function PostConstruct(JojosBizarreContext $ctx): void {}
    public function PostConstructEntity(JojosBizarreContext $ctx): void {}
    public function SetData(JojosBizarreContext $ctx): void {}
    public function GetData(JojosBizarreContext $ctx): void {}
    public function GetMatch(JojosBizarreContext $ctx): void {}
    public function SetMatch(JojosBizarreContext $ctx): void {}
    public function PrePoint(JojosBizarreContext $ctx): void {}
    public function PreSpec(JojosBizarreContext $ctx): void {}
    public function PreRequest(JojosBizarreContext $ctx): void {}
    public function PreResponse(JojosBizarreContext $ctx): void {}
    public function PreResult(JojosBizarreContext $ctx): void {}
    public function PreDone(JojosBizarreContext $ctx): void {}
    public function PreUnexpected(JojosBizarreContext $ctx): void {}
}
