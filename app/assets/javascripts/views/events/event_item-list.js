Whiggly.Views.EventItemList = Backbone.View.extend({
	// className: "event-list-item",
	template: JST['events/item_list'],
	
	events: {
		'click': 'showModal'
	},
	
	render: function() {
		var content = this.template({ event: this.model });
		this.$el.html(content);
		// this.$el.accordion();
		return this;
	},
	
	showModal: function () {
		alert("yeah!")
		debugger
	}
});