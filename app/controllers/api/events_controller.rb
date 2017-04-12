module Api
  class EventsController < ApplicationController
    def index
      events = Event.order(:event_date).search(params[:query])
      render json: events
    end
  end
end
