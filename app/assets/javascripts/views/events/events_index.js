Whiggly.Views.EventsIndex = Backbone.View.extend({
	
	initialize: function() {
		this.mapView = new Whiggly.Views.Map();
		this.mapView.initializeMap();
		this.listenTo(this.collection, "sync", this.drop);
		this.markers = []
	},
	
	drop: function() {
		var view = this;
		
		function delayDrop(j) {
			view.addMarker(view.collection.models[j]);
		}
		
		for (var i = 0; i < this.collection.length; i++) {
			setTimeout(delayDrop(i), i * 1000);
			console.log(i * 200)
		}
	},
	
	addMarker: function(event) {
		var lagLng = new google.maps.LatLng(event.escape('latitude'),
																				event.escape('longtitude'));
		var marker = new google.maps.Marker({
			position: lagLng,
			map: this.mapView.map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			// infoWindow: this.infoWindow(event)
		});
		
		google.maps.event.addListener(marker, "click", (function() {
			if (this._infoWindow) {
				this._infoWindow.close();
			}
			
			this._infoWindow = this.infoWindow(event);
			this._infoWindow.open(marker.map, marker);
		  }).bind(this));
		
		this.markers.push(marker);
	},
	
	//add popup boxes 
	infoWindow: function(event) {	
		var infoView = new Whiggly.Views.EventItem({ model: event });
		var info = new google.maps.InfoWindow({
			content: infoView.template({ event: event }),
			maxWidth: 200
		});		
		
		return info;
	}
});

// var info = new google.maps.InfoWindow({
// 	content: "<h1>Oh HI!</h1>",
// 	marker: marker
// })
//
// google.maps.event.addListener(marker, "click", function() {
// 	info.open(this.map,info.marker);
// })