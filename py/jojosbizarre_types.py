# Typed models for the JojosBizarre SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Character:
    ability: Optional[list] = None
    chapter: Optional[str] = None
    id: Optional[str] = None
    image: Optional[str] = None
    japanese_name: Optional[str] = None
    name: Optional[str] = None
    nationality: Optional[str] = None
    stand: Optional[str] = None


@dataclass
class CharacterLoadMatch:
    id: str


@dataclass
class CharacterListMatch:
    ability: Optional[list] = None
    chapter: Optional[str] = None
    id: Optional[str] = None
    image: Optional[str] = None
    japanese_name: Optional[str] = None
    name: Optional[str] = None
    nationality: Optional[str] = None
    stand: Optional[str] = None


@dataclass
class Stand:
    ability: Optional[list] = None
    chapter: Optional[str] = None
    id: Optional[str] = None
    image: Optional[str] = None
    japanese_name: Optional[str] = None
    name: Optional[str] = None
    type: Optional[str] = None
    user: Optional[str] = None


@dataclass
class StandLoadMatch:
    id: str


@dataclass
class StandListMatch:
    ability: Optional[list] = None
    chapter: Optional[str] = None
    id: Optional[str] = None
    image: Optional[str] = None
    japanese_name: Optional[str] = None
    name: Optional[str] = None
    type: Optional[str] = None
    user: Optional[str] = None

