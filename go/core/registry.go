package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCharacterEntityFunc func(client *JojosBizarreSDK, entopts map[string]any) JojosBizarreEntity

var NewStandEntityFunc func(client *JojosBizarreSDK, entopts map[string]any) JojosBizarreEntity

