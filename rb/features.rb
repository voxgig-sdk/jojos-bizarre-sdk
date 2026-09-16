# JojosBizarre SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module JojosBizarreFeatures
  def self.make_feature(name)
    case name
    when "base"
      JojosBizarreBaseFeature.new
    when "ratelimit"
      JojosBizarreRatelimitFeature.new
    when "retry"
      JojosBizarreRetryFeature.new
    when "test"
      JojosBizarreTestFeature.new
    when "timeout"
      JojosBizarreTimeoutFeature.new
    else
      JojosBizarreBaseFeature.new
    end
  end
end
