require 'test_helper'

class ApplicationHelperTest < ActionView::TestCase
  test "provider_link should return correct html" do
    assert_dom_equal %{<a class="provider_link" href="https://acloud.guru" target="_blank" title="A Cloud Guru">
      #{image_tag('acloud-guru.png')}
    </a>}, provider_link('acloudguru')
  end
end
