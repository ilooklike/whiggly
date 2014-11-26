Whiggly.Views.Map = Backbone.View.extend({
	
	initializeMap: function () {
	  var mapOptions = {
	    zoom: 8,
	    center: new google.maps.LatLng(-34.397, 150.644)
	  };

	  this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}

});
