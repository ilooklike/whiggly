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
