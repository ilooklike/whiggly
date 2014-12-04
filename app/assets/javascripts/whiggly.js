window.Whiggly = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		new Whiggly.Routers.Router({
			$mainEl: $("div#main"),
			$sideBar: $("#side-content")
		});
		Backbone.history.start();
		$("#search-form").on("submit", function(event) {
			event.preventDefault();
			var query = $(event.currentTarget).serialize();
			Backbone.history.navigate("?" + query, { trigger: true })
		});
  }
};
