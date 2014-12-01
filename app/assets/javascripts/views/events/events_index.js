Whiggly.Views.EventsIndex = Backbone.View.extend({
	
	initialize: function() {
		this.mapView = new Whiggly.Views.Map();
		this.mapView.initializeMap();
		this.listenTo(this.collection, "sync", this.drop);
		this.markers = [];
		this.openIcon = '/assets/apple-eyes-icon.png';
		this.closedIcon = '/assets/pin.png';
	},
	
	drop: function() {
		var view = this;
		var j = 0;
		function delayDrop() {
			view.addMarker(view.collection.models[j], j);	
			j++;
		}
		
		for (var i = 0; i < this.collection.length; i++) {
			setTimeout(delayDrop, i * 200);
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
			//TODO bring icon to front with zindex
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
		
		google.maps.event.addListener(marker, "mouseover", function() {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		})
		
		google.maps.event.addListener(marker, "mouseout", function() {
			marker.setAnimation();
		})
		
		this.markers.push(marker);
	},
	
	changeCurrentMarker: function(marker) {
		if (this._marker) {
			this._marker.setIcon(this.closedIcon)
		}
		
		this._marker = marker;
		marker.setIcon(this.openIcon);
		marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1)
	
	},
	
	//add popup boxes 
	infoWindow: function(event) {	
		var infoView = new Whiggly.Views.EventItem({ model: event });
		var info = new google.maps.InfoWindow({
			content: infoView.template({ event: event }),
			maxWidth: 220
		});		
		
		return info;
	}
});
