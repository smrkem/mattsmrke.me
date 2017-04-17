class MessagesController < ApplicationController
  def create
    puts "Sending: ****************"
    puts params[:message]
    puts "*************************"

    AdminMailer.message_email(params[:message]).deliver_later
    render json: { message: "Thanks. Your message has been sent and I'll see it shortly." }
  end
end
