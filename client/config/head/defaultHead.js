//To change titles and meta tags that are set at server startup view the /server/startup/headConfiguration.js file.
//In case no route specific titles & meta tags are set this default will be used:

Meteor.startup(function() {
  if(Meteor.isClient){
    return SEO.config({
      title: 'Project Title',
      meta: {
        'description': 'Project Title is a project about project subject.'
      }
    });
  }
});
