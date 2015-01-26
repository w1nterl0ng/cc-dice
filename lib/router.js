Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404'
  //TODO: loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/profile', function () {
  this.render("profile");
}, {name: 'profile'});

Router.route('/logout', function () {
  this.render("logout");
}, {name: 'logout'});

Router.route('/login', function () {
  this.render("login");
}, {name: 'login'});
