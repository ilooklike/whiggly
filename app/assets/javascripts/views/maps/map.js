Whiggly.Views.Map = Backbone.View.extend({
	
	initializeMap: function () {
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(37.7632668,-122.434624),
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};

		this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		// var marker = new google.maps.Marker({
	// 		position: new google.maps.LatLng(37.788131, -122.412952),
	// 		map: this.map,
	// 		title:"Hello World!"
	// 	});
	//
	// 	var info = new google.maps.InfoWindow({
	// 		content: "<h1>Oh HI!</h1>",
	// 		marker: marker
	// 	})
	//
	// 	google.maps.event.addListener(marker, "click", function() {
	// 		info.open(this.map,info.marker);
	// 	})
	}
	


});
