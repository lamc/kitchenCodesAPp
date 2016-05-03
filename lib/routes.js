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

FlowRouter.route('/recipes', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "recipes"});
  }
});

FlowRouter.route('/blog', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blog"});
  }
});

FlowRouter.route('/posts', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "posts"});
  }
});