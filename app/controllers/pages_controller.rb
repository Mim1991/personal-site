class PagesController < ApplicationController
  def home
    @message = Contact.new
    @skills = ["Ruby", "Ruby on Rails", "React"]
  end
end
