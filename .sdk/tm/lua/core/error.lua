-- JojosBizarre SDK error

local JojosBizarreError = {}
JojosBizarreError.__index = JojosBizarreError


function JojosBizarreError.new(code, msg, ctx)
  local self = setmetatable({}, JojosBizarreError)
  self.is_sdk_error = true
  self.sdk = "JojosBizarre"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function JojosBizarreError:error()
  return self.msg
end


function JojosBizarreError:__tostring()
  return self.msg
end


return JojosBizarreError
