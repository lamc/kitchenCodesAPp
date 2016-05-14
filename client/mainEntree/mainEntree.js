Template.mainEntree.helpers({
	mainEntree_post: function() {
		return Posts.find(
			{"category":"main-entree"}, 
			{sort: {createdAt: -1} }
		);
	}
});