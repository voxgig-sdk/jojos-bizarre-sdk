# JojosBizarre SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module JojosBizarreFeatures
  def self.make_feature(name)
    case name
    when "base"
      JojosBizarreBaseFeature.new
    when "test"
      JojosBizarreTestFeature.new
    else
      JojosBizarreBaseFeature.new
    end
  end
end
