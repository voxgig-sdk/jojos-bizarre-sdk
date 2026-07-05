// Typed models for the JojosBizarre SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  ability?: any[]
  chapter?: string
  id?: string
  image?: string
  japanese_name?: string
  name?: string
  nationality?: string
  stand?: string
}

export interface CharacterLoadMatch {
  id: string
}

export interface CharacterListMatch {
  ability?: any[]
  chapter?: string
  id?: string
  image?: string
  japanese_name?: string
  name?: string
  nationality?: string
  stand?: string
}

export interface Stand {
  ability?: any[]
  chapter?: string
  id?: string
  image?: string
  japanese_name?: string
  name?: string
  type?: string
  user?: string
}

export interface StandLoadMatch {
  id: string
}

export interface StandListMatch {
  ability?: any[]
  chapter?: string
  id?: string
  image?: string
  japanese_name?: string
  name?: string
  type?: string
  user?: string
}

