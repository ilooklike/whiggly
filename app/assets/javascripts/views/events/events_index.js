Whiggly.Views.EventsIndex = Backbone.CompositeView.extend({
	template: JST['events/index'],
	
	events: {
    'mouseenter h3': 'lightMarker',
    'mouseleave h3': 'unlitMarker',
		'click h3': 'showModal'
	},
	
	showModal: function (event) {
		event.preventDefault();
		var model = this.collection.get($(event.currentTarget).data('id'))
	  this.modalView = this.modalView ||
	    new Whiggly.Views.EventModal({ model: model });
	  $('body').prepend(this.modalView.render().$el);
	  this.modalView.delegateEvents();
	},
	
	initialize: function() {
		window.v = this;
		//initialize the map
		this.mapView = new Whiggly.Views.Map();
		this.listenToOnce(this.collection, "sync", this.drop);
		this.listenTo(this.collection, "remove", this.mapView.removeMarker.bind(this.mapView));
		
		//render sidebar
		this.listenTo(this.collection, "add", this.addEvent);
		this.listenTo(this.collection, "sync", this.render);
		this.collection.each((function(event) {
			this.addList(event)
		}).bind(this));
		
		//TODO add remove event from listing
		this.listenTo(this.collection, "remove", this.removeEvent);	
	},
	
	addEvent: function(event) {
		var subview = new Whiggly.Views.EventItemList( { model: event });
		this.addSubview("#event-list", subview);
	},
		
	drop: function(events) {
		var view = this.mapView;
		var j = 0;
		function delayDrop() {
			view.addMarker(events.models[j]);	
			j++;
		}
		
		for (var i = 0; i < this.collection.length; i++) {
			setTimeout(delayDrop, i * 200);
		}
		
		this.listenTo(this.collection, "add", this.mapView.addMarker.bind(this.mapView));
	},
	
	eventShow: function(event) {
		event.preventDefault();
		Backbone.history.navigate('/#', { trigger: true });
	},
	
	lightMarker: function(event) {
		var id = $(event.currentTarget).data("id");
		var marker = this.collection.get(id).marker;
		marker.setIcon(this.mapView.hoverList);
		marker.setZIndex(5);
	},
	
	removeEvent: function(event) {
		var subview = _(this.subviews('#event-list')).find(function(subview) {
			return subview.model === event;
		});
		
		this.removeSubview("#event-list", subview);
	},
	
	render: function() {
		var content = this.template;
		this.$el.html(content);
		this.attachSubviews();
		
	  this.$('#event-list').accordion({
      collapsible: true,
			heightStyle: "content",
			event: "click hoverintent",
			active: false, 
			header: 'h3'
    });
		
	  $("#event-list h3 a").click(function() {
	    window.location = $(this).attr('href');
	    return false;
	  });
		return this;
	},
	
	unlitMarker: function(event) {
		var id = $(event.currentTarget).data("id");
		var marker = this.collection.get(id).marker;
		marker.setIcon(this.mapView.closedIcon);
		marker.setZIndex(0);
	},
	
	showStreetView: function(event) {
		debugger
	}
	
});


