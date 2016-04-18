Template.blog.helpers({
  posts: function() {
		return Posts.find({}, {sort: {createdAt: -1} } );
	},

  formatDate: function(date) {
    return moment(date).format('MMMM DD YYYY, h:mm:ss a');
  }
});