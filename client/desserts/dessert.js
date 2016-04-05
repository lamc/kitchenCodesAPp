if (Meteor.isClient) {
 Template.desserts.rendered = function() {
	Session.setDefault ('dessert_posts', [
			{title: "Red Velvet Cookies", body: "This is my first blog post ever!"}, 
			{title: "Chocolate White Chip Cookies", body: "This is my second blog post ever!"}
		]);
	};

  Template.desserts.helpers({
    dessert_recipe: function () {
    	return Session.get('dessert_posts');
    	}
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}