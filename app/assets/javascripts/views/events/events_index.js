Whiggly.Views.EventsIndex = Backbone.CompositeView.extend({
	template: JST['events/index'],
	
	initialize: function() {
		//initialize the map
		this.mapView = new Whiggly.Views.Map();
		this.mapView.initializeMap();
		this.listenToOnce(this.collection, "sync", this.drop);
		this.listenTo(this.collection, "remove", this.mapView.removeMarker.bind(this.mapView));
		
		//render sidebar
		this.listenTo(this.collection, "add", this.addEvent);
		this.listenTo(this.collection, "sync", this.render);
		this.collection.each((function(event) {
			this.addList(event)
		}).bind(this));
		//TODO add remove event from listing
		
	},
	
	addEvent: function(event) {
		var subview = new Whiggly.Views.EventItem( { model: event });
		this.addSubview("#event-list", subview);
	},
		
	drop: function(events) {
		var view = this.mapView;
		var j = 0;
		function delayDrop() {
			view.addMarker(events.models[j]);	
			j++;
		}
		
		for (var i = 0; i < this.collection.length; i++) {
			setTimeout(delayDrop, i * 200);
		}
		
		this.listenTo(this.collection, "add", this.mapView.addMarker.bind(this.mapView));
	},
	
	render: function() {
		var content = this.template;
		this.$el.html(content);
		this.attachSubviews()
	  this.$('#event-list').accordion({
      collapsible: true,
			heightStyle: "content",
			event: "click hoverintent" 
    });
		return this;
	}
	
});

$.event.special.hoverintent = {
    setup: function() {
      $( this ).bind( "mouseover", jQuery.event.special.hoverintent.handler );
    },
    teardown: function() {
      $( this ).unbind( "mouseover", jQuery.event.special.hoverintent.handler );
    },
    handler: function( event ) {
      var currentX, currentY, timeout,
        args = arguments,
        target = $( event.target ),
        previousX = event.pageX,
        previousY = event.pageY;
 
      function track( event ) {
        currentX = event.pageX;
        currentY = event.pageY;
      };
 
      function clear() {
        target
          .unbind( "mousemove", track )
          .unbind( "mouseout", clear );
        clearTimeout( timeout );
      }
 
      function handler() {
        var prop,
          orig = event;
 
        if ( ( Math.abs( previousX - currentX ) +
            Math.abs( previousY - currentY ) ) < 7 ) {
          clear();
 
          event = $.Event( "hoverintent" );
          for ( prop in orig ) {
            if ( !( prop in event ) ) {
              event[ prop ] = orig[ prop ];
            }
          }
          // Prevent accessing the original event since the new event
          // is fired asynchronously and the old event is no longer
          // usable (#6028)
          delete event.originalEvent;
 
          target.trigger( event );
        } else {
          previousX = currentX;
          previousY = currentY;
          timeout = setTimeout( handler, 100 );
        }
      }
 
      timeout = setTimeout( handler, 100 );
      target.bind({
        mousemove: track,
        mouseout: clear
      });
    }
  };
