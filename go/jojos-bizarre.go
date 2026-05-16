package voxgigjojosbizarresdk

import (
	"github.com/voxgig-sdk/jojos-bizarre-sdk/core"
	"github.com/voxgig-sdk/jojos-bizarre-sdk/entity"
	"github.com/voxgig-sdk/jojos-bizarre-sdk/feature"
	_ "github.com/voxgig-sdk/jojos-bizarre-sdk/utility"
)

// Type aliases preserve external API.
type JojosBizarreSDK = core.JojosBizarreSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type JojosBizarreEntity = core.JojosBizarreEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type JojosBizarreError = core.JojosBizarreError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCharacterEntityFunc = func(client *core.JojosBizarreSDK, entopts map[string]any) core.JojosBizarreEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewStandEntityFunc = func(client *core.JojosBizarreSDK, entopts map[string]any) core.JojosBizarreEntity {
		return entity.NewStandEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewJojosBizarreSDK = core.NewJojosBizarreSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
