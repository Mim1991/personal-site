class ContactsController < ApplicationController
  def new
    @message = Contact.new
  end

  def index
    @messages = Contact.all
  end

  def create
    @message = Contact.new(contact_params)
    if @message.save
      redirect_to root_path(anchor:'quick-contact'), notice: "Thanks for your message! I'll get back to you ASAP."
    else
      redirect_to root_path(anchor:'quick-contact'), alert: "Sorry your message wasn't sent. Please check the form."
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :email, :phone, :message)
  end


end
