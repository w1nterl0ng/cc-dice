Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  progressSpinner : false
});

Router.route('/',
  function () {this.render('home')},
  {name: 'home'}
);

Router.route('/features',
  function () {this.render("features")},
  {name: 'features'}
);

Router.route('/about',
  function () {this.render("about")},
  {name: 'about'}
);

Router.route('/contact',
  function () {this.render("contact")},
  {name: 'contact'}
);

Router.route('/profile',
  function () {this.render("profile")},
  {name: 'profile'}
);

Router.route('/logout',
  function () {this.render("logout")},
  {name: 'logout'}
);

Router.route('/login',
  function () {this.render("login")},
  {name: 'login'}
);

Router.route('/dashboard',
  function () {
    this.render("dashboard");
    this.subscribe('aSubscription');
  },
  {name: 'dashboard'}
);
