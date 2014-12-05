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
		var subview = new Whiggly.Views.EventItemList( { model: event });
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
			event: "click hoverintent",
			active: false 
    });
		
	  $("#event-list h3 a").click(function() {
	       window.location = $(this).attr('href');
	       return false;
	    });
		return this;
	}
	
});


