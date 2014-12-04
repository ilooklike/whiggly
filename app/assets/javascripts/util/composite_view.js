Backbone.CompositeView = Backbone.View.extend({
	//just handle one layer, does not handle if subview has subviews
	addSubview: function(selector, subview) {
		this.subviews(selector).push(subview);
		this.$(selector).append(subview.render().$el);
		subview.delegateEvents();
	},
	
	removeSubview: function(selector, subview) {
		subview.remove();
		var i = this.subviews.indexOf(subview);
		this.subviews(selector).splice(i, 1);
	},
	
	attachSubviews: function() {
		var view = this;
		_(view.subviews()).each(function(selector, subviews) {
			view.$(selector).empty();
			_(subviews).each(function(subview) {
				view.$(selector).append(subview.render().$el);
			})
		})
	},
	
	subviews: function(selector) {
		this._subviews = this._subviews || {};
		
		if (!selector) {
			return this._subviews;
		} else {
			this._subviews[selector] = this._subviews[selector] || [];
			return this._subviews[selector]
		}
	}
})