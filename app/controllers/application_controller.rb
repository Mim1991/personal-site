class ApplicationController < ActionController::Base
  def download_pdf
    send_file(
      "#{Rails.root}/public/MeehirPatelResume.pdf",
      filename: "MeehirPatelResume.pdf",
      type: "application/pdf"
    )
  end
end
