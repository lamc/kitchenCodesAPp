Meteor.methods({
	addPost : function(postData) {
		console.log(postData);
		postData.createdAt = new Date();
		var postID = Posts.insert(postData);
		return postID;
	}
});