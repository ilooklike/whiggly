Whiggly.Views.EventsIndex = Backbone.View.extend({
	
	initialize: function() {
		this.mapView = new Whiggly.Views.Map();
		this.mapView.initializeMap();
		this.listenTo(this.collection, "sync", this.drop);
		this.markers = [];
		this.openIcon = '/assets/apple-eyes-icon.png';
		this.closedIcon = '/assets/apple-outline-icon.png';
	},
	
	drop: function() {
		var view = this;
		var j = 0;
		function delayDrop() {
			// console.log(Date.now());
			view.addMarker(view.collection.models[j]);	
			j++;
		}
		
		//TODO time delay is not working
		for (var i = 0; i < this.collection.length; i++) {
			setTimeout(delayDrop(), i * 200);
			// console.log(Date.now())
		}
	},
	
	addMarker: function(event) {
		var lagLng = new google.maps.LatLng(event.escape('latitude'),
																				event.escape('longtitude')
																				);
		var marker = new google.maps.Marker({
			position: lagLng,
			map: this.mapView.map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			icon: this.closedIcon
		});
		
		google.maps.event.addListener(marker, "click", (function() {
			
			if (this._infoWindow) {
				this._infoWindow.close();
			}
			
			//toggle close when clicked on the same marker		
			if (this._marker === marker) {
				this._marker = null;
				marker.setIcon(this.closedIcon);
				return
			}
			
			this.changeCurrentMarker(marker);
			this._infoWindow = this.infoWindow(event);
			this._infoWindow.open(marker.map, marker);
		  }).bind(this)
		);
		
		this.markers.push(marker);
	},
	
	changeCurrentMarker: function(marker) {
		if (this._marker) {
			this._marker.setIcon(this.closedIcon)
		}
		this._marker = marker;
		marker.setIcon(this.openIcon);
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