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

FlowRouter.route('/appetizers', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "appetizer"});
  }
});

FlowRouter.route('/desserts', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "dessert"});
  }
});

FlowRouter.route('/mainEntree', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "mainEntree"});
  }
});

FlowRouter.route('/sideDishes', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "sideDish"});
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