Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', {
	template: 'home'
});

Router.route('/about');

Router.route('/desserts');

Router.route('/posts');