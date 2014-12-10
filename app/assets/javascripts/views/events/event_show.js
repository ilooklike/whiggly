//expire after modal implementation

Whiggly.Views.EventShow = Backbone.View.extend({
	className: "event-show",
	template: JST['events/show'],
	
	render: function() {
		var content = this.template({ event: this.model });
		this.$el.html(content);
		return this;
	}
});