Template.appetizer.helpers({
	app_post: function() {
		return Posts.find(
			{"category":"appetizer"}, 
			{sort: {createdAt: -1} }
		);
	}
});