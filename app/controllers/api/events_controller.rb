module Api
  class EventsController < ApplicationController
    def index
      events = Event.order(:event_date).search(params[:query])
      render json: events
    end

    def create
      event = Event.new(event_params)
      if event.save
        render json: event
      else
        render nothing: true, status: :bad_request
      end
    end

    private

    def event_params
      params.require(:event).permit(:name, :description, :event_date, :place)
    end
  end
end
