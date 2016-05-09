Meteor.methods({
	addPost : function(postData) {
		//console.log(postData);
		if(postData == null) {
			alert('null object!');
		}
		postData.createdAt = new Date();
		return Posts.insert(postData);
	},

	
});