class PagesController < ApplicationController
  def home
    @message = Contact.new
  end
end
