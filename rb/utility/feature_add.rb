# JojosBizarre SDK utility: feature_add
module JojosBizarreUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
