Whiggly.Views.EventItem = Backbone.View.extend({
	// className: "event-list-item",
	template: JST['events/item'],
	
	render: function() {
		var content = this.template({ event: this.model });
		this.$el.html(content);
		// this.$el.accordion();
		return this;
	}
});