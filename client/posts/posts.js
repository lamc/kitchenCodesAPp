Template.posts.events({
	"submit form": function(event) {
	    event.preventDefault(); // this prevents built-in form submission
	    Meteor.call('addPost', {title: event.target.title.value, body: event.target.body.value});
	}
});

Template.posts.helpers({
	posts: function() {
		return Posts.find({}, {sort: {createdAt: -1} } );
	}
});