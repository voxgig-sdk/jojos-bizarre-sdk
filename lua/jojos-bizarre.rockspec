package = "voxgig-sdk-jojos-bizarre"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/jojos-bizarre-sdk.git"
}
description = {
  summary = "JojosBizarre SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["jojos-bizarre_sdk"] = "jojos-bizarre_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
