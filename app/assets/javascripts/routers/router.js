Whiggly.Routers.Router = Backbone.Router.extend({
	routes: {
		"": "index",
		"/search?*queryString" : "search"
	},
	
	initialize: function(options) {
		this.$mainEl = options.$mainEl
		$( ".datepicker" ).datepicker();
	}, 
	
	index: function() {
		// var mapView = new Whiggly.Views.Map();
		// mapView.initializeMap();
		Whiggly.Events.fetch()
		var indexView = new Whiggly.Views.EventsIndex({ collection: Whiggly.Events })
	},
	
	_swapView: function(newView) {
		if (this.currentView) {
			this.currentView.remove();
		}
	
		this.$mainEl.html(newView);
	
		this.currentView = newView;
	}
});
