Whiggly.Views.EventsIndex = Backbone.CompositeView.extend({
	template: JST['events/index'],
	
	events: {
      'mouseenter h3 a': 'lightMarker',
      'mouseleave h3 a': 'unlitMarker'
	},
	
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
		
		this.listenTo(this.collection, "remove", this.removeEvent);	
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
	
	lightMarker: function(event) {
		var id = $(event.currentTarget).data("id");
		var marker = this.collection.get(id).marker;
		marker.setIcon(this.mapView.hoverList);
		marker.setZIndex(5);
	},
	
	removeEvent: function() {
		//not working properly probably?
		var subview = new Whiggly.Views.EventItemList( { model: event });
		this.removeSubview("#event-list", subview);
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
	},
	
	unlitMarker: function(event) {
		var id = $(event.currentTarget).data("id");
		var marker = this.collection.get(id).marker;
		marker.setIcon(this.mapView.closedIcon);
		marker.setZIndex(0);
	},
	
});


