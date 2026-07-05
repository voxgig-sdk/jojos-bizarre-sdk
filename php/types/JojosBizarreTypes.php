<?php
declare(strict_types=1);

// Typed models for the JojosBizarre SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Character entity data model. */
class Character
{
    public ?array $ability = null;
    public ?string $chapter = null;
    public ?string $id = null;
    public ?string $image = null;
    public ?string $japanese_name = null;
    public ?string $name = null;
    public ?string $nationality = null;
    public ?string $stand = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public string $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?array $ability = null;
    public ?string $chapter = null;
    public ?string $id = null;
    public ?string $image = null;
    public ?string $japanese_name = null;
    public ?string $name = null;
    public ?string $nationality = null;
    public ?string $stand = null;
}

/** Stand entity data model. */
class Stand
{
    public ?array $ability = null;
    public ?string $chapter = null;
    public ?string $id = null;
    public ?string $image = null;
    public ?string $japanese_name = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?string $user = null;
}

/** Request payload for Stand#load. */
class StandLoadMatch
{
    public string $id;
}

/** Request payload for Stand#list. */
class StandListMatch
{
    public ?array $ability = null;
    public ?string $chapter = null;
    public ?string $id = null;
    public ?string $image = null;
    public ?string $japanese_name = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?string $user = null;
}

