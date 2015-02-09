Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  progressSpinner : false
});

Router.route('/',
  function () {this.render('home')},
  {name: 'home'},
  {fastRender: true}
);

Router.route('/features',
  function () {this.render("features")},
  {name: 'features'},
  {fastRender: true}
);

Router.route('/about',
  function () {this.render("about")},
  {name: 'about'},
  {fastRender: true}
);

Router.route('/contact',
  function () {this.render("contact")},
  {name: 'contact'},
  {fastRender: true}
);

Router.route('/profile',
  function () {this.render("profile")},
  {name: 'profile'},
  {fastRender: true}
);

Router.route('/logout',
  function () {this.render("logout")},
  {name: 'logout'},
  {fastRender: true}
);

Router.route('/login',
  function () {this.render("login")},
  {name: 'login'},
  {fastRender: true}
);

Router.route('/dashboard',
  function () {this.render("dashboard")},
  {name: 'dashboard'},
  {fastRender: true}
);
