Template.posts.events({
	// "submit form": function(event) {
	// 	console.log(
	// 		event.target.title.value, 
	// 	    document.getElementById("body-textarea").value
	// 	);
	// 	return false;
	// }
	"submit form": function(event) {
	    event.preventDefault(); // this prevents built-in form submission
	    //var uploader = new ReactiveVar();
		var upload = new Slingshot.Upload("myImageUploads");
		var category = event.target.category.value;
		var title = event.target.title.value; 
		var body = event.target.body.value;
		// var timeStamp = Math.floor(Date.now());

		 
		// document.getElementById("body-textarea").value;           

		upload.send(document.getElementById('uploadFile').files[0], function (error, imageUrl) {
			//uploader.set();

			if (error) {
				console.error('Error uploading');
				alert (error);
			}
			else {
				alert("Success Uploading Image!");
				console.log('uploaded file available here: '+ imageUrl);

				Meteor.call('addPost', {
					category: category,
					title: title,
					body: body,
					imageUrl: imageUrl
				});

			}
		});
		//	uploader.set(upload);

		event.target.reset();
		return false;
	}
});

Template.posts.helpers({

    // isUploading: function () {
    //     return Boolean(uploader.get());
    // },

    // progress: function () {
       //  var upload = uploader.get();
       //  if (upload)
       //   return Math.round(upload.progress() * 100);
    // },

    imageUrl: function(dlURL) {
      return dlURL;
    }


    // url: function () {

    //  return downloadUrl;

    // }

});
