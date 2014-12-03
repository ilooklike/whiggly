window.Whiggly = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		new Whiggly.Routers.Router({
			$mainEl: $("div#main")
		});
		Backbone.history.start();
		$("#search-form").on("submit", function(event) {
			event.preventDefault();
			var query = $(event.currentTarget).serialize();
			Backbone.history.navigate("?" + query, { trigger: true })
		});
		// $("#search-button").hover(function(event) {
// 			$(".form-group").removeClass("hide-form");
// 			$(".form-group").addClass("active");
// 			$(".form-group input:first").click();
// 			// $(".form-group input:first").addClass("active")
// 		})
		// function mapInit() {
		//   var mapOptions = {
		//     center: { lat: -34.397, lng: 150.644},
		//     zoom: 8
		//   };
		//   var map = new google.maps.Map(document.getElementById('map-canvas'),
		//       mapOptions);
		// }
		// google.maps.event.addDomListener(window, 'load', mapInit);
  }
};
