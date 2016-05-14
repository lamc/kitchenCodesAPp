Template.sideDish.helpers({
	sideDish_post: function() {
		return Posts.find(
			{"category":"side-dish"}, 
			{sort: {createdAt: -1} }
		);
	}
});