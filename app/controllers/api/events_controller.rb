module Api
  class EventsController < ApiController
    def create
      @event = Event.new(event_params)
      
      if @event.save
        render json: @event
      else
        render json: @event.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def destroy
      @event = Event.find(params[:id])
      @event.try(:destroy)
      render json: {}
    end
    
    def index
      #do this if we have no search params
      if (params[:search] = "")
        @events = Event.all
      else
        @events = Event.search(params[:search])
      end

      render json: @events
    end
    
    def show
      @event = Event.find(params[:id])
      render json: @event
    end
    
    private
    
    def event_params
      params.require(:events).permit(:title, :description, :start_time, :end_time, :category, :longtitude, :latitude)
    end
  end
end
