// var uploader = new ReactiveVar();

// var imageDetails = new Mongo.Collection('images'); 
// var currentUserId = Meteor.userId();

Template.imageUploader.events({
  'change .uploadFile': function(event, template) {
    event.preventDefault();
    var upload = new Slingshot.Upload("myImageUploads");
    // var timeStamp = Math.floor(Date.now());                 

    upload.send(document.getElementById('uploadFile').files[0], function (error, downloadUrl) {
      // uploader.set();

      if (error) {
        console.error('Error uploading');
        alert (error);
      }
      else {
        console.log("Success!");
        console.log('uploaded file available here: '+ downloadUrl);

       
        // imageDetails.insert({
        //   imageurl: downloadUrl,
        //   time: timeStamp,
        //   uploadedBy: currentUserId
        // });
      }
    });
    // uploader.set(upload);
    return false;
  }
});

Template.imageUploader.helpers({

    // isUploading: function () {
    //     return Boolean(uploader.get());
    // },

    // progress: function () {
	   //  var upload = uploader.get();
	   //  if (upload)
	   //  	return Math.round(upload.progress() * 100);
    // },

    imageUrl: function(dlURL) {
      return dlURL;
    }


    // url: function () {

    // 	return downloadUrl;

    // }

});


// Template.uploader.events({
// 	'click #img_submit' : function(f) {
// 		var uploader = new Slingshot.Upload("postImgUpload");
// 		console.log("success!");
		
// 		uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
// 		  if (error) {
// 		    // Log service detailed response
// 		    console.error('Error uploading', uploader.xhr.response);
// 		    alert (error);
// 		  }
// 		  else {

// 		    Meteor.update( { push: {"files": downloadUrl} } );
// 		  }
// 		});
// 		return false;
// 	}
// });



// Template.myPicture.helpers({
//   url: function () {
//     //if we are uploading an image, pass true to download the image into cache
//     //this will preload the image before using the remote image url.
//     return this.uploader.url(true);
//   }
// });

// Template.progressBar.helpers({
//   progress: function () {
//     return Math.round(this.uploader.progress() * 100);
//   }
// });


