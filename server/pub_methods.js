Meteor.methods({
	addPost : function(postData) {
		//console.log(postData);
		postData.createdAt = new Date();
		return Posts.insert(postData);
	}
});