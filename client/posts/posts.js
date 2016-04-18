Template.posts.events({
	"submit form": function(event) {
	    event.preventDefault(); // this prevents built-in form submission
	    Meteor.call('addPost', {title: event.target.title.value, body: event.target.body.value});
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