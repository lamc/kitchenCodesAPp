Template.dessert.helpers({
	posts: function() {
		return Posts.find(
			{"category":"desserts"}, 
			{sort: {createdAt: -1} }
		);
	}
});