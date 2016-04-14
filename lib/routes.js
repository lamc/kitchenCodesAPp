FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});

FlowRouter.route('/about', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "about"});
  }
});

FlowRouter.route('/desserts', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "desserts"});
  }
});

FlowRouter.route('/posts', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "posts"});
  }
});