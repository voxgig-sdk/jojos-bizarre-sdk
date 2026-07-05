# frozen_string_literal: true

# Typed models for the JojosBizarre SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Character entity data model.
#
# @!attribute [rw] ability
#   @return [Array, nil]
#
# @!attribute [rw] chapter
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] japanese_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] nationality
#   @return [String, nil]
#
# @!attribute [rw] stand
#   @return [String, nil]
Character = Struct.new(
  :ability,
  :chapter,
  :id,
  :image,
  :japanese_name,
  :name,
  :nationality,
  :stand,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [String]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Character#list.
#
# @!attribute [rw] ability
#   @return [Array, nil]
#
# @!attribute [rw] chapter
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] japanese_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] nationality
#   @return [String, nil]
#
# @!attribute [rw] stand
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :ability,
  :chapter,
  :id,
  :image,
  :japanese_name,
  :name,
  :nationality,
  :stand,
  keyword_init: true
)

# Stand entity data model.
#
# @!attribute [rw] ability
#   @return [Array, nil]
#
# @!attribute [rw] chapter
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] japanese_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
Stand = Struct.new(
  :ability,
  :chapter,
  :id,
  :image,
  :japanese_name,
  :name,
  :type,
  :user,
  keyword_init: true
)

# Request payload for Stand#load.
#
# @!attribute [rw] id
#   @return [String]
StandLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Stand#list.
#
# @!attribute [rw] ability
#   @return [Array, nil]
#
# @!attribute [rw] chapter
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] japanese_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
StandListMatch = Struct.new(
  :ability,
  :chapter,
  :id,
  :image,
  :japanese_name,
  :name,
  :type,
  :user,
  keyword_init: true
)

