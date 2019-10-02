class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :produit, :bibliotheque]

  def home
  end

  def produit
  end

  def bibliotheque
  end
end
