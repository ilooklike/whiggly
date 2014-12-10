Whiggly.Views.EventModal = Backbone.View.extend({
	template: JST['events/modal'],
	
	initialize: function() {
		this.listenTo(this.model, 'sync', this.render);
	},
	
	events: {
		'click .close': 'dismiss',
		'click .modal-backdrop' : 'dismiss'
	},
	
	dismiss: function(event) {
		event.preventDefault();
		this.remove();
	},
	
	render: function() {
		var content = this.template({ event: this.model });
		this.$el.html(content);
		return this;
	}
});