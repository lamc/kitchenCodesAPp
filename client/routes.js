Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/desserts', function () {
  this.render('desserts');
});