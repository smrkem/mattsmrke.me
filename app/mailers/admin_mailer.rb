class AdminMailer < ApplicationMailer
  def message_email(message)
    @message = message
    mail(to: 'smrkem@gmail.com', subject: "Message from mattsmrke.me")
  end
end
