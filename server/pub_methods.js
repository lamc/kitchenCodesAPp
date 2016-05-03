Meteor.methods({
	addPost : function(postData) {
		//console.log(postData);
		if(error) {
			alert(error);
		}
		postData.createdAt = new Date();
		return Posts.insert(postData);
	}
});