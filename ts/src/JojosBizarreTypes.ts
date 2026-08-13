// Typed models for the JojosBizarre SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  abilities?: any[]
  chapter?: string
  id?: string
  image?: string
  japaneseName?: string
  name?: string
  nationality?: string
  stand?: string
}

export interface CharacterLoadMatch {
  id: string
}

export interface CharacterListMatch {
  abilities?: any[]
  chapter?: string
  id?: string
  image?: string
  japaneseName?: string
  name?: string
  nationality?: string
  stand?: string
}

export interface Stand {
  abilities?: any[]
  chapter?: string
  id?: string
  image?: string
  japaneseName?: string
  name?: string
  type?: string
  user?: string
}

export interface StandLoadMatch {
  id: string
}

export interface StandListMatch {
  abilities?: any[]
  chapter?: string
  id?: string
  image?: string
  japaneseName?: string
  name?: string
  type?: string
  user?: string
}

