Whiggly.Views.EventModal = Backbone.View.extend({
	template: JST['events/modal'],
	
	initialize: function(options) {
		this.listenTo(this.model, 'sync', this.render);
		this.parentView = options.parentView;
	},
	
	events: {
		'click .close': 'dismiss',
		'click .modal-backdrop' : 'dismiss'
	},
	
	dismiss: function(event) {
		event.preventDefault();
		this.parentView.modalView = null;
		this.remove();
	},
	
	render: function() {
		var content = this.template({ event: this.model });
		this.$el.html(content);
		return this;
	}
});