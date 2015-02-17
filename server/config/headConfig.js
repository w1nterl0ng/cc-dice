//Meta tags and titles that are set at server startup. In case a route is not set here the default configuration from
// /client/config/defaultHead.js is used.

Meteor.startup(function () {
  SeoCollection.update({route_name: 'home'}, {
    $set: {
      route_name: 'home',
      title: 'Project Title | Welcome',
      meta: {'description': 'Project Title is a project about project subject.'}
    }
  }, {upsert: true});
  SeoCollection.update({route_name: 'features'}, {
    $set: {
      route_name: 'features',
      title: 'Project Title | Features',
      meta: {'description': 'Look at all these amazing features Project Title has.'}
    }
  }, {upsert: true});
  SeoCollection.update({route_name: 'about'}, {
    $set: {
      route_name: 'about',
      title:'Project Title | About',
      meta: {'description': 'Read about how Project Title came to be.'}
    }
  }, {upsert: true});
  SeoCollection.update({route_name: 'contact'}, {
    $set: {
      route_name: 'contact',
      title:'Project Title | Contact',
      meta: {'description': 'Behold the plentiful ways to contact Project Title.'}
    }
  }, {upsert: true});
  SeoCollection.update({route_name: 'profile'}, {
    $set: {
      route_name: 'profile',
      title:'Project Title | Profile',
      meta: {'description': 'This is your Project Title profile page.'}
    }
  }, {upsert: true});
  SeoCollection.update({route_name: 'logout'}, {
    $set: {
      route_name: 'logout',
      title:'Project Title | Logout',
      meta: {'description': 'This is the Project Title logout page.'}
    }
  }, {upsert: true});
  SeoCollection.update({route_name: 'login'}, {
    $set: {
      route_name: 'login',
      title:'Project Title | Login & Register',
      meta: {'description': 'This is the Project Title login and register page.'}
    }
  }, {upsert: true});
  SeoCollection.update({route_name: 'dashboard'}, {
    $set: {
      route_name: 'dashboard',
      title:'Project Title | Dashboard',
      meta: {'description': 'This is the Project Title Dashboard.'}
    }
  }, {upsert: true});
});

