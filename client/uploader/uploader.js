Template.uploader.events({
	'click #img_submit' : function(f) {
		var uploader = new Slingshot.Upload("postImgUpload");
		console.log("success!");
		
		uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
		  if (error) {
		    // Log service detailed response
		    console.error('Error uploading', uploader.xhr.response);
		    alert (error);
		  }
		  else {

		    Meteor.update( { push: {"files": downloadUrl} } );
		  }
		});
		return false;
	}
});



Template.myPicture.helpers({
  url: function () {
    //if we are uploading an image, pass true to download the image into cache
    //this will preload the image before using the remote image url.
    return this.uploader.url(true);
  }
});

Template.progressBar.helpers({
  progress: function () {
    return Math.round(this.uploader.progress() * 100);
  }
});