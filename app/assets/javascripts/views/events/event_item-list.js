Whiggly.Views.EventItemList = Backbone.View.extend({
	// className: "event-list-item",
	template: JST['events/item_list'],
	
	render: function() {
		var content = this.template({ event: this.model });
		this.$el.html(content);
		// this.$el.accordion();
		return this;
	},
	
});