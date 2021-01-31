class ContactsController < ApplicationController
  def new
    @message = Contact.new
  end

  def create
    @message = Contact.new(contact_params)
    if @message.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :email, :phone, :message)
  end
end
