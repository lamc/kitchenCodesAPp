Template.posts.events({
	"submit form": function(event) {
	    event.preventDefault(); // this prevents built-in form submission
	    //var uploader = new ReactiveVar();
		var upload = new Slingshot.Upload("myImageUploads");
		// var timeStamp = Math.floor(Date.now());                 

		upload.send(document.getElementById('uploadFile').files[0], function (error, imageUrl) {
		  //uploader.set();

		  if (error) {
		    console.error('Error uploading');
		    alert (error);
		  }
		  else {
		    console.log("Success!");
		    console.log('uploaded file available here: '+ imageUrl);
		    
		    Meteor.call('addPost', {
		    	title: event.target.title.value, 
		    	body: document.getElementById("body-textarea").value, 
		    	imageUrl: imageUrl
		    });


		    // imageDetails.insert({
		    //   imageurl: downloadUrl,
		    //   time: timeStamp,
		    //   uploadedBy: currentUserId
		    // });
		  }
		});
		//	uploader.set(upload);
		
		event.target.reset();
		return false;
	}

});