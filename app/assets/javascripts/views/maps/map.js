Whiggly.Views.Map = Backbone.View.extend({
	
	initializeMap: function () {
		var styles = [
		    {
		      featureType: "road",
		      elementType: "geometry",
		      stylers: [
		        { lightness: 100 },
		        { visibility: "simplified" }
		      ]
		    },{
			    featureType: "water",
			    stylers: [
			      { visibility: "simplified" },
			      { hue: "#0088ff" },
			      { saturation: 4 },
			      { lightness: -4 },
			      { gamma: 0.94 }
			    ]
			  },{
			    featureType: "landscape.man_made",
			    stylers: [
			      { lightness: 63 },
			      { gamma: 0.65 },
			    ]
			  },{
			    featureType: "administrative.neighborhood",
			    stylers: [
			      { visibility: "off" }
			    ]
			  },{
			    featureType: "poi",
			    stylers: [
			      { visibility: "off" }
			    ]
			  },{
			    featureType: "poi.attraction",
			    stylers: [
			      { visibility: "on" }
			    ]
			  },{
			    featureType: "poi.park",
			    stylers: [
			      { visibility: "on" },
			      { hue: "#6eff00" },
			      { lightness: -20 },
			      { gamma: 1.42 },
			      { saturation: 13 }
			    ]
			  }
		  ];
			
		var styledMap = new google.maps.StyledMapType(styles, { name: "Whiggly Map" });
							
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(37.7632668,-122.434624),
			mapTypeControlOptions: {
				mapTypeIds: [
										 google.maps.MapTypeId.TERRAIN, 
										 google.maps.MapTypeId.ROADMAP,
										 'map_style'
				]
			}	
		};

		this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		this.map.mapTypes.set('map_style', styledMap);
		this.map.setMapTypeId('map_style');
		
		this.markers = [];
		this.openIcon = '/assets/apple-eyes-icon.png';
		this.hoverOpen = '/assets/apple-eyes-hover.png';
		this.closedIcon = '/assets/pin.png';
		this.hoverIcon = '/assets/pin-hover.png';
	},
	
	//TODO map centering based on points
	
	addMarker: function(event) {
				//TODO space out the additional pin drops
		var lagLng = new google.maps.LatLng(event.escape('latitude'),
																				event.escape('longtitude')
																				);
																				
		var marker = new google.maps.Marker({
			position: lagLng,
			map: this.map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			icon: this.closedIcon,
			event: event.id
		});
		
		//add reference to marker in event
		event.marker = marker; 
		
		//click marker opens info window and changes marker icon
		google.maps.event.addListener(marker, "click", (function() {
			this._clickMarker(marker, event)
		}).bind(this));
		
		//highlight marker when mouseover pins
		google.maps.event.addListener(marker, "mouseover", (function() {
			if (this._marker && this._marker === marker) {
				marker.setIcon(this.hoverOpen)
			} else {
				marker.setIcon(this.hoverIcon);
				marker.setZIndex(5)
			}
		}).bind(this));

		google.maps.event.addListener(marker, "mouseout", (function() {
			if (this._marker && this._marker === marker) {
				marker.setIcon(this.openIcon)
			}	else {
				marker.setIcon(this.closedIcon);
				marker.setZIndex(0)	;
			}
		}).bind(this));

		this.markers.push(marker);
	},
	
	_clickMarker: function(marker, event) {
			if (this._infoWindow) {
				this._infoWindow.close();
			}
			
			//toggle close when clicked on the same marker		
			if (this._marker === marker) {
				this._marker = null;
				marker.setIcon(this.closedIcon);
				return
			}
			
			this._changeToCurrentMarker(marker);
			this._infoWindow && this._infoWindow.infoView.remove(); //remove the last view
			this._infoWindow = this._openInfoWindow(event);
			this._infoWindow.open(this.map, marker);
	},
	
	
	_changeToCurrentMarker: function(marker) {
		if (this._marker) {
			this._marker.setIcon(this.closedIcon)
			this._marker.setZIndex(0)
		}
		
		this._marker = marker;
		marker.setIcon(this.openIcon);
		marker.setZIndex(10)	
	},
	
	//add popup boxes 
	_openInfoWindow: function(event) {	
		var infoView = new Whiggly.Views.EventItem({ model: event });
		//TODO handle removal? 
		var info = new google.maps.InfoWindow({
			content: infoView.template({ event: event }),
			maxWidth: 220,
			infoView: infoView
		});		
		
		//revert to closed pin if window closed using "x"
		google.maps.event.addListener(info, "closeclick", (function() {
			event.marker.setIcon(this.closedIcon);
			this._marker = null 
		}).bind(this))

		return info;
	},
	
	removeMarker: function(event) {
		function delayRemove() {
			event.marker.setMap(null);
			event.marker = null;
			view.markers.splice(i, 1);
		}

		event.marker.setAnimation(google.maps.Animation.BOUNCE);
		var i = this.markers.indexOf(event.marker)
		setTimeout(delayRemove, (this.markers.length - i) * 50)	
	}

});
