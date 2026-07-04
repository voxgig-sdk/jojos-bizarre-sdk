-- Typed models for the JojosBizarre SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field ability? table
---@field chapter? string
---@field id? string
---@field image? string
---@field japanese_name? string
---@field name? string
---@field nationality? string
---@field stand? string

---@class CharacterLoadMatch
---@field id string

---@class CharacterListMatch

---@class Stand
---@field ability? table
---@field chapter? string
---@field id? string
---@field image? string
---@field japanese_name? string
---@field name? string
---@field type? string
---@field user? string

---@class StandLoadMatch
---@field id string

---@class StandListMatch

local M = {}

return M
