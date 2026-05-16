# JojosBizarre SDK exists test

require "minitest/autorun"
require_relative "../JojosBizarre_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = JojosBizarreSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
