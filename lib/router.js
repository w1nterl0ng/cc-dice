Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  progressSpinner : false
});

Router.route('/', {
  name: 'home',
  template: 'home',
  fastRender: true
});

Router.route('/features', {
  name: 'features',
  template: 'features',
  fastRender: true
});

Router.route('/about', {
  name: 'about',
  template: 'about',
  fastRender: true
});

Router.route('/contact', {
  name: 'contact',
  template: 'contact',
  fastRender: true
});

Router.route('/profile', {
  name: 'profile',
  template: 'profile',
  fastRender: true
});

Router.route('/logout', {
  name: 'logout',
  template: "logout",
  fastRender: true
});

Router.route('/login', {
  name: 'login',
  template: "login",
  fastRender: true
});

Router.route('/dashboard', {
  name: 'dashboard',
  template: 'dashboard',
  subscriptions: function () {
    Meteor.subscribe('aSubscription');
  },
  fastRender: true
});