module PagesHelper
  def current_page?(action_name)
    "active" if action_name == controller.action_name
  end
end
