Whiggly.Views.EventsIndex = Backbone.CompositeView.extend({
	
	initialize: function() {
		this.mapView = new Whiggly.Views.Map();
		this.mapView.initializeMap();
		
		this.selector = "#side-content"
		this.subviews(this.selector);
		this.listenTo(this.collection, "add", this.addEvent);
		
		this.collection.each((function(event) {
			this.addList(event)
		}).bind(this));
		
		this.listenToOnce(this.collection, "sync", this.drop);
		this.listenTo(this.collection, "remove", this.mapView.removeMarker.bind(this.mapView));
	},
	
	addEvent: function(event) {
		var subview = new Whiggly.Views.EventItem( { model: event });
		this.addSubview(this.selector, subview);
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
	
});
