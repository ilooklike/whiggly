Whiggly.Collections.Events = Backbone.Collection.extend({
  model: Whiggly.Models.Event,
	url: "/api/events",

});

Whiggly.Events = new Whiggly.Collections.Events()
