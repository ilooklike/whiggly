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
			
		var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
							
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
		
		//going for stylized map over terrain, so no longer need to toggle
		// google.maps.event.addListener(this.map, "zoom_changed", (function() {
// 			if (this.map.zoom >= 15) {
// 				this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP)
// 			} else {
// 				this.map.setMapTypeId(google.maps.MapTypeId.TERRAIN)
// 			}
// 		}).bind(this))
	}
	
	//TODO map center being a cumulation

});
