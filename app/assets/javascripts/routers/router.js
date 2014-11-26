Whiggly.Routers.Router = Backbone.Router.extend({
	routes: {
		"": "index"
	},
	
	initialize: function(options) {
		this.$mainEl = options.$mainEl
	}, 
	
	index: function() {
		var mapView = new Whiggly.Views.Map();
		// $("#map-canvas").html(mapView);
		mapView.initializeMap()
	},
	
	_swapView: function(newView) {
		if (this.currentView) {
			this.currentView.remove();
		}
	
		this.$mainEl.html(newView);
	
		this.currentView = newView;
	}
});
