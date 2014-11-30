Whiggly.Views.Map = Backbone.View.extend({
	
	initializeMap: function () {
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(37.7632668,-122.434624),
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};

		this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		google.maps.event.addListener(this.map, "zoom_changed", (function() {
			if (this.map.zoom >= 15) {
				this.map.mapTypeId = google.maps.MapTypeId.ROADMAP
			} else {
				this.map.mapTypeId = google.maps.MapTypeId.TERRAIN
			}
		}).bind(this))
	}
	


});
