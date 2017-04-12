module Api
  class EventsController < ApplicationController
    def index
      render json: Event.all.order(:event_date)
    end
  end
end
