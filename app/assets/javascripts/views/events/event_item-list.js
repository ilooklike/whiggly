Whiggly.Views.EventItemList = Backbone.View.extend({
	// className: "event-list-item",
	template: JST['events/item_list'],
	
	// events: {
	//       'mouseenter h3 a': 'lightMarker',
	//       'mouseleave h3 a': 'unlitMarker'
	// },
	
	render: function() {
		var content = this.template({ event: this.model });
		this.$el.html(content);
		// this.$el.accordion();
		return this;
	},
	
	// lightMarker: function(event) {
	// 	alert("boyah!")
	// }
	
});