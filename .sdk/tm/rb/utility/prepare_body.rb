# JojosBizarre SDK utility: prepare_body
module JojosBizarreUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
