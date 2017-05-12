module ApplicationHelper
  def provider_link(provider_name)
    url = url_for_provider(provider_name)
    title = title_for_provider(provider_name)
    image_filename = image_for_provider(provider_name)

    %{<a class="provider_link" href="#{url}" target="_blank" title="#{title}">
      #{image_tag(image_filename)}
    </a>}
  end

  def url_for_provider(provider_name)
    { acloudguru: 'https://acloud.guru',
      udemy: 'https://www.udemy.com',
      edx: 'https://www.edx.org'
    }[provider_name.to_sym]
  end

  def title_for_provider(provider_name)
    { acloudguru: 'A Cloud Guru',
      udemy: 'Udemy',
      edx: 'edX'
    }[provider_name.to_sym]
  end

  def image_for_provider(provider_name)
    { acloudguru: 'acloud-guru.png',
      udemy: 'udemy.png',
      edx: 'edx.png'
    }[provider_name.to_sym]
  end
end
