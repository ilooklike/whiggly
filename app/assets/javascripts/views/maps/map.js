Whiggly.Views.Map = Backbone.View.extend({
	
	initializeMap: function () {
		//TODO try stylized https://developers.google.com/maps/documentation/javascript/styling#map_features
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(37.7632668,-122.434624),
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};

		this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		google.maps.event.addListener(this.map, "zoom_changed", (function() {
			//TODO change map type when zoom changed
			if (this.map.zoom >= 15) {
				this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP)
			} else {
				this.map.setMapTypeId(google.maps.MapTypeId.TERRAIN)
			}
		}).bind(this))
	}
	


});
