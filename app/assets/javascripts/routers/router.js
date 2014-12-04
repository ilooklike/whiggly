Whiggly.Routers.Router = Backbone.Router.extend({
	routes: {
		"(?*str)": "index"
	},
	
	initialize: function(options) {
		this.$mainEl = options.$mainEl
		this.$sideBar = options.$sideBar
		$( ".datepicker" ).datepicker();
	}, 
	
	index: function(str) { //why is str not coming back?
		var params = this._parseParams(str)
		Whiggly.Events.fetch({ data: {search: params }});
		if (!this._indexView) {
			this._indexView = new Whiggly.Views.EventsIndex({ collection: Whiggly.Events });
			this._swapView(this._indexView.render().$el);
		}
	},        

	_parseParams: function(query) {
		var search = {};
		var queries = decodeURIComponent(query).replace(/^\?/, "").split('&')
		for( i = 0; i < queries.length; i++ ) {
      var pair = queries[i].split('=');
      search[pair[0]] = pair[1];
		}	
		return search
	},
	
	_swapView: function(newView) {
		if (this.currentView) {
			this.currentView.remove();
		}
	
		this.$sideBar.html(newView);
	
		this.currentView = newView;
	},
});
