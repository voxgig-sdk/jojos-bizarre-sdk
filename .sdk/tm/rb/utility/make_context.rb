# JojosBizarre SDK utility: make_context
require_relative '../core/context'
module JojosBizarreUtilities
  MakeContext = ->(ctxmap, basectx) {
    JojosBizarreContext.new(ctxmap, basectx)
  }
end
