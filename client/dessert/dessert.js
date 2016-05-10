Template.dessert.helpers({
	dessert_post: function() {
		return Posts.find(
			{"category":"desserts"}, 
			{sort: {createdAt: -1} }
		);
	}
});