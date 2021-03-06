Slingshot.fileRestrictions("myImageUploads", {
	allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
	maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited)
});

Slingshot.createDirective("myImageUploads", Slingshot.S3Storage, {
	
	bucket: "kitchencodes",
	acl: "public-read",
	
	
	authorize: function () {
	//Deny uploads if user is not logged in.
	// if (!this.userId) {
	// 	var message = "Please login before posting files";
	// 	throw new Meteor.Error("Login Required", message);
	// }

		return true;
	},

	key: function (file) {
		//Store file into a directory by the user's username.
		// var user = Meteor.users.findOne(this.userId);
		// var currentUserId = Meteor.user().emails[0].address;
		return "/" + file.name;
	}
});